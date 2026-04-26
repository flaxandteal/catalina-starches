FROM node:22-bookworm AS build

WORKDIR /app

# Install dependencies first (better caching)
COPY package.json package-lock.json ./
RUN npm install

# Copy source
COPY . .

# Install Go (required for Hugo modules)
RUN curl -O -L https://go.dev/dl/go1.24.6.linux-amd64.tar.gz && \
    tar -C /usr/local -xzf go1.24.6.linux-amd64.tar.gz && \
    rm go1.24.6.linux-amd64.tar.gz
ENV PATH="/usr/local/go/bin:$PATH"

# Install Hugo Extended (needed for SCSS)
RUN curl -O -L https://github.com/gohugoio/hugo/releases/download/v0.152.2/hugo_extended_0.152.2_linux-amd64.tar.gz && \
    tar -xzf hugo_extended_0.152.2_linux-amd64.tar.gz && \
    mv hugo /usr/local/bin/ && \
    rm hugo_extended_0.152.2_linux-amd64.tar.gz

# Download pre-built Rós Madair indexer binary from release
ARG ROS_MADAIR_VERSION=v0.1.0-alpha.3
RUN curl -fsSL "https://github.com/flaxandteal/ros-madair/releases/download/${ROS_MADAIR_VERSION}/ros-madair-build-linux-amd64" \
      -o /usr/local/bin/ros-madair-build && \
    chmod +x /usr/local/bin/ros-madair-build

# Build Rós Madair definitions index from prebuild data.
# The base URI must match ros_madair.rdf_base_uri in hugo.yaml.
RUN ros-madair-build prebuild/ static/definitions/ros-madair/ 2000 https://doc.govt.nz/

RUN npm run precompile:templates

RUN hugo mod get && hugo

# Generate base64 .txt sidecars for all pagefind binary files.
# Enterprise proxies (Zscaler) block gzip-compressed binaries;
# the fetch interceptor in pagefind.ts falls back to these.
RUN npm run pagefind:fallback

# ---- SERVE WITH NGINX ----
FROM nginxinc/nginx-unprivileged:1.25-alpine
WORKDIR /usr/share/nginx/html
USER root
COPY --from=build /app/docs .
USER 33
EXPOSE 8080

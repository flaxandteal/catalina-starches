FROM node:23.10.0 AS build

ARG STARCHES_INCLUDE_PRIVATE=0
ARG DATA_FILE="aai_merged.json"

ENV STARCHES_INCLUDE_PRIVATE=$STARCHES_INCLUDE_PRIVATE
ENV DATA_FILE=$DATA_FILE

WORKDIR /app

# Install dependencies first (better caching)
COPY package.json package-lock.json ./
RUN npm install

# Copy source
COPY . .

# Install Go (required for Hugo modules)
RUN curl -O -L https://go.dev/dl/go1.23.4.linux-amd64.tar.gz && \
    tar -C /usr/local -xzf go1.23.4.linux-amd64.tar.gz && \
    rm go1.23.4.linux-amd64.tar.gz
ENV PATH="/usr/local/go/bin:$PATH"

# Install Hugo Extended (needed for SCSS)
RUN curl -O -L https://github.com/gohugoio/hugo/releases/download/v0.152.2/hugo_extended_0.152.2_linux-amd64.tar.gz && \
    tar -xzf hugo_extended_0.152.2_linux-amd64.tar.gz && \
    mv hugo /usr/local/bin/ && \
    rm hugo_extended_0.152.2_linux-amd64.tar.gz

# 1. ETL - process data first
RUN npx  --node-options=--inspect --node-options=--max-old-space-size=8192  starches-builder etl --file ./prebuild/business_data/test_data.json --prefix qld- --include-private --summary

# 3. Index - create search index AFTER Hugo builds the HTML
RUN npx starches-builder index --site docs --include-private

# 2. Hugo - fetch modules and build site (outputs to docs/ per hugo.toml)
RUN hugo mod get && hugo

# ---- SERVE WITH NGINX ----
FROM nginxinc/nginx-unprivileged:1.25-alpine
WORKDIR /usr/share/nginx/html
USER root
COPY --from=build /app/docs .
USER 33
EXPOSE 8080
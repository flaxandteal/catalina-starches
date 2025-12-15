FROM node:23.10.0 AS build

<<<<<<< HEAD
ARG DATA_FILE="CA_BS_data_output_df.json"

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

=======
ARG STARCHES_INCLUDE_PRIVATE=0
ENV STARCHES_INCLUDE_PRIVATE=$STARCHES_INCLUDE_PRIVATE

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

>>>>>>> 7f65add (fix: fix failing docker build)
# Install Hugo Extended (needed for SCSS)
RUN curl -O -L https://github.com/gohugoio/hugo/releases/download/v0.152.2/hugo_extended_0.152.2_linux-amd64.tar.gz && \
    tar -xzf hugo_extended_0.152.2_linux-amd64.tar.gz && \
    mv hugo /usr/local/bin/ && \
    rm hugo_extended_0.152.2_linux-amd64.tar.gz
<<<<<<< HEAD

RUN npx  --node-options=--inspect --node-options=--max-old-space-size=8192  starches-builder etl --file ./prebuild/business_data/$DATA_FILE --prefix qld- --summary

RUN npx starches-builder index --site docs

RUN npm run precompile:templates

RUN hugo mod get && hugo
=======

# Process data files (ETL step) - create preindex directory and process each data source
RUN mkdir -p prebuild/preindex && \
    npx starches-builder etl --file prebuild/business_data/registries.json --prefix REG_ --include-private=${STARCHES_INCLUDE_PRIVATE} && \
    npx starches-builder etl --file prebuild/business_data/aai_merged.json --prefix AAI_ --include-private=${STARCHES_INCLUDE_PRIVATE}

# Hugo - fetch modules and build site (outputs to docs/ per hugo.toml)
RUN hugo mod get && hugo

# Index - create search index AFTER Hugo builds the HTML
RUN npx starches-builder index --site docs --include-private=${STARCHES_INCLUDE_PRIVATE}
>>>>>>> 7f65add (fix: fix failing docker build)

# ---- SERVE WITH NGINX ----
FROM nginxinc/nginx-unprivileged:1.25-alpine
WORKDIR /usr/share/nginx/html
USER root
COPY --from=build /app/docs .
USER 33
EXPOSE 8080

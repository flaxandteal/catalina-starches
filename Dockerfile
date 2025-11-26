FROM node:23.10.0 as node
ARG STARCHES_INCLUDE_PRIVATE=0

WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

RUN curl -O -L https://go.dev/dl/go1.25.4.linux-amd64.tar.gz && \
    tar -C /usr/local -xzf go1.25.4.linux-amd64.tar.gz && \
    ln -s /usr/local/go/bin/go /usr/bin/go

RUN curl -O -L https://github.com/gohugoio/hugo/releases/download/v0.147.7/hugo_0.147.7_linux-amd64.tar.gz && tar -xzf hugo_0.147.7_linux-amd64.tar.gz
RUN ./hugo

ENV STARCHES_INCLUDE_PRIVATE=$STARCHES_INCLUDE_PRIVATE
RUN echo STARCHES_INCLUDE_PRIVATE=$STARCHES_INCLUDE_PRIVATE && \
    npx starches-builder etl --file prebuild/business_data/aai_merged.json --prefix AAI_

RUN npx starches-builder index --site docs
RUN tar -cf /app/docs.tar -C docs .

FROM nginxinc/nginx-unprivileged:1.21.5-alpine
WORKDIR /usr/share/nginx/html
USER root
COPY --from=node /app/docs.tar .
RUN tar -xf docs.tar && rm -f docs.tar
USER 33
EXPOSE 8080
FROM node:23.10.0 as node
ARG STARCHES_INCLUDE_PRIVATE=0

WORKDIR /app
COPY package.json package.json
# COPY package-lock.json package-lock.json

RUN npm install --include=dev

COPY . .
COPY pagefind-bin pagefind-bin
RUN chmod +x pagefind-bin
RUN curl -O -L https://github.com/gohugoio/hugo/releases/download/v0.147.7/hugo_0.147.7_linux-amd64.tar.gz && tar -xzf hugo_0.147.7_linux-amd64.tar.gz
RUN ./hugo

ENV STARCHES_INCLUDE_PRIVATE=$STARCHES_INCLUDE_PRIVATE

RUN echo "STARCHES_INCLUDE_PRIVATE=$STARCHES_INCLUDE_PRIVATE" && \
    for data in prebuild/business_data/*.json; do \
        if [ -f "$data" ]; then \
            echo "Processing: $data"; \
            node --import tsx utils/preindex.ts "$data" || echo "Warning: Failed to process $data"; \
        fi; \
    done

# Run reindex with pagefind
RUN PAGEFIND_BINARY_PATH=./pagefind-bin node --import tsx utils/reindex.ts
RUN cd docs && tar -cf ../docs.tar *

FROM nginxinc/nginx-unprivileged:1.21.5-alpine
COPY --from=node /app/docs.tar /usr/share/nginx/html/
RUN cd /usr/share/nginx/html && tar -xf docs.tar && rm -f docs.tar
USER 33
EXPOSE 8080

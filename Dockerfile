ARG NODE_VERSION=22.2.0
ARG NPM_REGISTRY=https://registry.npmjs.org/

# Builder image
FROM node:${NODE_VERSION}-bookworm AS builder
ARG NPM_REGISTRY
WORKDIR /app
COPY . ./
ENV NODE_OPTIONS=--max-old-space-size=4096
RUN npm -v \
    && npm config set registry ${NPM_REGISTRY} \
    && npm install -g pnpm \
    && pnpm -v \
    && pnpm config set registry ${NPM_REGISTRY} \
    && pnpm install
RUN pnpm build

# Runtime image
FROM node:${NODE_VERSION}-bookworm-slim
WORKDIR /app
COPY --from=builder /app/.output/ ./.output/
EXPOSE 3000
CMD ["node", "./.output/server/index.mjs"]

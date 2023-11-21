# Builder image
FROM node:20.9.0-bookworm as builder

WORKDIR /app

COPY . ./

ENV NODE_OPTIONS=--max-old-space-size=4096

RUN npm -v \
    && npm config set registry https://registry.npmmirror.com/ \
    && npm install -g pnpm \
    && pnpm -v \
    && pnpm config set registry https://registry.npmmirror.com/ \
    && pnpm install \
    && pnpm build

# Runtime image
FROM node:20.9.0-bookworm-slim

ENV NODE_OPTIONS=--max-old-space-size=4096

WORKDIR /app

COPY --from=builder /app/.output ./.output/

EXPOSE 3000

CMD ["node", "./.output/server/index.mjs"]

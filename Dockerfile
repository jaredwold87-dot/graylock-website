FROM node:20-slim

WORKDIR /app

RUN npm install -g pnpm@10

COPY package.json pnpm-workspace.yaml ./
COPY artifacts/api-server/package.json artifacts/api-server/
COPY artifacts/web/package.json artifacts/web/
COPY lib/api-client-react/package.json lib/api-client-react/
COPY lib/api-spec/package.json lib/api-spec/
COPY lib/api-zod/package.json lib/api-zod/
COPY lib/db/package.json lib/db/

COPY pnpm-lock.yaml ./
RUN pnpm install --no-frozen-lockfile

COPY . .

RUN pnpm --filter './lib/**' -r build || true && \
    pnpm --filter @workspace/api-server build && \
    BASE_PATH=/ pnpm --filter @workspace/web build

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "artifacts/api-server/dist/index.mjs"]

# FlameMate Web (Skeleton)

This repository contains a simplified skeleton for a learning Tinder-like application built with Next.js, Express, Prisma, and PostgreSQL.

## Development

```bash
docker compose up --build
```

The stack includes:
- `web` Next.js frontend at port 3000.
- `api` Express backend at port 4000.
- `db` PostgreSQL at port 5432.

Environment variables can be configured via `.env` files. See `.env.example` for defaults.

## Vercel

The repository includes a root `vercel.json` that directs Vercel to build the Next.js
application located in the `web` workspace:

```json
{
  "builds": [{ "src": "web/package.json", "use": "@vercel/next" }],
  "routes": [{ "src": "/(.*)", "dest": "web/$1" }]
}
```

During deployment Vercel installs all workspace dependencies with
`npm install --workspaces --include-workspace-root` and then runs the Next.js build:

```bash
npm run build --workspace web
```

All application code lives under the `web` directory so no root `next.config.js` is
required.


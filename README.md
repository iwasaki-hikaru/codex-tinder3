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

Deployment is configured through the root `vercel.json`. The build command runs the
Next.js build inside the `web` workspace via the `vercel-build` script:

```bash
npm run vercel-build
```

Vercel reads the Next.js version from the root `package.json`, so `next` is declared
as a dependency to allow the build to proceed. The `vercel.json` configuration uses
`npm install --workspaces --include-workspace-root` so that all workspace packages are
installed before running the `web` workspace build.

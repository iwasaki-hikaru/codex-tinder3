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

The repository uses a monorepo layout. When deploying to Vercel, set the project root to the `web` directory or rely on the
root `vercel-build` script which builds the web workspace:

```bash
npm run vercel-build
```

This ensures Vercel detects the Next.js app correctly.

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

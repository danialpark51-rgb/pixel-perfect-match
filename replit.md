# ReceiptIQ

ReceiptIQ is an early-stage frontend preview for receipt and expense review. The landing page and dashboard use fictional demonstration data; uploads, AI analysis, account management, persistence, reports, and payments are not implemented.

## Run on Replit

Install the dependencies from the existing Bun lockfile:

```sh
bun install --frozen-lockfile
```

Start the web app:

```sh
bun run dev -- --host 0.0.0.0 --port 5000
```

The app is built with React, TanStack Start, Vite, and Tailwind CSS. The current project stage is frontend-only; no FastAPI or Supabase service is configured.

## Production server

The production build uses Nitro's Node server preset for Replit Autoscale:

```sh
bun run build
bun run start
```

The server uses the platform-provided `PORT` and listens on the host configured by Nitro.

## Checks

```sh
bun run build
bun run test
bun run lint
```

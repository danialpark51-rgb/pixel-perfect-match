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

## Checks

```sh
bun run build
bun run test
bun run lint
```

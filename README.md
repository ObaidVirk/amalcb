# AmalCB Frontend

AmalCB is a Next.js 14 banking frontend with public marketing pages, multilingual UI, customer auth screens, Stripe-powered pricing checkout, and an admin dashboard experience.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Stripe

## Features

- Responsive banking UI clone with branded marketing pages
- Login and signup flows
- Admin dashboard interface
- Language selector with 20 translation files
- Stripe checkout integration for paid plans

## Setup

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm start
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your own values before running the app.

Use server-only variables for secrets such as admin credentials and Stripe secret keys. Only values that must be available in the browser should use the `NEXT_PUBLIC_` prefix.

Required variables:

- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `STRIPE_SECRET_KEY`

## Repository Notes

- `.env.local` is ignored and must never be committed.
- Build output such as `.next`, `dist`, and `node_modules` is ignored.
- This repository is intended to stay frontend-focused, with secrets loaded from local environment files or deployment platform settings.

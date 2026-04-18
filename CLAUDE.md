# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Real estate platform (J&A Inmobiliaria) built with Next.js 14 App Router, TypeScript, Firebase, and React Query. Allows property listing, admin management, contact forms, and email notifications.

## Commands

```bash
pnpm dev          # Development server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # ESLint
pnpm email        # Email template dev server (react-email)
pnpm populate     # Populate Firestore with seed data
```

Always use `pnpm` — never `npm` or `yarn`.

## Architecture

### Folder layout

```
firebase/                     # Firebase config & Firestore service (outside src/)
src/
  app/                        # Next.js App Router pages + API routes
  components/                 # UI-only, presentational components
    layout/                   # Header, Footer, AlertContext
    auth/                     # Auth context provider, login forms
    admin/                    # Property CRUD forms and list
    contact/forms/            # BuyerForm, OwnerForm, ContactForm
    contact/emails/           # React Email templates
    home/                     # Hero, CarouselSection (featured properties)
    map/                      # Leaflet map wrapper
    ui/                       # Shadcn/Radix base components
  hooks/                      # Custom hooks — all business logic lives here
  services/                   # Pure utility services (geocoding, etc.)
  providers/                  # ReactQueryProvider
  types/                      # TypeScript interfaces/types
  validations/                # Zod schemas (buyerSchema, ownerSchema)
  constants/                  # App-wide constants and static data
  lib/                        # Shared utilities (utils.ts)
```

### Data flow

- **Firebase/Firestore** is the primary datastore, accessed via `firebase/firestoreService.ts`
- **API routes** (`src/app/api/`) act as the server layer between the client and Firestore/Resend
- **React Query** manages all server state and caching; hooks in `src/hooks/` call the API routes
- **Components never call APIs directly** — always through a custom hook
- **Email** is sent via the `/api/send` route using Resend + React Email templates

### Key patterns

- Container/view separation: hooks handle data fetching and logic; components receive props
- Each page-level hook is named after its page: `usePropertyListPageLogic`, `usePropertyDetailPageLogic`
- Form logic in dedicated hooks: `usePropertyFormLogic`, `usePropertyMutations`
- Auth state via `AuthContext` (`src/components/auth/`)
- Theme (dark/light) via `ThemeContext` (`src/components/theme/`)

## Tech stack

| Concern | Library |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + CVA |
| UI primitives | Shadcn/UI + Radix UI |
| State (server) | TanStack React Query v5 |
| State (forms) | React Hook Form + Zod |
| Database | Firebase Firestore |
| Auth | Firebase Auth |
| Storage | Firebase Cloud Storage |
| Maps | Leaflet + React Leaflet |
| Email | Resend + React Email |
| Icons | Lucide React |
| Animations | Framer Motion |

## Tailwind theme

Custom colors defined in `tailwind.config.ts`:
- Primary: red `#C12628`
- Dark mode enabled via `class` strategy
- Always use theme tokens (`text-primary`, `bg-surface`) — never raw hex values

Path alias: `@/*` → `src/*`

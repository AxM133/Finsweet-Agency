# Finsweet Agency

React + TypeScript + Vite, Tailwind CSS v4, react-router, @tanstack/react-query, zod.
Architecture: [Feature-Sliced Design](https://feature-sliced.design).

## Scripts

```bash
npm run dev      # dev server
npm run build    # tsc -b && vite build
npm run lint
```

## Layers (top → bottom)

A layer may import only from layers **below** it. Slices on the same layer must not import each other.
Every slice exposes a public API via `index.ts` — import only from it (`@/widgets/header`, not `@/widgets/header/ui/Header`).

| Layer      | Purpose                                              | Slices                                                                                         |
| ---------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `app`      | entry: providers, router, layouts, global styles     | —                                                                                              |
| `pages`    | one slice per route (page-only sections live inside) | home, services, company, blog, blog-post, careers, career-details, contact, team-member, privacy-policy, not-found |
| `widgets`  | large blocks reused across pages                     | header, footer, newsletter, process, expertise, client-logos, stats                            |
| `features` | user actions                                         | subscribe-newsletter, send-message, apply-to-job                                               |
| `entities` | business entities (zod schema, api, card)            | post, job, team-member, service, testimonial                                                   |
| `shared`   | reusable code with no business logic                 | `ui`, `api`, `lib`, `config`, `assets`                                                         |

Segments inside a slice: `ui/`, `model/` (schemas, types, hooks), `api/`, `lib/`, `config/`.
Segments are added when a slice actually needs them.

## Conventions

- Alias `@/` → `src/`.
- Routes live in `shared/config/routes.ts`; lazy page loading via `app/router/lazy-page.ts`.
- Design tokens (colors, font, shadow) live in `app/styles/index.css` under `@theme`; use `bg-primary`, `text-ink`, `bg-mint` etc.
- UI kit: `shared/ui` (import from `@/shared/ui`). Preview in dev: `/ui-kit`.
- Use `cn()` from `@/shared/lib` to merge classes; polymorphic components (`Button`, `Heading`, `Card`) take an `as` prop.
- Forms: `useZodForm({ schema, onSubmit })` from `@/shared/lib` — zod schema gives validation and the typed `values`.
- Animations: `Reveal`, `Stagger`/`StaggerItem`, `CountUp` from `@/shared/ui` (built on `motion`, respects reduced-motion).
- No backend yet: entity `api/` files use `mockRequest(schema, data)`; replace with `request(path, schema)` when the API appears.
- Server data: `shared/api/request.ts` — generic fetcher, response is validated by a zod schema and typed with `z.infer`.

# Nord & Nest — Mini E-commerce Store

- **Project type:** Demo portfolio store (fictional home décor brand)
- **Positioning:** React/Next.js e-commerce, state management and product browsing
- **Status:** MVP deployed; GitHub and automatic Vercel deployment connected
- **UI language:** English
- **Original planning estimate:** Approximately 4–6 focused development days

## 1. Goal and scope

Create a professional small online store for modern, sustainable-inspired home décor: ceramics, vases, lamps, candles and textiles. The MVP is **a fully interactive storefront, not a real commercial checkout**. Users can search, filter, sort, save favorites, manage a persistent cart and complete a clearly labeled demo checkout flow.

**MVP includes:** homepage, catalog, product details, search/filters/sort, favorites, cart, accessible demo checkout, empty/error states and portfolio documentation.
**Not in MVP:** credit-card processing, customer accounts, real order submission, shipping integrations, inventory synchronization or an admin dashboard.

## 2. Brand and visual identity

| Item | Decision |
| --- | --- |
| Brand | Nord & Nest |
| Tagline | *Thoughtful pieces for everyday living.* |
| Tone | Warm, minimal, Scandinavian-inspired, functional |
| Colors | Ivory `#F7F3ED`, charcoal `#292826`, clay `#B98569`, sand `#D9CBB9` |
| Typography | Modern serif accents and readable sans-serif through Google Fonts, with system fallbacks |
| Products | Fictional sample products with consistent images, variants and prices |
| Primary CTA | **Shop the Collection** |
| Core proof point | Real interactions: product filters, favorites, cart and checkout validation |

Use only licensed product images. Avoid implying certifications or verified sustainability claims for a fictional brand.

## 3. Routes and functionality

| Route | User goal | Key features |
| --- | --- | --- |
| `/` | Browse the brand | Hero, featured products, categories, value proposition |
| `/shop` | Find products | Search, category/price filters, sort, product grid |
| `/shop/[slug]` | Inspect a product | Gallery, description, variant selection, add to cart |
| `/wishlist` | Review saved items | Toggle favorites, persist between sessions |
| `/cart` | Review choices | Quantity +/- , remove item, subtotals, empty state |
| `/checkout` | Experience a flow | Validated demo form, no payment, explicit demo success state |
| `/about` | Understand the concept | Brand story and design approach |
| `/contact` | Find support | Fictional contact details clearly marked as sample |

### Data model (static typed seed data)

`Product`: `id`, `slug`, `name`, `category`, `description`, `price`, `currency`, `images`, `variants`, `stockStatus`, `featured`.
`CartItem`: `productId`, `variantId`, `quantity`, `unitPriceSnapshot` (display only in MVP).
`Wishlist`: a collection of product IDs.

**Security/accuracy note:** In a future real storefront, calculate actual totals and stock checks on the server. Browser-stored prices and cart state are *never* an authoritative basis for charging customers.

## 4. Technical stack

| Layer | Technology | Why |
| --- | --- | --- |
| App and routes | Next.js App Router | Dynamic routes, good SEO and rendering |
| Language | TypeScript | Reliable typed product/cart data |
| UI | React + Tailwind CSS | Component system and responsive layout |
| Global client state | Zustand | Small, clear cart/wishlist stores |
| Persistence | `localStorage` | Retain cart/wishlist in demo mode only |
| Forms | React Hook Form + Zod | Demo checkout validation |
| Assets | `next/image`, Google Fonts and original generated imagery | Consistent product presentation |
| Unit tests | Node.js test runner through `tsx` | Test cart math, saved data, filters and checkout validation |
| Deployment | GitHub + Vercel | Live demo and source |

No payment gateway or database is required in MVP. Never collect credit-card numbers or show a fake payment form.

## 5. Implementation roadmap

Check off tasks in order. **Status: 23/23**.

### Phase A — Project foundation

- [x] **E01 — Scope:** finalize product categories and user flows. *(Markdown / UX)*
- [x] **E02 — Design system:** colors, typography, responsive grid, component library and asset provenance. *(Tailwind / CSS)*
- [x] **E03 — Initialize:** create Next.js + TS project, Git repository and directory structure. *(Next.js / Git)*
- [x] **E04 — Products:** create 12–20 coherent sample items with typed fields and slugs. *(TypeScript / seed data)*

### Phase B — Storefront

- [x] **E05 — Shared layout:** responsive navigation, search entry point, cart counter, footer. *(React)*
- [x] **E06 — Homepage:** hero, featured categories and featured products. *(Next.js / Tailwind)*
- [x] **E07 — ProductCard:** price, image, wishlist control, accessible actions. *(React)*
- [x] **E08 — Shop:** product grid and category display. *(Next.js)*
- [x] **E09 — Search/filters:** text query, category, price and availability. *(React state / URL search params if appropriate)*
- [x] **E10 — Sorting:** price ascending/descending and name, with meaningful empty states. *(TypeScript)*
- [x] **E11 — Details:** dynamic product pages, variants and image gallery. *(Next.js dynamic routes)*

### Phase C — Shopping behavior

- [x] **E12 — Cart store:** add, remove, update quantity, consistent subtotal. *(Zustand)*
- [x] **E13 — Persistence:** safely hydrate cart/wishlist from `localStorage`, handle invalid saved data. *(Zustand persist / TypeScript)*
- [x] **E14 — Cart UI:** mini-cart or cart page, quantity controls, empty cart messaging. *(React / Tailwind)*
- [x] **E15 — Wishlist:** toggle, list and persist saved products. *(Zustand)*
- [x] **E16 — Checkout:** shipping/contact fields with Zod validation; label as **demo checkout**, no real payments/orders. *(React Hook Form / Zod)*
- [x] **E17 — Completion state:** sample confirmation explicitly states no purchase/order was made. *(React)*

### Phase D — Quality and release

- [x] **E18 — Accessibility:** keyboard navigation, alt text, labels, errors and visible focus. *(Manual QA)*
- [x] **E19 — Edge cases:** invalid slug, missing images, empty search/cart, quantity boundaries and storage failures. *(React / Next.js)*
- [x] **E20 — Tests:** cart operations, filter logic, totals and checkout validation; verify build. *(Node.js test runner / `tsx`, `npm run build`)*
- [x] **E21 — SEO/performance:** metadata, Open Graph, structured product semantics where appropriate, optimized images. *(Next.js / Lighthouse)*
- [x] **E22 — GitHub integration:** source and English documentation are published to the private repository; `main` is connected to the existing Vercel project. A GitHub-triggered production deployment reached Ready. *(Git / Vercel)*
- [x] **E23 — Portfolio case study:** clean README, screenshots, demo credentials = none, features and limitations. *(Markdown)*

## 6. Suggested folder layout

```text
nord-and-nest/
├── public/images/products/
├── src/
│   ├── app/
│   │   ├── shop/[slug]/page.tsx
│   │   ├── shop/page.tsx
│   │   ├── wishlist/page.tsx
│   │   ├── cart/page.tsx
│   │   ├── checkout/page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── products/
│   │   ├── cart/
│   │   ├── layout/
│   │   └── ui/
│   ├── data/products.ts
│   ├── store/useCartStore.ts
│   ├── store/useWishlistStore.ts
│   ├── lib/catalog.ts
│   └── types/product.ts
├── README.md
└── PROJECT_ROADMAP.md
```

## 7. Definition of done

- [x] Product browsing has been checked on phone, tablet and desktop.
- [x] Search, filters, sorting, presentation options and product details have been verified.
- [x] Cart and wishlist state survive reload with validated saved data.
- [x] Sample totals and quantities are correct; no chargeable purchase is offered.
- [x] Demo checkout validates fields and clearly states that no real order was placed.
- [x] Keyboard controls, labelled forms and empty/error states have been checked within the scope recorded in `QA.md`.
- [x] The production build, TypeScript check and configured tests pass.
- [x] The public Vercel site, English documentation and screenshots are available; GitHub publication and automatic deployment from `main` are verified.

## 8. Phase 2 — Optional full-stack upgrade (later)

Keep this separate from the fast MVP.

1. Add **Neon PostgreSQL** and **Drizzle ORM** for products, stock and order records.
2. Add server-side validation, trusted pricing calculations, rate limits and authorized admin CRUD.
3. Implement an actual checkout only after choosing a payment provider legally and technically available to the business; use provider-hosted payment pages and signed webhook verification.
4. Add proper privacy policy and fulfillment/shipping terms before real commerce.

## 9. Release workflow

Publish changes to `main` in https://github.com/kreatorrdev/nord-and-nest. Vercel automatically builds the connected production branch and updates https://nord-and-nest.vercel.app after a successful deployment. Run the checks appropriate to each change before publishing.


## Implementation note — 19 October 2026

The MVP is implemented with a Next.js static export, original generated assets, interactive browsing, persistent cart and wishlist state, demo checkout and English portfolio documentation. It is publicly deployed on Vercel. The original private Sites version is retained.

### Vercel release

The public Vercel site is live at https://nord-and-nest.vercel.app. Production routes, images and persistent cart behavior were smoke-tested. The initial deployment used a source ZIP. On 20 October 2026, the source was published to the private GitHub repository and connected to Vercel; an automatic production build from `main` reached Ready, completing E22.

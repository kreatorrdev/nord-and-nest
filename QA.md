# Quality assurance record

Date: 19 October 2026.

## Automated checks

- Four Node test cases pass: cart math/merging, hydration validation, combined catalog filters, and checkout schema.
- TypeScript check passes.
- Next.js production build statically generates the complete storefront and all 16 product routes.

## Browser verification

- Sora vase saved to wishlist; count updates and persists on reload.
- Vase added to bag and quantity increased from 1 to 2; subtotal correctly changes from €48 to €96.
- Bag survives a full page reload.
- Checkout with an empty form displays eight labelled validation errors.
- Valid fictional sample data and explicit demo acknowledgement complete the flow. Result explicitly states that no purchase/order/payment occurred and the bag clears.
- Category Ceramics + search “vase” + price ascending returns Terra, Sora, Halo in the expected order. Filter state appears in the URL.
- A non-matching search produces the useful empty state; clearing filters restores all products.
- Product detail supports gift-wrapped presentation, quantity 2 and texture zoom; the bag shows the chosen option and €96 total.
- Escape closes the bag dialog.
- Responsive visual checks were performed at desktop, tablet and phone widths. Screenshots are stored in `docs/screenshots/`.

## Vercel production smoke test

- The production deployment reports Ready at https://nord-and-nest.vercel.app.
- Unauthenticated requests to home, catalog, Sora product, checkout and hero image return HTTP 200.
- Shopping bag addition, the €48 subtotal, persistence after reload and item removal were verified on the public site.
- Open Graph image resolves against the public Vercel domain.
- Production screenshot: `docs/screenshots/vercel-live.jpg`.

## Verification boundaries

No Lighthouse score, screen-reader certification or real commerce validation is claimed. The checkout is intentionally local and illustrative. Asset gallery variants share a generated source image. Contact information is fictional.

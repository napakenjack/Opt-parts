# AutoPartsPro - E-Commerce Blueprint

## SECTION 1 — Product concept and business goal
**Goal:** Build a high-converting, trustworthy, and fast auto parts e-commerce platform that simplifies the complex process of finding the right car part.
**Target Audience:** DIY mechanics, professional repair shops, and car enthusiasts.
**Primary Intentions:** Fast part lookup (by SKU, VIN, or vehicle), comparing prices/delivery times, and bulk ordering.
**High-Converting Factors:** Accurate fitment data, clear stock/delivery indicators, low-friction checkout, and strong trust signals.
**Trust Elements:** OEM quality guarantees, easy returns, expert support, secure checkout badges, and clear compatibility tags.

## SECTION 2 — Website structure / sitemap
- **Homepage (`/`)**: Fast search, brand selection, featured categories.
- **Catalog (`/catalog`)**: Filterable product listing.
- **Catalog by Brand (`/catalog?brand=id`)**: Filtered view for specific car makes.
- **Product Details (`/product/:id`)**: Deep dive into specs, compatibility, and purchase actions.
- **Cart (`/cart`)**: Order summary and checkout initiation.
- **Profile (`/profile`)**: Order history, saved vehicles ("My Garage"), personal info.
- **About Company (`/about`)**: Trust building, company mission, guarantees.

## SECTION 3 — Homepage strategy
- **Header:** Sticky, contains search, cart, and profile access.
- **Low-height Hero:** Focused on the search bar and vehicle selector. Not a massive lifestyle image, but a practical tool.
- **Brand Selector:** Grid of popular car logos for quick filtering.
- **Popular Categories:** Visual blocks for Brakes, Filters, Oils, etc.
- **Featured Products:** High-margin or popular items.
- **Trust Section:** 4 columns highlighting guarantees (Genuine Parts, Fast Delivery, Easy Returns, Expert Support).
- **Footer:** Links to policies, support, and categories.

## SECTION 4 — Header and navigation
- **Desktop:** Logo left, wide search bar center, icon actions right (Favorites, Profile, Cart with badge).
- **Mobile:** Hamburger menu left, Logo center, Cart right. Search bar moves below the main header row for easy thumb access.
- **Logic:** Search is the primary action. The catalog button is secondary.

## SECTION 5 — Hero section
- **Layout:** Low height (approx 400px), dark background with subtle technical pattern.
- **Text:** "Find the Right Parts. Fast."
- **CTA:** A prominent search bar combined with a "Select Vehicle" button.
- **Conversion:** Users don't want to browse; they want to search. Putting the search front and center reduces time-to-value.

## SECTION 6 — Brand selector section
- **Visual Style:** Clean grid of cards with brand logos and names.
- **Behavior:** Clicking a brand routes to `/catalog?brand=id`.
- **Logic:** Many users start their journey by selecting their car make. Showing logos builds instant recognition.

## SECTION 7 — Catalog page
- **Layout:** Left sidebar for filters, right grid for products.
- **Filters:** Category, Brand, Price Range, Availability (In Stock, Fast Delivery).
- **Sorting:** Price, Popularity, Newest.
- **Friction Reduction:** Clear "Clear all" button, sticky sidebar on desktop.

## SECTION 8 — Product card in listings
- **Hierarchy:** Image -> Brand/SKU -> Title -> Price -> Stock/Delivery -> Add to Cart.
- **Conversion Logic:** Showing stock status and delivery time directly on the card prevents users from clicking into out-of-stock items, reducing frustration.

## SECTION 9 — Product details page
- **Layout:** 50/50 split on desktop. Image gallery left, details right.
- **Sticky Purchase Area:** The price, stock, and "Add to Cart" block is highlighted with a subtle background.
- **Trust Signals:** "In Stock", "Delivery in X days", Compatibility badges.
- **Uncertainty Reduction:** Explicit "Vehicle Compatibility" section ensures the user buys the right part.

## SECTION 10 — Cart page
- **Layout:** List of items left, sticky order summary right.
- **Controls:** Easy quantity adjustment, clear remove buttons.
- **Conversion:** "Secure Checkout" badge, clear total calculation including shipping.

## SECTION 11 — Profile page
- **Layout:** Sidebar navigation, main content area.
- **Smart Feature - "My Garage":** Users can save their vehicles. This allows the system to automatically filter parts for their specific car on future visits, massively increasing repeat purchase rates.

## SECTION 12 — Company introduction / About page
- **Content:** Mission statement, impressive stats (2M+ parts, 99% accuracy), and "Why Choose Us" blocks.
- **Conversion Support:** Buying auto parts requires trust. This page proves the company is a legitimate, large-scale operation.

## SECTION 13 — UX rules for autoparts e-commerce
- **Fast Discovery:** Search must be prominent everywhere.
- **Clear Compatibility:** Never leave the user guessing if a part fits.
- **Mobile-First:** Mechanics often order parts from their phones while looking at the car. Buttons must be large and tap-friendly.

## SECTION 14 — Conversion optimization strategy
- **Microcopy:** Use "Add to Cart" instead of "Buy Now" for lower commitment. Use "In Stock" in green.
- **Urgency:** Show exact stock numbers if low (e.g., "Only 3 left").
- **Cart:** Keep the summary sticky so the checkout button is always visible.

## SECTION 15 — Visual style and UI direction
- **Style:** Clean, modern, technical.
- **Colors:** Blue (trust, technology), Dark Gray (premium feel), Green (success/stock), Red (sale/out of stock).
- **Typography:** Inter or similar clean sans-serif.
- **Spacing:** Generous padding, clear separation of sections.

## SECTION 16 — Components list
- `Header`, `Footer`, `Hero`, `BrandSelector`, `ProductCard`, `FilterSidebar`, `Button`, `Input`, `Badge`, `Card`.

## SECTION 17 — Recommended page-by-page content blocks
*(Implemented in the codebase)*

## SECTION 18 — SEO and structure recommendations
- **URLs:** `/product/brake-pads-brembo-123` (SEO friendly slugs).
- **Metadata:** Include SKU, Brand, and Car Make in the title tags.
- **Schema:** Use `Product` schema for rich snippets in Google.

## SECTION 19 — GitHub Pages technical requirements
- **Routing:** Use `HashRouter` to prevent 404s on direct page loads.
- **Assets:** Use relative paths or external URLs for images.
- **Vite:** Set `base: './'` in `vite.config.ts`.

## SECTION 20 — Required vite.config.ts
```typescript
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: './',
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
```

## SECTION 21 — Suggested folder/page structure
```
/src
  /components
    /catalog
    /home
    /layout
    /ui
  /data
  /lib
  /pages
```

## SECTION 22 — Final implementation priorities
- **Phase 1:** Setup Vite, Tailwind, Router, basic UI components. (Completed)
- **Phase 2:** Layout (Header/Footer) and Home page with Hero and Brand Selector. (Completed)
- **Phase 3:** Catalog and Product Details pages with mock data. (Completed)
- **Phase 4:** Cart and Profile pages. (Completed)
- **Phase 5:** About page and polish. (Completed)
- **Phase 6:** Build and deploy to GitHub Pages. (Ready)

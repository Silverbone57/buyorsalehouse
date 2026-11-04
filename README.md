# Easy Realty — BuyOrSaleHouse Website

Official multi-page real estate website for **Easy Realty Real Estate Services** (**BuyOrSaleHouse**), serving the **Tampa Bay & Surrounding Florida Markets**.

Built with **Astro** and **Tailwind CSS** (zero TypeScript bloat), designed for fast static deployment on **Cloudflare Pages** via GitHub.

---

## Live Pages & Site Structure

Every file inside `src/pages/` automatically becomes a page on the live website:

| Page | File Path | What It Does |
| :--- | :--- | :--- |
| **Home** (`/`) | `src/pages/index.astro` | Hero with portrait, $600K savings banner, 7 Flat-Fee pricing tiers, 6-Month Confidence Guarantee, "What Full Service Means", Coming Soon listings preview, and quick inquiry form. |
| **Flat-Fee Selling** (`/sell`) | `src/pages/sell.astro` | Full breakdown of the Flat-Fee Full-Service model (`$2,900+` tiers), payment breakdown (`$1,500` retainer / `$225` media / balance at closing), 6-Month Refund Guarantee, and seller valuation intake form. |
| **Properties** (`/properties`) | `src/pages/properties.astro` | Property portfolio grid with interactive category filter tabs (**All**, **Residential**, **Commercial**, **Land & Development**). Currently set to **"Coming Soon"** cards. |
| **Services & Investors** (`/services`) | `src/pages/services.astro` | Overview of all 3 core divisions: Flat-Fee MLS Selling, Direct As-Is Cash Offers, and Commercial / Land Joint-Venture Development. |
| **About & Contact** (`/contact`) | `src/pages/contact.astro` | Easy Realty philosophy (*"People Over Percentages"*), direct phone/email channels, and direct message form. |

---

## Where to Edit Listings, Prices & Contact Info

You **do not** need to dig through HTML files to update phone numbers, emails, flat-fee pricing, or property listings.

Everything lives in **one central file**:
- **`src/data/siteData.js`**
  - `siteInfo` — Brand name, phone number `(727) 643-6173`, email `russellsunshinerealty@gmail.com`, service area, and hours.
  - `flatFeeTiers` — All 7 Flat-Fee pricing boxes (`Under $150k` through `$1M+`).
  - `flatFeeBreakdown` — The `$1,500` / `$225` / `Balance` steps.
  - `fullServicePillars` — The 4 pillars of full-service representation.
  - `properties` — All property cards shown on the Home page and Properties page.

### Photos & Assets
- **`public/images/realtor-portrait.png`** — Main Easy Realty portrait photo. To add property photos later, drop them into `public/images/` and reference them in `src/data/siteData.js` as `/images/your-photo.jpg`.

---

## Running & Previewing Locally

From the project folder in your terminal:

```bash
# Start the local live-reload preview server at http://localhost:4321
npm run dev

# Build the production static site locally
npm run build:local
```

*(Note: Because this project folder lives inside Google Drive on Windows, `run-astro.mjs` automatically syncs and runs `node_modules` from your local `C:\Users\...\AppData\Local\buyorsalehouse-deps` cache so Google Drive never locks up npm packages.)*

---

## Deployment (GitHub → Cloudflare Pages)

This repository is connected directly to **Cloudflare Pages**.
- Whenever changes are committed and pushed to the `main` branch on GitHub, Cloudflare Pages automatically runs `npm run build` and publishes the `dist/` folder to the live domain in ~45 seconds.

```bash
git add .
git commit -m "Update site content"
git push
```

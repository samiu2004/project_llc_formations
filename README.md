# UD LLC Formations — Official US LLC Formation Platform

**Production Platform for [udmarketing.online](https://udmarketing.online)**  
**Operating Entity:** United Discount Marketing LLC  
**Primary WhatsApp Lead Concierge:** `+92 300 0000000` (Config parameter `CONFIG.WHATSAPP_PHONE`)

---

## 🏛️ Overview

**UD LLC Formations** is an authoritative, multi-page US business formation agency web platform engineered specifically for domestic and cross-border international founders (Pakistan, UAE, Australia, and USA).

The platform eliminates predatory formation practices, fake Photoshop documents, and hidden $300 auto-renewals by providing:
1. **Official .GOV Registry Verification Hub**: Real-time legal naming syntax formatter + direct links to Secretary of State search databases (Wyoming WyoBiz, New Mexico SOS, Delaware ICIS, Florida Sunbiz, Texas Comptroller).
2. **Transparent State & Industry Fee Calculator**: Instant calculation of one-time state filing fees vs ongoing annual state franchise taxes.
3. **50+ Verified Formations Proof Vault**: Filterable gallery of public record certified formations across 4 country corridors with inspection modal.
4. **Industry-Specific Playbooks**: Turnkey blueprints for Construction & Cost Estimation (W-9 / ACH), Amazon FBA Wholesale (State Reseller Certificates), Shopify/Stripe e-commerce, and B2B Agencies.
5. **Knowledge Base & Guides Hub**: Deep compliance articles on US banking (Mercury/Relay), FinCEN BOI reporting, and scam prevention.
6. **Dynamic Theme Engine**: Toggle seamlessly between **Harvest Moon** (Deep Burgundy `#800020` & Mustard Gold `#FFCE1B`) and **Winter Chill** (Ice Frost `#B8E3E9` & Teal `#0B2E33`).

---

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animation & Motion Graphics:** `motion/react` (Framer Motion v12)
- **Icons:** `lucide-react`
- **Deployment Target:** Cloudflare Pages with pre-configured SPA routing (`public/_redirects`)

---

## 📂 Project Structure

```
├── public/
│   └── _redirects              # Cloudflare Pages SPA redirection rule
├── src/
│   ├── components/
│   │   ├── FeeCalculator.tsx   # Instant state & industry fee calculation matrix
│   │   ├── FloatingWhatsApp.tsx# Orbital pulsing WhatsApp quick consultation widget
│   │   ├── Footer.tsx          # Comprehensive 30-page sitemap & legal disclaimers
│   │   ├── FuturisticHud.tsx   # Animated .GOV telemetry & status radar HUD
│   │   ├── Header.tsx          # Sticky top bar conforming to 3-zone contract
│   │   ├── StateQuizModal.tsx  # Interactive state diagnostic quiz
│   │   ├── ThemeSwitcher.tsx   # Harvest Moon / Winter Chill theme toggle
│   │   └── UDLogo.tsx          # Razor-sharp vector SVG interlocked monogram & seal
│   ├── context/
│   │   └── ThemeContext.tsx    # Theme provider with localStorage persistence
│   ├── data/
│   │   ├── blogs.ts            # Knowledge base articles & guides schema
│   │   ├── corridors.ts        # Pakistan, UAE, Australia & USA country specifics
│   │   ├── industries.ts       # Construction, Amazon FBA, Shopify & B2B playbooks
│   │   ├── proofs.ts           # 50+ verified formation records & anti-scam guide
│   │   └── states.ts           # Wyoming, New Mexico, Delaware, Florida & Texas fee matrix
│   ├── pages/
│   │   ├── BlogPage.tsx        # Searchable blog & article reader
│   │   ├── GovHubPage.tsx      # Official .GOV registry launchpad & tab-return banner
│   │   ├── HomePage.tsx        # Hero, fee calculator, corridors & social proof
│   │   ├── IndustriesPage.tsx  # Specialized industry blueprints & W-9 checklists
│   │   ├── PricingPage.tsx     # 3 transparent tiers & state fee matrix
│   │   └── ProofVaultPage.tsx  # Searchable 50+ proofs, case studies & scam guide
│   ├── App.tsx                 # Main multi-page routing & state synchronizer
│   ├── config.ts               # Central agency config & dynamic WhatsApp URL builder
│   ├── index.css               # Theme tokens & futuristic scanning animations
│   └── main.tsx                # Application entry point
├── PROJECT_LLC_FORMATION.md    # Master 30-page expansion architecture & persistence
├── index.html                  # SEO metadata, OpenGraph cards & JSON-LD schema
├── package.json
└── vite.config.ts
```

---

## 🛠️ Local Development & Build

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server (port 3000)
npm run dev

# 3. Create optimized production build
npm run build

# 4. Run TypeScript checks
npm run lint
```

---

## ☁️ Cloudflare Pages Deployment

1. Connect your GitHub repository (`samiu2004/project_llc_formation`) in the Cloudflare Dashboard.
2. Select **Vite** preset:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Under **Custom domains**, attach `udmarketing.online`.
4. Any new commit pushed to `main` automatically triggers a live zero-downtime deployment in ~45 seconds!

---

## 📄 License & Legal Notice

© United Discount Marketing LLC. All rights reserved.  
UD LLC Formations is an authorized business document filing and registered agent service provider. We are not an attorney or law firm and do not provide legal or tax advice.

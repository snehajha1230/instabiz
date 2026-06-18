# Hydro Mech Engineers — Corporate Website

A modern, single-page marketing website for **Hydro Mech Engineers**, a manufacturer of precision sheet metal machinery based in Bangalore, India. The site showcases products, manufacturing process, company strengths, and contact information with smooth scroll animations and a polished industrial aesthetic.

## Features

- **Single-page layout** with anchored navigation — Home, About, Products, Process, and Contact
- **Product catalog** — Bus bar processing, hydraulic clinching, section bending, C-frame/H-frame machines, sheet rolling, and CNC press brake tools
- **Animated UI** — Framer Motion scroll effects, text reveals, parallax orbs, grain overlay, custom cursor, and scroll progress indicator
- **Centralized content** — Company info, products, features, and process steps live in `lib/data.ts` for easy updates
- **Responsive design** — Mobile-first layout with Tailwind CSS utility classes
- **SEO-ready** — Metadata and semantic HTML via the Next.js App Router

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI | [React 19](https://react.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev) |
| Fonts | Plus Jakarta Sans, Cormorant Garamond (Google Fonts) |

## Project Structure

```
instabiz/
├── app/
│   ├── globals.css       # Theme tokens, utilities, and global styles
│   ├── layout.tsx        # Root layout, fonts, and metadata
│   └── page.tsx          # Main page — composes all sections
├── components/
│   ├── effects/          # CustomCursor, GrainOverlay, Marquee, Parallax, etc.
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Process.tsx
│   ├── Products.tsx
│   ├── SectionShell.tsx
│   └── WhyChooseUs.tsx
├── lib/
│   └── data.ts           # Company info, nav links, products, features
└── public/               # Product images and company logo
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Updating Content

Most site content is defined in `lib/data.ts`:

- `COMPANY` — name, tagline, contact details, address, logo path
- `PRODUCTS` — product names, descriptions, and images
- `FEATURES` — "Why Choose Us" highlights
- `PROCESS_STEPS` — manufacturing workflow steps
- `NAV_LINKS` — navigation menu items

Product images and the company logo are stored in `public/`.

## Company

**Hydro Mech Engineers**  
Precision Sheet Metal Solutions Built For Modern Industries

- **Email:** hydromechengineer@gmail.com
- **Phone:** +91 9738371651
- **Website:** [www.hydromech.co.in](https://www.hydromech.co.in)
- **Address:** #10, 1st Main, 1st Cross, Doddanekundi Industrial Area, Opp. NGEF Ancillary, Mahadevapura Post, Bangalore – 560048

## License

Private project. All rights reserved.

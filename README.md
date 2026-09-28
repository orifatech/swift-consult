# Swift Consult Inc. — Corporate Engineering Platform

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Accessibility](https://img.shields.io/badge/WCAG-2.1_AA-success?style=flat)](#accessibility--standards)

Official corporate web platform for **Swift Consult Inc.**, a premier multidisciplinary engineering consulting and infrastructure design practice based in Ontario, Canada. Specializing in structural engineering, civil infrastructure, MEP building systems, project management, and environmental advisory services.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Design System & Branding](#design-system--branding)
- [Architecture & Tech Stack](#architecture--tech-stack)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Cross-Entity Architecture](#cross-entity-architecture)
- [Accessibility & Standards](#accessibility--standards)
- [Deployment](#deployment)

---

## Overview

Swift Consult Inc. delivers licensed professional engineering consulting services across commercial, residential, and civil sectors. This web platform is built with a focus on speed, accessibility, technical precision, and architectural elegance.

- **Primary URL**: [swiftconsultinc.com](https://swiftconsultinc.com)
- **Sister Enterprise**: [Swift Global Inc.](https://swiftglobalinc.com) (International EPC & Procurement)

---

## Key Features

### 1. High-Performance Architectural Hero
- Layered background imagery with right-weighted visual exposure ensuring high text contrast on the left.
- Responsive CTA triggers for engineering consultation requests and project portfolio exploration.

### 2. Interactive Project Portfolio & Detail Modal
- **Filterable Category Tabs**: Filter projects across `All`, `Structural`, `Civil & Infra`, `MEP & Systems`, `Commercial`, `Residential`, and `Environmental` with live count badges.
- **Space-Efficient 3-Card Grid**: Displays 3 cards per row (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) with streamlined preview data.
- **Technical Side Modal (`ProjectSideModal.astro`)**: Reusable slide-over drawer sliding in smoothly from the right, providing a comprehensive engineering dossier:
  - Project banner & key metrics
  - Detailed Scope of Work & Narrative
  - Key Engineering Deliverables checklist
  - Technical Specifications matrix (Building Codes, Materials, BIM LOD, Stamping)
  - Direct CTA to request consultation

### 3. Responsive Navigation & Mobile Drawer
- Sliding full-height mobile panel sliding from the right edge.
- Breakpoint-aware: supports mobile devices and tablets up to large tablets (`lg`).
- Simplified header navigation on mobile/tablet viewports with clean spacing.

### 4. Global Sister Site Switcher (`SisterSiteSwitcher.astro`)
- Fixed to vertical center of the screen, attached to the right edge (`fixed right-0 top-1/2 -translate-y-1/2`).
- Permanent crisp white background (`bg-white`) whether collapsed or expanded.
- Collapses to a compact 44 x 44 px touch-friendly icon button.
- Expands to a clean 180 px maximum width card displaying the Swift Global brand logo and a `"Visit Website ↗"` link (`target="_blank"`).
- Sits below modals (`z-30`) so it never obstructs project dossiers or mobile menus.
- Supports desktop hover, mobile tap toggle, keyboard navigation, and `Escape` key dismissal.

### 5. Standardized Responsive Margins
- Standardized page padding across the entire platform:
  - Mobile: `px-6`
  - Small Tablets (`md`): `px-10`
  - Large Tablets & Desktops (`lg`, `xl`): `px-12`

---

## Design System & Branding

The visual language reflects precision engineering and technical drafting:

| Token | Hex / Class | Purpose |
| :--- | :--- | :--- |
| **Deep Navy** | `#0B1F38` (`bg-navy-900`) | Primary corporate brand color, headers, text |
| **Steel Blue** | `#5B8296` (`text-steel-500`) | Secondary brand color, accents, subtitles |
| **Blueprint Light** | `#F8FAFC` (`bg-blueprint-bg`) | Section backgrounds, card containers |
| **Amber Gold** | `#C5A059` / `#D4AF37` | Technical badges, highlights, sister entity accent |
| **Component Rounding** | `rounded-md` (6px) | Standardized corner radius across all buttons and cards |

---

## Architecture & Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / zero runtime JS by default)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) with `@tailwindcss/typography`
- **Type Checking**: Strict [TypeScript](https://www.typescriptlang.org/) (`tsc --noEmit`)
- **SEO & Structured Data**: OpenGraph tags, Twitter cards, canonical URLs, and `schema.org` JSON-LD corporate schema
- **Code Quality**: Astro Diagnostics (`astro check`)

---

## Repository Structure

```text
swift-consult/
├── public/
│   ├── images/              # Optimized WebP hero imagery, SVG logos
│   │   ├── swift-consult-logo.svg
│   │   └── swift-global-logo.svg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro # Navigation, mobile drawer, sister banner
│   │   │   └── Footer.astro # Corporate footer, legal, certifications
│   │   └── ui/
│   │       ├── Badge.astro
│   │       ├── Button.astro
│   │       ├── ProjectSideModal.astro  # Slide-over engineering dossier
│   │       └── SisterSiteSwitcher.astro # Fixed collapsible cross-entity link
│   ├── data/
│   │   └── companyData.ts   # Central single-source-of-truth data model
│   ├── layouts/
│   │   └── Layout.astro     # Root HTML layout, SEO, JSON-LD, global switcher
│   ├── pages/
│   │   ├── index.astro      # Homepage / Hero / Practice overview
│   │   ├── about.astro      # History, credentials, leadership
│   │   ├── services.astro   # Core engineering capabilities
│   │   ├── sectors.astro    # Market sectors & industries served
│   │   ├── projects.astro   # 3-col portfolio with category tabs & modal
│   │   └── contact.astro    # Consultation & RFP submission
│   └── styles/
│       └── global.css       # Tailwind base, typography, utility classes
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind theme configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

---

## Getting Started

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Obaitan/swift-consult.git
cd swift-consult

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` in your browser.

---

## Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds static HTML/CSS/JS output to `dist/` |
| `npm run preview` | Previews the local production build in `dist/` |
| `npm run check` | Runs Astro diagnostics check across all template files |
| `npm run typecheck` | Runs TypeScript compiler checks (`tsc --noEmit`) |

---

## Cross-Entity Architecture

Swift Consult operates alongside its international partner **Swift Global Inc.**:

- **Swift Consult Inc.**: Engineering design, structural calculations, civil drawings, municipal permits, P.Eng stamped reviews.
- **Swift Global Inc.**: Heavy industrial procurement, EPC turnkey plant construction, marine terminals, cross-border supply chains.

Both platforms feature reciprocal fixed sister-site switchers linking users smoothly across organizations.

---

## Accessibility & Standards

- **WCAG 2.1 AA Compliant**: High contrast color ratios throughout.
- **Keyboard Navigable**: Visible focus outlines (`focus-visible`), modal focus trapping, and `Escape` key listeners.
- **Semantic HTML**: Landmarks (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`), ARIA attributes (`role="dialog"`, `aria-modal="true"`, `aria-expanded`).
- **Screen Reader Support**: Skip to main content link on every page.

---

## Deployment

The static output in `dist/` can be deployed directly to any modern static hosting provider:

- **Cloudflare Pages**: `npm run build` with output directory `dist`
- **Vercel**: Framework preset `Astro`
- **Netlify**: Build command `npm run build`, publish directory `dist`
- **GitHub Pages**: Static workflow deployment

---

## License

Copyright © 2026 Swift Consult Inc. All rights reserved.

# FurEver Care — "They Deserve Forever Love"

> **2026 redesign:** refreshed visual theme (warm sunset gradient + glass
> surfaces), new scroll/hover animations, real hero and showcase videos, and
> content rewritten in simple, plain English throughout. See the theme
> tokens in `src/styles/variables.css`.

A premium, responsive React.js single-page application for a pet-care platform
serving three audiences: **Pet Owners**, **Veterinarians**, and **Animal Shelters**.
Built with React Router, plain modern CSS3 (custom design system, no UI framework),
and JSON-driven content — no backend or database required.

## 1. Install

Requires Node.js 18+ and npm.

```bash
npm install
```

## 2. Run (development)

```bash
npm run dev
```

Vite will start a local dev server (default: http://localhost:5173) and open
it automatically.

## 3. Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

## 4. Project structure

```
src/
  components/
    layout/     Navbar, Footer, Layout (route shell)
    ui/         Ticker, VisitorCounter, ScrollToTop, EmergencyButton, SectionHeader
    cards/      ProductCard, PetCard, TipCard, VideoCard, TrainingCard, StoryCard, EventCard, VetCard
  context/      UserContext (session user type + name), ToastContext (notifications)
  hooks/        useScrollReveal, useClock, useGeolocation, useCountUp
  data/         All static JSON content (see below)
  pages/        One component per route (see Routes)
  styles/       variables.css (design tokens) + global.css (base styles, utilities)
public/
  videos/       Place hero-pets.mp4 here (see note below)
  images/       Place hero-fallback.jpg here (see note below)
```

## 5. Where JSON data lives

All dynamic content is loaded from `/src/data/*.json` and rendered with React
— nothing is hard-coded card-by-card:

- `products.json` — product showcase (food, toys, grooming, bedding, supplements)
- `pets.json` — adoptable pets for the Adoption page
- `vets.json` — veterinarian profiles + appointment schedules
- `medicalHistory.json` — sample static case studies for the vet dashboard
- `tips.json` — health tips
- `grooming.json` — grooming video cards
- `training.json` — training lessons with steps
- `feeding.json` — feeding guide by life stage
- `events.json` — shelter events
- `successStories.json` — adoption success stories

## 6. Videos

The Home page hero and the "See it in action" section, plus the Grooming
video modal, now play real short clips (free, no-watermark stock video from
Mixkit) directly from Mixkit's CDN — nothing to download or configure. To use
your own footage instead, swap the `<source src="...">` values in
`src/pages/Home.jsx` and the `video` field of each entry in
`src/data/grooming.json` for your own hosted MP4 files (for example, drop
them in `public/videos/` and point to `/videos/yourfile.mp4`).

## 7. Where to replace images

Every other image in the app (products, pets, team, vets, success stories)
currently points to royalty-free Unsplash URLs so the app looks complete out
of the box. To use your own photography, replace the `image` field for the
relevant entry inside the matching JSON file in `src/data/`, or the `image`
props on team members in `src/pages/About.jsx`.

## 8. Assumptions made

- No backend/database exists. All forms (Feedback, Pet Profile edit) are
  UI-only and update local React state — nothing is persisted or sent to a server.
- "Buy Now" buttons on product cards are intentionally non-functional per the SRS.
- Appointment slots and medical case history are static, illustrative data —
  not tied to any real scheduling system.
- The user's chosen portal (Pet Owner / Veterinarian / Animal Shelter) and
  first name are held in React context for the current browser session only
  (they reset on a full page reload), matching the SRS's "current session" wording.
- Geolocation is requested once per visit; if denied or unsupported, the
  ticker and location displays fall back to friendly placeholder text instead
  of breaking.

## 9. AI-generated / stock visual assets

All photography used in this build (products, pets, team headshots, hero
fallback references) is sourced from Unsplash's free stock photo library via
direct image URLs — no AI-image-generation tool was used for any visual
asset in this project. If you later generate or source new images (including
AI-generated ones) to replace these placeholders, please update this section
to disclose that, per the project's own documentation requirement.

## 10. Verified before delivery

- All routes render without console errors
- Navbar (desktop + mobile hamburger) links to every route
- Product search, category filter and price/name sorting all work together
- Adoption filters (type, breed, location, max age) work client-side
- Feedback form validates name, email format, and minimum feedback length
- Real-time clock and geolocation display in the top ticker, with graceful
  fallbacks if location is denied or unsupported
- Layout is mobile-first and tested down to 320px width with no horizontal overflow
- `prefers-reduced-motion` disables non-essential animation

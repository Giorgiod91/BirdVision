# 🐦 BirdVision

**Snap a bird, know it instantly.** Upload a photo or video and BirdVision names the species in seconds — then tells you everything about it: habitat, diet, song and where it's headed next.

## Features

- **Instant identification** — Point, upload, done. Our vision model names the species in seconds, even from a blurry shot.
- **Rich species profiles** — Habitat, diet, size, lifespan and fun facts in one beautiful page.
- **Song recognition** — Can't see it but can hear it? Record the call and BirdVision identifies it by sound.
- **Photo & video** — Works with a single snapshot or a whole clip; the clearest frame is picked automatically.
- **Your life list** — Every sighting is saved with date and location, building your personal birding journal.
- **Worldwide coverage** — Over 11,000 species across every continent.

## How it works

1. **Capture** — Take a photo or short video of the bird, or pick one from your camera roll.
2. **Analyze** — The AI scans plumage, shape, size and colour against 11,000+ species.
3. **Identify** — Get the species name and a match confidence you can trust within seconds.
4. **Discover** — Dive into a rich profile and save the sighting to your life list.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + [shadcn/ui](https://ui.shadcn.com)
- **Animations:** [Motion](https://motion.dev)
- **Icons:** [Lucide](https://lucide.dev)

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Scripts

```bash
npm run dev      # Start the development server
npm run build    # Build for production
npm run start    # Run the production build
npm run lint     # Lint with ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router (layout, page)
├── components/
│   ├── landing/            # Landing sections (Hero, Features, HowItWorks, …)
│   └── ui/                 # shadcn/ui components
└── lib/                    # Utilities
```

## Deploy

Deploy on [Vercel](https://vercel.com/new) — the easiest way to ship a Next.js app.

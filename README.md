# Portfolio — CyberIngeniero

This repository contains the personal portfolio of Nibaldo ("CyberIngeniero"). It's a static site built with React, Vite and TypeScript that showcases projects, services, experience and a working contact form that uses the Brevo API.

The project is ready to be containerized with Docker and deployed to Kubernetes. It also includes testing utilities and performance optimizations.

## Key contents

- Public site (React pages and components)
- Projects and success cases
- Contact form integrated with Brevo
- Animations (Framer Motion) and optimized assets (lazy loading)
- Environment-based configuration with TypeScript types

## Technologies

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Brevo (email API)
- Docker & Kubernetes (manifests in `k8s/`)

## Improvements implemented (summary)

The project includes multiple improvements focused on security, performance, SEO, and accessibility. Highlights:

- Typed environment variables (`.env.example` and `src/types/env.d.ts`)
- `LazyImage` component (`src/components/shared/LazyImage.tsx`) with Intersection Observer and graceful placeholders
- Performance utilities (`src/utils/performance.ts`): `debounce`, `throttle`, reduced-motion detection, Core Web Vitals helpers
- `SEO` component (`src/components/shared/SEO.tsx`) with meta tags, Open Graph, Twitter Cards and JSON-LD
- `react-helmet-async` integrated for head management
- Tests configured with Vitest and Testing Library; browser API mocks for `IntersectionObserver`, `matchMedia`, etc.

Benefits: faster initial load, improved indexability, better behavior on low-powered devices and safer refactors thanks to tests.

## Hero section and visual changes

- Consistent dark background and modern styling
- `TypewriterText` component with multi-language phrases (6 languages)
- Redesigned primary actions: "Download CV" and "Let's Build Together"
- Animated scroll indicator with optional auto-scroll to the next section

## Environment variables

Copy `.env.example` to `.env` and fill in real values before running or deploying. Do NOT commit secrets.

Important variables (examples):

- `VITE_BREVO_API_KEY` — Brevo API key for contact form
- `VITE_BREVO_API_URL` — Brevo API URL
- `VITE_GITHUB_USERNAME` — GitHub username for public queries
- `VITE_GITHUB_TOKEN` — Optional GitHub token to increase API limits
- `VITE_SITE_URL` — Public site URL
- `VITE_RESUME_URL` — Resume/CV URL (e.g. `/assets/CyberIngeniero-CV.pdf`)
- `VITE_CALENDAR_URL` — Scheduling/calendar URL
- `VITE_GA_TRACKING_ID` — Google Analytics (optional)
- `VITE_HOTJAR_ID` — Hotjar (optional)

## Notable files & components

- `src/components/shared/LazyImage.tsx` — lazy image loader with placeholder and error handling
- `src/components/shared/SEO.tsx` — meta tags and structured data helper
- `src/components/TypewriterText.tsx` — multi-language typewriter effect
- `src/components/ScrollIndicator.tsx` — animated scroll indicator
- `src/hooks/useGitHubData.ts` — GitHub data hook (uses token if provided)
- `src/utils/performance.ts` — small utilities for performance

## Testing

Vitest is configured with Testing Library for user-centric tests. Browser APIs are mocked where necessary (IntersectionObserver, matchMedia, etc.).

Available scripts (in `package.json`):

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — run linter
- `npm run test` — run tests in watch mode
- `npm run test:run` — run tests once
- `npm run test:coverage` — tests with coverage report

## Quick start (development)

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

3. Open `http://localhost:3000` (or the port shown by Vite)

## Docker & Kubernetes

The repository contains a `Dockerfile` and Kubernetes manifests in `k8s/` for cluster deployments. Review and adapt secrets/variables before deploying.

## Required public assets

Place the following in `public/`:

- `favicon.ico`, `apple-touch-icon.png`, `favicon-32x32.png`, `favicon-16x16.png`, `site.webmanifest`
- `public/assets/og-image.jpg` (Open Graph image)
- `public/assets/CyberIngeniero-CV.pdf` (or update `VITE_RESUME_URL`)

## Suggested next improvements

1. Add analytics (GA or an alternative) and privacy controls
2. Convert to PWA with service worker and full manifest
3. Add internationalization support
4. Integrate a headless CMS for content management
5. Add E2E tests (Playwright)
6. Add bundle size analysis and further optimizations

## Contributing

Contributions are welcome. Open an issue or a pull request with a clear description. Please follow the existing code style and ensure tests pass.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Contact

Use the contact form on the site (sends via Brevo) or check `src/config/site.ts` for social links.

---

This file consolidates the original `README.md` and the project's improvement notes into a single reference document.

## Detailed improvements and implementation notes

The sections below expand on the improvements implemented across the project. They are intended as an implementation reference for maintainers.

### Environment & security

- `.env.example` provides a template with all required environment variables.
- Types for environment variables live in `src/types/env.d.ts`.
-- Environment variables used across the project include:
	- `VITE_BREVO_API_KEY`
	- `VITE_BREVO_API_URL`
	- `VITE_GITHUB_USERNAME`
	- `VITE_GITHUB_TOKEN`
	- `VITE_SITE_URL`
	- `VITE_RESUME_URL`
	- `VITE_CALENDAR_URL`
	- `VITE_GA_TRACKING_ID`
	- `VITE_HOTJAR_ID`

Files updated to load secrets from env:

- `src/config/site.ts`
- `src/config/contact.ts`
- `src/hooks/useGitHubData.ts`

### Performance optimizations

- `src/components/shared/LazyImage.tsx`: lazy loading via Intersection Observer, placeholders, error handling and smooth Framer Motion transitions.
- `src/utils/performance.ts`: utilities such as `debounce`, `throttle`, reduced-motion detection, Core Web Vitals helpers and resource hint utilities (preload/prefetch).
- Vite build tuning in `vite.config.ts` to optimize bundling and exclude problematic dependencies.

Benefits: reduced initial load, adaptive animations for low-end devices, improved CWV metrics and more reliable resource loading.

### SEO & accessibility

- `src/components/shared/SEO.tsx`: full meta tag coverage (title/description/keywords), Open Graph, Twitter Cards, JSON-LD structured data, canonical URLs and preconnect hints.
- `react-helmet-async` is integrated for safe head management.

Benefits: better indexability, rich social previews and improved accessibility semantics.

### Testing

- Vitest + Testing Library configured. Global test setup lives in `src/test/setup.ts`.
- Browser APIs are mocked where needed (IntersectionObserver, matchMedia, etc.).
- Example tests: `src/components/__tests__/Header.test.tsx`, `src/hooks/__tests__/useGitHubData.test.ts`.

Testing scripts in `package.json`:

- `npm run test` (watch)
- `npm run test:run` (single run)
- `npm run test:coverage` (coverage)

### Hero section, visuals and UX

- New hero design with consistent dark background, updated header, and alternating section backgrounds.
- `TypewriterText` component displays greetings in multiple languages (English, Spanish, French, Italian, Portuguese, Japanese).
- Primary CTAs: "Download CV" and "Let's Build Together" (calendar link). The CV button was removed from the header and placed in the hero.
- `ScrollIndicator` component: animated mouse/indicator that supports auto-scroll to the next section.

New/modified files for the hero work:

- `src/components/TypewriterText.tsx`
- `src/components/ScrollIndicator.tsx`
- `src/pages/Home.tsx`
- `src/components/Header.tsx`
- `src/config/site.ts`

### Developer commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint

# Tests
npm run test
npm run test:run
npm run test:coverage
```

### Required public assets

Place the following files under `public/`:

- `favicon.ico`, `apple-touch-icon.png`, `favicon-32x32.png`, `favicon-16x16.png`, `site.webmanifest`
- `public/assets/og-image.jpg` (Open Graph image)
- `public/assets/CyberIngeniero-CV.pdf` (or update `VITE_RESUME_URL`)

### Suggested next steps

1. Add analytics and privacy controls
2. Convert the app to a PWA
3. Add i18n support across the site
4. Integrate a headless CMS for dynamic content
5. Add E2E tests with Playwright
6. Add bundle size analysis and further build optimizations

### Success metrics (internal targets)

- Core Web Vitals: green
- Lighthouse SEO & Accessibility: 90+
- Test coverage: >80%
- Initial bundle size: target <500KB


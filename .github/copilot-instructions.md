# VinCheck.blog AI Coding Agent Instructions

## Project Overview
A Next.js 15 static site (`output: 'export'`) for VIN checking, vehicle history, and automotive blog content. Uses App Router with TypeScript, TailwindCSS, and affiliate monetization via EpicVIN/VinCheckUp.

## Code Standards

### Required Before Each Commit
- Run `npm run lint` to check for linting errors before committing any changes
- Ensure TypeScript type checking passes with `npx tsc --noEmit`
- Verify the build completes successfully with `npm run build`

### Development Flow
- **Dev Server**: `npm run dev` - Start development server on localhost:3000
- **Build**: `npm run build` - Generate static export to `/out` directory
- **Lint**: `npm run lint` - Run ESLint on the codebase
- **Type Check**: `npx tsc --noEmit` - Verify TypeScript types without emitting files
- **Start**: `npm start` - Serve production build (after running build)

### CI/CD Pipeline
The repository uses GitHub Actions for continuous deployment:
- **Workflow**: `.github/workflows/deploy.yml` triggers on push to `main` branch
- **Process**: Install dependencies (`npm ci`) → Build (`npm run build`) → Deploy to VPS
- **Output**: Static files from `/out` directory are deployed to production
- **Important**: Always ensure `npm ci` and `npm run build` succeed before merging

## Repository Structure
- `src/app/`: Next.js App Router pages and route handlers
  - `blog/[slug]/`: Dynamic blog post pages
  - `vin-check/[slug]/`: Brand-specific VIN check pages
  - `global/[slug]/`: Country-specific pages
  - `antigravity/`, `secret-garage/`: Special feature pages
- `src/components/`: Reusable React components (VinInput, CookieConsent, etc.)
- `src/lib/`: Core TypeScript modules and data
  - `blog.ts`: Blog post content array
  - `brands.ts`: Car brand data array
  - `countries.ts`: Country data array
  - `vinDecoder.ts`: VIN decoding logic
- `public/`: Static assets (images, favicons, etc.)
- `.github/workflows/`: CI/CD pipeline definitions

## Architecture & Data Flow

### Static Generation Strategy
- **Build Output**: Static HTML (`next.config.ts` sets `output: 'export'`)
- **Dynamic Routes**: Use `generateStaticParams()` to pre-render all pages at build time
  - `/blog/[slug]` → from `blogPosts` array in [src/lib/blog.ts](src/lib/blog.ts)
  - `/vin-check/[slug]` → from `carBrands` array in [src/lib/brands.ts](src/lib/brands.ts)
  - `/global/[slug]` → from `countries` array in [src/lib/countries.ts](src/lib/countries.ts)
- **No Server**: All data is hardcoded in TypeScript arrays—no database or API calls

### Key Components
- **VinInput** ([src/components/VinInput.tsx](src/components/VinInput.tsx)): Client component with local VIN validation
  - Uses `decodeVIN()` from [src/lib/vinDecoder.ts](src/lib/vinDecoder.ts) to extract manufacturer/region/year
  - Redirects to EpicVIN affiliate link with `a_aid=0xhataau2iwvr` on submit
- **Blog System**: Markdown-like content stored as strings in TypeScript arrays, rendered with `dangerouslySetInnerHTML`
- **Ad Integration**: Google AdSense + affiliate banners embedded throughout pages

## Content Patterns

### Adding New Content
1. **Blog Posts**: Add to `blogPosts` array in [src/lib/blog.ts](src/lib/blog.ts) with markdown-formatted `content` field
2. **Car Brands**: Add to `carBrands` in [src/lib/brands.ts](src/lib/brands.ts) with `name`, `slug`, `description`, `popularModels`
3. **Countries**: Add to `countries` in [src/lib/countries.ts](src/lib/countries.ts) with `flag` emoji and localized `description`

### VIN Decoder Extensions
To add new manufacturers, update the `manufacturers` object in [src/lib/vinDecoder.ts](src/lib/vinDecoder.ts) with WMI prefix mappings (e.g., `'5YJ': 'Tesla'`).

## Styling Conventions

### Tailwind Dark Theme
- Background: `bg-[#0a0a0a]` (near-black) with gradient overlays
- Borders: `border-gray-800` or `border-zinc-900`
- Accent: `text-blue-500` for brand color, `text-cyan-400` for highlights
- Cards: `bg-gray-900/50` with `backdrop-blur-sm` for glassmorphism

### Typography
- Headlines: `font-extrabold tracking-tight` with `text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400`
- Body: `text-gray-300` or `text-gray-400`
- Prose styling: Use `prose-invert` utility for markdown content

## Development Workflow

### Commands
```bash
npm run dev    # Start dev server on localhost:3000
npm run build  # Generate static export to /out
npm start      # Serve production build (after build)
```

### ESLint Configuration
- Uses flat config ([eslint.config.mjs](eslint.config.mjs))
- **Builds ignore linting** (`ignoreDuringBuilds: true` in [next.config.ts](next.config.ts))
- Disable Next.js warnings for external images: `/* eslint-disable-next-line @next/next/no-img-element */`

### Image Handling
- `unoptimized: true` in [next.config.ts](next.config.ts) for static export compatibility
- Use standard `<img>` tags for external affiliate images (not `next/image`)

## Monetization & External Integrations

### Affiliate Links
- **EpicVIN**: Primary partner, ID `0xhataau2iwvr` in all VIN check CTAs
- **VinCheckUp**: Secondary widget, ID `almanova` in iframe embeds
- Always include tracking pixels and `rel="noopener noreferrer"` for external links

### Analytics & Ads
- **Google Analytics**: ID `G-X118BW3G4H` loaded in [src/app/layout.tsx](src/app/layout.tsx)
- **Google AdSense**: Client `ca-pub-4945576098147797`, lazy-loaded script
- **Cookie Consent**: Client-side component ([src/components/CookieConsent.tsx](src/components/CookieConsent.tsx)) for GDPR

## Next.js 15 Specifics

### Async Params
Route params are now Promises:
```tsx
type Props = { params: Promise<{ slug: string }> };
export default async function Page({ params }: Props) {
  const { slug } = await params; // Must await
}
```

### React 19 Compatibility
- Uses React 19.x (`react@^19.2.3`)
- Geist font family via `next/font/google`

## Testing & Validation

When adding VIN decoder features, validate against:
- 17-character length enforcement
- WMI prefix matching (first 3 chars)
- Year code mapping (10th character)
- Invalid character exclusion (I, O, Q)

### Manual Testing Process
Since this project does not have automated tests:
1. **Run dev server**: `npm run dev` and manually test changes in browser
2. **Test VIN validation**: Use the VIN input component with valid/invalid VINs
3. **Verify static generation**: Run `npm run build` and check `/out` directory contents
4. **Test all routes**: Ensure dynamic routes render correctly after build

## Key Guidelines

1. **Follow TypeScript best practices**: Use proper types, avoid `any`, leverage type inference
2. **Maintain existing code structure**: Keep content in TypeScript arrays, not external files
3. **Static site compatibility**: Never use server-side features (API routes, server actions, ISR)
4. **Preserve affiliate tracking**: Always maintain EpicVIN (`a_aid=0xhataau2iwvr`) and VinCheckUp (`almanova`) IDs
5. **Use Next.js 15 patterns**: 
   - Always `await` route params (they are Promises in Next.js 15)
   - Use App Router conventions (no Pages Router)
6. **Image optimization**: Use standard `<img>` tags with `unoptimized: true` config (required for static export)
7. **Dark theme consistency**: Follow established Tailwind classes (see Styling Conventions section)
8. **Documentation**: Update inline comments for complex logic, especially in VIN decoder
9. **Build validation**: Always run `npm run build` before finalizing changes to ensure static export works
10. **Linting compliance**: Fix all ESLint errors/warnings before committing (uses flat config)

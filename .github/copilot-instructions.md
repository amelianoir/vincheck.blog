# VinCheck.blog AI Coding Agent Instructions

## Project Overview
A Next.js 15 static site (`output: 'export'`) for VIN checking, vehicle history, and automotive blog content. Uses App Router with TypeScript, TailwindCSS, and affiliate monetization via EpicVIN/VinCheckUp.

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

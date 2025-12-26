# 🚀 Ako Nasadiť a Upravovať VinCheck.blog

## Editovanie Stránok (3 spôsoby)

### 1️⃣ **Cez GitHub Copilot v VS Code** (NAJLEPŠIE pre vás)
To čo práve robíte je perfektné! Môžete:
- Písať v chate: "pridaj nový blog o Tesla VIN"
- Písať: "zmeň farbu buttonu na zelenú"
- Písať: "pridaj Honda do značiek áut"

**GitHub Copilot vám automaticky:**
- Upraví kód
- Commitne zmeny
- Pushne na GitHub
- Vercel/Netlify **automaticky nasadia** novú verziu!

### 2️⃣ **Cez GitHub Web Interface**
1. Choďte na https://github.com/amelianoir/vincheck.blog
2. Kliknite na súbor (napr. `src/lib/blog.ts`)
3. Kliknite na ceruzku (✏️ Edit)
4. Urobte zmeny
5. Kliknite "Commit changes"
6. **Automatický deploy!**

### 3️⃣ **Lokálne v VS Code**
```bash
# Urobte zmeny v súboroch
git add .
git commit -m "Pridaný nový blog"
git push
# Automatický deploy!
```

---

## 🔧 Čo Môžete Meniť Sami

### Pridať Nový Blog
Editujte: `src/lib/blog.ts`
```typescript
{
  slug: "novy-blog",
  title: "Názov Blogu",
  excerpt: "Krátky popis...",
  date: "2025-12-26",
  readTime: "5 min read",
  category: "Buying Guide",
  content: `
# Nadpis

Váš text tu...

**Bold text** a [linky](https://example.com)
  `
}
```

### Pridať Novú Značku Auta
Editujte: `src/lib/brands.ts`
```typescript
{
  name: "Tesla",
  slug: "tesla",
  description: "Tesla VIN check for Model S, 3, X, Y",
  popularModels: ["Model S", "Model 3", "Model X", "Model Y"]
}
```

### Pridať Novú Krajinu
Editujte: `src/lib/countries.ts`
```typescript
{
  name: "Slovakia",
  slug: "slovakia",
  code: "SK",
  description: "VIN check pre Slovensko...",
  flag: "🇸🇰"
}
```

### Zmeniť Farby
Editujte: `src/app/globals.css` alebo použite Tailwind classy v komponentoch
- `bg-blue-500` → `bg-green-500`
- `text-gray-400` → `text-white`

---

## 📦 Deployment na Vercel (ODPORÚČANÉ)

### Prvé Nastavenie (raz)
1. Choďte na https://vercel.com
2. Prihláste sa cez GitHub
3. Kliknite "Add New Project"
4. Vyberte `amelianoir/vincheck.blog`
5. **Framework Preset**: Next.js
6. **Build Command**: `npm run build`
7. **Output Directory**: `out`
8. Kliknite "Deploy"

### Nastavte Vlastnú Doménu
1. V Vercel: Settings → Domains
2. Pridajte: `vincheck.blog`
3. Nastavte DNS (u registrátora domény):
   ```
   A Record: 76.76.21.21
   CNAME www: cname.vercel-dns.com
   ```

### Automatický Deployment
Po nastavení:
- Každý `git push` na `main` branch = **automatický deploy!**
- Vercel vám pošle email keď je hotovo
- Zmeny sú online za 1-2 minúty

---

## 🌐 Deployment na Netlify (alternatíva)

### Prvé Nastavenie
1. Choďte na https://netlify.com
2. Kliknite "Add new site" → "Import from Git"
3. Vyberte GitHub → `amelianoir/vincheck.blog`
4. **Build command**: `npm run build`
5. **Publish directory**: `out`
6. Kliknite "Deploy site"

### Nastavte Doménu
1. Site settings → Domain management
2. Add custom domain: `vincheck.blog`
3. Nastavte DNS podľa inštrukcií Netlify

---

## ✅ Overenie Deploymentu

### Po Deployi Skontrolujte:
1. **Homepage**: https://vincheck.blog
2. **Blog**: https://vincheck.blog/blog
3. **Sitemap**: https://vincheck.blog/sitemap.xml
4. **Robots**: https://vincheck.blog/robots.txt

### Testujte VIN Checker:
1. Zadajte VIN: `1HGBH41JXMN109186`
2. Malo by vás presmerovať na EpicVIN s affiliate linkom
3. Skontrolujte že URL obsahuje: `a_aid=0xhataau2iwvr`

---

## 🔄 Workflow pre Zmeny

**Jednoduchý proces:**
1. Otvorte GitHub Copilot chat v VS Code
2. Napíšte čo chcete zmeniť (po slovensky!)
3. Copilot upraví súbory
4. Automaticky commitne a pushne
5. Vercel/Netlify automaticky deploynu
6. Hotovo za 2 minúty! ✨

**Príklady príkazov:**
- "pridaj blog o Toyota Corolla"
- "zmeň modré buttony na červené"
- "pridaj Škoda do značiek"
- "oprav preklep v blog poste o BMW"

---

## 🆘 Riešenie Problémov

### Build Failed
```bash
npm run build
# Opravte chyby ktoré uvidíte
```

### Stránka Nezobrazuje Zmeny
1. Vyčistite cache: Ctrl+Shift+R (Chrome)
2. Skontrolujte Vercel logs
3. Overte že push prešiel na GitHub

### 404 Error na Stránke
- Skontrolujte že stránka existuje v `generateStaticParams()`
- Rebuild: `npm run build`

---

## 💰 Monitoring Príjmov

### Affiliate Tracking
- **EpicVIN**: https://epicvin.com/affiliate-login
  - ID: `0xhataau2iwvr`
- **VinCheckUp**: https://vincheckup.com/affiliate
  - ID: `almanova`

### AdSense
- https://adsense.google.com
- ID: `ca-pub-4945576098147797`

### MaxBounty
- https://maxbounty.com/login
- Affiliate ID: `775698`

---

## 📊 SEO Monitoring

### Google Search Console
1. https://search.google.com/search-console
2. Pridajte property: `vincheck.blog`
3. Overte vlastníctvo (cez DNS alebo meta tag)
4. Pošlite sitemap: `https://vincheck.blog/sitemap.xml`

### Sledujte:
- Pozície v Googli
- Počet kliknutí
- CTR (Click-through rate)
- Chyby pri indexovaní

---

## 🎯 Dôležité Súbory

| Súbor | Čo Obsahuje |
|-------|-------------|
| `src/lib/blog.ts` | Všetky blog posty |
| `src/lib/brands.ts` | Značky áut (BMW, Ford...) |
| `src/lib/countries.ts` | Krajiny (Germany, UK...) |
| `src/lib/vinDecoder.ts` | VIN dekódovacia logika |
| `src/components/VinInput.tsx` | VIN input box |
| `src/app/layout.tsx` | AdSense, Analytics |
| `next.config.ts` | Export nastavenia |

---

## ⚡ Quick Tips

- **Vždy testujte lokálne**: `npm run build` pred pushom
- **Píšte po slovensky** Copilotovi - rozumie!
- **Commitujte často**: malé zmeny = menej chýb
- **Sledujte analytics**: Google Search Console + Vercel Analytics
- **Pridávajte obsah pravidelne**: 1-2 blogy týždenne

🎉 **Teraz môžete editovať stránky ako profík!**

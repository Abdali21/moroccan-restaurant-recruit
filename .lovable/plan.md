## CoinCarrière — Hero Section

A clean, modern, conversion-focused hero for a Moroccan restaurant hiring platform. Split 50/50: copy on the left, hospitality photo on the right.

### Layout

```text
┌────────────────────────────────────────────────────────────┐
│  [Logo CoinCarrière]                       [Nav · Connexion]│
├────────────────────────────────┬───────────────────────────┤
│                                │                           │
│  • Badge pill                  │                           │
│  Headline (large, bold)        │     Restaurant photo      │
│  Sub-headline (muted)          │     (rounded, soft        │
│                                │      gradient overlay,    │
│  [ CTA primary #0170A7 ]       │      subtle shadow)       │
│  Gratuit • Aucune CB requise   │                           │
│                                │     [floating proof card] │
│  ★★★★★  trust row              │                           │
└────────────────────────────────┴───────────────────────────┘
```

### Content (exact copy)

- Badge: "Première plateforme hôtellerie-resto • #1 au Maroc"
- H1: "Restaurants : Recrutez du personnel fiable, plus vite"
- Sub: "Arrêtez le chaos WhatsApp et trouvez des candidats sérieux qui se présentent vraiment."
- CTA: "Publier votre offre maintenant" (background #0170A7, white text)
- Microcopy under CTA: "Gratuit pour commencer • Aucune carte bancaire requise"
- Small trust row under microcopy: 5 stars + "Approuvé par +500 restaurants au Maroc" (visual proof, not in your brief but standard for conversion — remove on request)

### Visual style

- Background: near-white (#FAFBFC) with a very subtle dotted/grid pattern fading out toward the center
- Brand color #0170A7 used for: CTA, badge dot, accent underline on a key word in the headline ("fiable")
- Typography: Inter (or system sans). H1 ~ 56px desktop / 36px mobile, tight tracking, semibold. Sub 18–20px, muted slate. Generous line-height.
- Badge: soft pill, white background, 1px border, small colored dot, subtle shadow
- CTA: solid #0170A7, rounded-lg, medium padding, soft shadow, hover slightly darker, arrow icon
- Right image: rounded-2xl, soft drop shadow, gentle linear gradient overlay (from transparent to #0170A7 at ~15% opacity in bottom-left) for warmth and text-friendly tone
- Floating "proof card" over the bottom-left of the image: small white card with avatar, "+12 candidats reçus aujourd'hui" — adds motion/credibility (optional, easy to remove)

### Image

Generate a realistic photograph using the AI image tool: a warm, busy Moroccan restaurant scene — a confident manager in a modern Casablanca/Marrakech restaurant interior, soft natural lighting, tagine and modern plating visible in background, authentic Moroccan hospitality feel. Saved to `src/assets/hero-restaurant.jpg` and imported properly.

### Responsive behavior

- ≥ lg: 50/50 split, image right
- md: stacked, text first then image, image height capped
- Mobile: full-width stacked, CTA full-width, headline scales down, image aspect 4/3

### Technical notes

- Replace `src/pages/Index.tsx` placeholder with a `<Hero />` section
- New file: `src/components/Hero.tsx`
- New file: `src/assets/hero-restaurant.jpg` (generated via Lovable AI image, Nano banana pro for quality)
- Add design tokens to `src/index.css` and `tailwind.config.ts`:
  - `--brand: 199 99% 33%` (#0170A7 in HSL)
  - `--brand-foreground: 0 0% 100%`
  - Extend Tailwind colors with `brand` mapped to the token
  - Add a subtle background pattern utility (radial dot pattern via CSS)
- Use existing shadcn `Button` with a new `brand` variant or inline className using the token
- Icons via `lucide-react` (already available): `ArrowRight`, `Star`, `CheckCircle2`
- No new dependencies needed
- Accessibility: semantic `<section>`, `<h1>`, alt text on image, focus-visible ring on CTA in brand color

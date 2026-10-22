# Design Brief — Sri Gurusamy Matches Unit

## Purpose & Tone
Premium heritage brand showcase for a safety matches manufacturer (18+ years in Sivakasi, India). Authoritative yet warm. Celebrates craft precision and industrial heritage while remaining approachable.

## Visual Direction
Industrial warmth with refined minimalism. Deep charcoal primary (craft authority), warm amber accent (fire/light symbolism), cream/sand neutrals. Serif display font (heritage), humanist sans body (warmth), clean grid composition.

## Differentiation
Scroll-driven frame-by-frame match animation (hero section) is the core differentiator — demonstrates precision manufacturing and captures attention through interactive craft storytelling. Smooth, professional execution is non-negotiable.

## Color Palette

| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| Primary | `0.4 0.11 30` (charcoal-brown) | `0.68 0.15 55` (warm brown) | Brand authority, CTAs |
| Secondary | `0.72 0.16 50` (warm tan) | `0.22 0.01 35` (dark slate) | Supporting hierarchy |
| Accent | `0.62 0.19 60` (amber-gold) | `0.72 0.19 60` (bright amber) | Fire symbolism, highlights |
| Destructive | `0.55 0.22 25` (red-brown) | `0.65 0.19 22` | Error states |
| Muted | `0.88 0.01 45` (light sand) | `0.25 0.01 35` (dark gray) | Backgrounds, deemphasis |

## Typography
Display: Fraunces (serif, heritage authority) | Body: General Sans (humanist, warm clarity) | Mono: JetBrains Mono (tech specs)

## Structural Zones
- **Hero**: Dark charcoal gradient background with match animation, premium spacing, accent border hints
- **Content sections**: Alternate cream/card backgrounds with subtle borders; 1px border-border on dividers
- **Product cards**: Elevated shadow treatment with warm accent highlights on hover
- **Footer**: Warm charcoal card with contact info, inverted text treatment

## Shape Language
Subtle rounded corners (0.625rem base), no aggressive modernism. Linear borders, crisp grid alignment. Match animation uses pixel-perfect frame timing.

## Motion
Scroll-driven match animation: 30-frame sprite sheet, smooth stepping on scroll progress. Product cards fade + slide on viewport intersection. Buttons transition smoothly on interaction (0.3s cubic-bezier).

## Signature Detail
The match animation — precise frame-by-frame playback synchronized to scroll progress, demonstrating manufacturing precision as visual metaphor for brand quality.

## Constraints
- No generic gradients or rainbow palettes
- Typography hierarchy via display/body pairing, not weight alone
- Accent color used sparingly for fire symbolism and primary CTAs
- Card layouts use structured borders, not floating shadows
- Match animation must feel professional and responsive (no jank on scroll)

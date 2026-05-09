---
name: Wild Drop Design System
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2b2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#111111'
  on-primary-container: '#7e7c7c'
  inverse-primary: '#5f5e5e'
  secondary: '#c6c7c5'
  on-secondary: '#2f3130'
  secondary-container: '#454746'
  on-secondary-container: '#b5b5b4'
  tertiary: '#c7c6c6'
  on-tertiary: '#303031'
  tertiary-container: '#101111'
  on-tertiary-container: '#7c7d7d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e3e1'
  secondary-fixed-dim: '#c6c7c5'
  on-secondary-fixed: '#1a1c1b'
  on-secondary-fixed-variant: '#454746'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-xl:
    fontFamily: Monument Extended
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Monument Extended
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Monument Extended
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Monument Extended
    fontSize: 24px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Monument Extended
    fontSize: 20px
    fontWeight: '800'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-medium:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The brand identity is rooted in the intersection of high-end luxury and raw urban culture. It is designed to evoke a sense of exclusivity, authenticity, and high-octane energy. The target audience consists of trendsetters and streetwear enthusiasts who value craftsmanship and bold self-expression.

The visual style is **High-Contrast / Bold** with a **Minimalist** structural foundation. This design system prioritizes:
- **Atmospheric Depth:** Utilizing deep charcoal backgrounds to allow photography and product textures to pop.
- **Cinematic Urgency:** Large-scale typography and tight kerning create a sense of presence and "the drop" culture.
- **Industrial Precision:** Clean lines, technical labels, and metallic accents reflect the quality of "Premium Goods."
- **Visual Breathing Room:** Expansive whitespace (or "dark space") is used to maintain a premium feel and prevent the interface from feeling cluttered.

## Colors

This design system utilizes a dark-mode-first approach to maximize the "Premium Streetwear" aesthetic.

- **Negro Carbón (#111111):** The primary canvas. Used for all core backgrounds to create a sophisticated, infinite depth.
- **Blanco Humo (#F5F5F3):** High-contrast text and primary buttons. It is never pure white, maintaining a softer, "off-white" premium feel.
- **Gris Cemento (#8A8A8A):** Used for metadata, borders, and secondary text. It represents the raw urban landscape.
- **Plata Metálico (#C9C9C7):** An accent for technical details, dividers, and icon states.
- **Beige Arena (#D8CB88):** A high-value accent color reserved for "Limited Edition" tags, calls to action, or highlight states to inject warmth and exclusivity.

**Usage Ratio:** 60% Negro Carbón, 20% Blanco Humo, 10% Gris Cemento, 5% Plata, 5% Beige.

## Typography

The typography system is a study in contrast. **Monument Extended** provides a heavy, wide, and aggressive footprint for titles, while **Inter** brings modern, utilitarian legibility for functional content.

### Hierarchy Rules
- **Headlines:** Always use Monument Extended. For marketing sections, use tight line heights and negative letter-spacing for a "blocked" look.
- **Body Text:** Use Inter Regular for general reading. Use Inter Light for large-scale editorial quotes.
- **Labels:** Small labels (tags, SKU numbers, categories) should be in Inter Bold/Medium, always uppercase, with increased letter spacing to mimic industrial stamping.
- **Scale:** On mobile, reduce display sizes significantly to prevent horizontal overflow of the wide Monument Extended typeface.

## Layout & Spacing

The design system follows a **12-column fixed grid** for desktop and a **4-column fluid grid** for mobile.

### Layout Philosophy
- **Generous Margins:** Utilize wide side margins (64px+) on desktop to center the content and evoke the feeling of a high-fashion editorial.
- **Asymmetric Balance:** Occasionally break the grid with large typography or offset imagery to maintain an "authentic" urban energy.
- **The "Drop" Rhythm:** Use vertical spacing (xl: 80px) between major sections to allow the user to focus on one "drop" at a time.
- **Guttering:** Maintain a consistent 24px gutter to ensure clean lines between product cards.

## Elevation & Depth

To maintain a premium, flat-lay aesthetic, this design system avoids traditional drop shadows.

- **Tonal Layering:** Depth is created by placing elements on surfaces of slightly different shades of dark grey. Primary background is #111111, while cards or modals can use #1A1A1A.
- **High-Contrast Outlines:** Instead of shadows, use 1px solid borders in #8A8A8A (Gris Cemento) or #C9C9C7 (Plata) to define boundaries.
- **Hard Shadows:** If depth is absolutely required (e.g., a floating "Add to Cart" bar), use a 100% opacity hard-offset shadow in #000000 to mimic a brutalist, physical object.
- **Photography Depth:** Use professional photography with shallow depth of field to provide the primary source of visual "layering" in the interface.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Streetwear is about structure and edge. All buttons, product cards, input fields, and containers must feature 90-degree corners. This reinforces the "Urban/Industrial" aesthetic and contrasts against the organic shapes of the apparel in the photography. 

- **Exceptions:** Icons may feature slight internal curves for legibility, but their bounding containers must remain sharp.
- **Dividers:** Use 1px or 2px lines. Avoid thick dividers unless used as a bold structural element.

## Components

### Buttons
- **Primary:** Background #F5F5F3 (Blanco Humo), Text #111111, Sharp corners, Uppercase Inter Bold.
- **Secondary:** Transparent background, 2px border #F5F5F3, Text #F5F5F3.
- **Accent:** Background #D8CB88 (Beige Arena) for limited launches.

### Product Cards
- No borders or background colors by default. 
- The image should fill the width. 
- Metadata (Price/Title) sits below in Inter, with the price highlighted in #D8CB88 or #F5F5F3.

### Inputs
- Background #111111, bottom-border only (2px Gris Cemento). 
- Placeholder text in Inter Light. 
- Active state transitions border to Plata Metálico.

### Chips & Tags
- Used for "New Arrival" or "Sold Out."
- Small rectangular boxes, black background with 1px Plata Metálico border, Inter Bold 10px uppercase text.

### Navigation
- Top-aligned, minimal. Logo centered or left-aligned. 
- Links in Inter Medium, uppercase, with a simple underline on hover.
# ByteSpace Design Tokens & System Reference

This document catalogs every design token implemented in the ByteSpace project, specifying its exact value, source of origin, and CSS/Tailwind utility.

---

## 1. Color Palette

### Brand Colors (Exact from Figma Specification)
| Token Name | Hex Code | Figma / Design Name | Description & Usage |
| :--- | :--- | :--- | :--- |
| `primary-blue` | `#003BE2` | "Persian Blue/800" | Hero section backgrounds, primary branding, dark accents |
| `lime-accent` | `#CBFC01` | Lime Accent | Primary buttons, chips, hero circle arc, active states |
| `lime-404` | `#D4FB20` | Lime 404 / Brandmark | ByteSpace geometric logo mark, 404 gradient number |
| `surface-white` | `#FFFFFF` | Pure White | Base page background, card surfaces, white button text |

### Neutral Palette (Measured from PDF Vector Fills via PyMuPDF)
| Token Name | Hex Code | RGB | Sampling Source & Context |
| :--- | :--- | :--- | :--- |
| `text-primary` | `#242528` | `(36, 37, 40)` | Main headings and primary high-contrast text on light cards |
| `text-body` | `#4B4C53` | `(75, 76, 83)` | Regular body text, course descriptions, secondary labels |
| `text-muted` | `#82868E` | `(130, 134, 142)` | Partner logos, input placeholders, tertiary text |
| `text-subtle` | `#ABAEB5` | `(171, 174, 181)` | Rating star outlines, inactive elements, subtle icons |
| `border-light` | `#CED0D3` | `(206, 208, 211)` | Card borders, input field borders |
| `border-divider`| `#E5E6E8` | `(229, 230, 232)` | Horizontal rules, footer separator borders |
| `surface-light` | `#F5F5F6` | `(245, 245, 246)` | Light grey band behind partner logos, pill background |
| `bg-soft` | `#FAFAFA` | `(250, 250, 250)` | Section alternating soft background |
| `dark-surface` | `#040819` | `(4, 8, 25)` | Deep navy/black surface in dark containers |
| `dark-card` | `#18191B` | `(24, 25, 27)` | Dark floating card container background |

---

## 2. Typography Scale

- **Typeface:** Poppins for all UI elements (loaded locally via `@fontsource/poppins` weights `400`, `500`, `600`, `700`).
- **Scale Breakdown & Verification Status:**
  - **Heading L (72px):** Confirmed from Figma as **"Heading L"** with `120%` line-height and `-1%` (`-0.01em`) letter-spacing.
  - **Heading L-44 (44px):** Renamed to `text-heading-l-44` for now (**Figma name not yet confirmed**).
  - **Line Heights:** Marked as **unverified** unless actually measured. Only the 72px heading's 120% line-height and -1% letter spacing are confirmed from Figma (the earlier measurement command did not finish).

| Token Name | Font Size | Weight | Line Height | Letter Spacing | Design Context & Example Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `text-404` | `480px` | `600` (SemiBold) | `100%` (unverified) | `-1%` (`-0.01em`) | 404 number display fading from `#D4FB20` to transparent |
| `text-heading-l` | `72px` | `600` (SemiBold) | `120%` (confirmed from Figma) | `-1%` (confirmed from Figma) | Home Hero H1: *"Get Access to Hundreds Courses Available"* (Figma name: "Heading L") |
| `text-heading-xl` | `48px` | `600` (SemiBold) | `120%` (unverified) | `-1%` (`-0.01em`) | Major section titles: *"Discover Your Passion, Build Your Skills"* |
| `text-heading-l-44` | `44px` | `600` (SemiBold) | `120%` (unverified) | `-1%` (`-0.01em`) | Page titles: *"Sign up and come in"*, *"Sign in with ease"* (Note: Figma name not yet confirmed) |
| `text-heading-m` | `36px` | `600` (SemiBold) | `125%` (unverified) | `0` | Stat numbers (*"12K"*, *"70+"*), Section titles |
| `text-heading-s` | `24px` | `600` (SemiBold) | `130%` (unverified) | `0` | Course card titles (*"Learn Figma from Basic"*), Creator name |
| `text-card-title` | `20px` | `600` (SemiBold) | `140%` (unverified) | `0` | Smaller card headings (*"Build Digital Asset"*), Module headers |
| `text-body-lg` | `18px` | `400` / `500` | `150%` (unverified) | `0` | Subheads (*"Unlock your creativity..."*), Search input text |
| `text-body` | `16px` | `400` / `500` | `150%` (unverified) | `0` | Standard body text, Navbar links (*"Home"*, *"Courses"*), CTA buttons |
| `text-body-sm` | `14px` | `400` / `500` | `150%` (unverified) | `0` | Input labels (*"Email"*, *"Password"*), Footer links (*"Featured Courses"*) |
| `text-caption` | `12px` | `400` / `500` | `140%` (unverified) | `0` | Metadata (*"17 Lessons"*, *"2 hours 16 mins"*, *"59 Comments"*, Level badges) |
| `text-micro` | `10px` | `500` (Medium) | `130%` (unverified) | `0` | Metric badges (*"+12.5%"*, *"July 1-28"*, Review parenthetical counts) |

---

## 3. Layout & Geometry

| Property | Value | Origin & Implementation |
| :--- | :--- | :--- |
| **Desktop Canvas Width** | `1440px` | Prototype artboard width |
| **Content Container** | `1132px` | Measured from layout margins `(1440 - 1132)/2 = 154px` margins. Reusable via `<Container />`. |
| **Hero Frame Dimensions**| `1440px × 1024px` | Measured directly from Home hero section |
| **Home Hero Lime Arc** | Circle `1149px × 1149px` | CSS circle: `border: 320px solid #CBFC01; border-radius: 9999px; position: absolute; left: 145px; top: 582px;` |
| **Hero Grid Pattern** | `120px × 120px` cells | Verified against Figma at 100% zoom (150 screen px at 125% display scaling = 120 design px). Grid lines are `1px rgba(255, 255, 255, 0.12)` over `#003BE2`. Line opacity 12% is estimated by eye, not exact. Reusable via `.bg-hero-grid`. |

---

## 4. Border Radius & Surface Elevation

### Border Radius (Measured from PDF Vector Geometry)
- **`8px` (`rounded-sm` / `rounded-[8px]`):** Inner image containers, small status badges.
- **`12px` (`rounded-md` / `rounded-[12px]`):** Buttons, text input boxes.
- **`16px` (`rounded-lg` / `rounded-[16px]`):** Stats widgets, floating preview badges.
- **`24px` (`rounded-xl` / `rounded-[24px]`):** Course cards (`374x436px`), modal sheets, large content panels (`579x784px`).
- **`9999px` (`rounded-full`):** Category pills, search container pill, avatar circular rings.

### Shadows (Measured from Extracted Drop Shadows)
- **`shadow-card`:** `0 4px 20px 0 rgba(0, 0, 0, 0.06)` (Standard course cards on light backgrounds)
- **`shadow-card-hover`:** `0 12px 32px 0 rgba(0, 0, 0, 0.10)` (Card hover elevation)
- **`shadow-floating`:** `0 10px 30px 0 rgba(0, 0, 0, 0.10)` (Floating hero cards)
- **`shadow-ambient`:** `0 24px 48px -12px rgba(0, 0, 0, 0.12)` (Deep atmospheric blur)

---

## 5. Measured vs. Guessed Breakdown

### What Was Measured (Exact from PDF / Figma):
- **Exact Colors:** All 27 unique vector fill colors extracted directly from `prototype.pdf` via `page.get_drawings()` and matched against Figma token names.
- **Heading L (72px):** Confirmed from Figma as "Heading L" with exact `120%` line-height and `-1%` letter-spacing.
- **Type Scale Font Sizes:** Every font size (`480px`, `72px`, `48px`, `44px`, `36px`, `24px`, `20px`, `18px`, `16px`, `14px`, `12px`, `10px`) measured directly from span dictionaries via `page.get_text("dict")`.
- **Hero Grid Pattern:** `120px × 120px` cells — verified against Figma at 100% zoom (150 screen px at 125% display scaling = 120 design px).
- **Hero Lime Circle:** Diameter (`1149px`), border stroke (`320px`), position (`x=145px`, `y=582px`) extracted directly from Figma vector coordinates.
- **Content Width:** Exactly `1132px` wide (matching the partner logo strip and grid gutters).
- **Border Radii:** Measured exact corner radii (`8px`, `12px`, `16px`, `24px`) from PDF bezier curves.

### What Is Estimated / Unverified:
- **Line Heights:** Marked as unverified unless actually measured. Only the 72px heading's 120% and -1% letter spacing are confirmed from Figma (the earlier measurement command did not finish).
- **Heading L-44 Token Name:** The 44px token is named `text-heading-l-44` for now; Figma name not yet confirmed.
- **Hero Grid Line Opacity:** Line opacity 12% is estimated by eye, not exact.
- **Mobile Container Padding:** While desktop is fixed at `1132px`, responsive mobile breakpoints (`px-4 sm:px-6`) were added to `<Container />` for clean multi-device display.
- **Hover Transitions:** Smooth `transition-all duration-200` added for buttons and card elevations.

# Design System Strategy: The Kinetic Intelligence Framework

## 1. Overview & Creative North Star
**The Creative North Star: "Precision Luminescence"**

This design system moves away from the static, dry nature of traditional data consultancy. We are building a "Digital Observatory"—an environment that feels both infinitely deep and laser-focused. By utilizing the Bento-grid philosophy, we organize complex data into "micro-stories." 

The "template" look is avoided through **Intentional Asymmetry**: we pair heavy, brutalist typography with ethereal, glassmorphic containers. We break the grid with "overflowing" purple glows and sharp, high-contrast action points that guide the eye through a dark, premium void.

## 2. Colors & Surface Philosophy

The palette is anchored in absolute blacks to provide a high-contrast stage for the "Vibrant Lemon" and "Secondary Purple."

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or card definition. Boundaries must be defined solely through:
1.  **Tonal Shifts:** Placing a `surface-container-high` card on a `surface` background.
2.  **Chromatic Glows:** Using the `secondary` (#7533FF) as a blurred underlay to define the edge of a container.
3.  **Negative Space:** Utilizing the `spacing-12` and `spacing-16` tokens to create distinct content "islands."

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of dark glass.
*   **Base Layer:** `surface` (#131312) - The infinite void.
*   **Section Layer:** `surface-container-low` (#1C1C1A) - For large background areas.
*   **Component Layer:** `surface-container-highest` (#353532) - For Bento cards and interactive modules.
*   **Nesting:** To create depth within a Bento card, use `surface-container-lowest` for internal utility bars or metadata tags to create a "recessed" look.

### The "Glass & Glow" Rule
To achieve a premium high-tech feel, floating elements (modals, dropdowns, video overlays) must use:
*   **Backdrop Blur:** 20px - 40px.
*   **Fill:** `surface_variant` at 60% opacity.
*   **Signature Texture:** A subtle radial gradient transition from `secondary_container` (Purple) at 5% opacity to transparent, originating from the top-right corner of the container.

## 3. Typography: Editorial Authority

We use a "High-Contrast Scale" where display text is intentionally massive to contrast against technical, small-scale metadata.

*   **Display & Headlines (Montserrat):** These are your "Anchors." Use `ExtraBold` for `display-lg`. Letter spacing should be set to `-0.02em` to create a dense, authoritative block of text.
*   **Body & Accents (Inter/Codec Pro):** These are your "Precision Instruments." Use `body-md` for standard descriptions. For "High-Tech" accents (like animated counters), use `label-md` in all-caps with `+0.1em` tracking.
*   **Cream Contrast:** All typography uses `on_surface` (Cream #FFFDEE). This softens the harshness of the pure black and white, adding a "luxury paper" quality to the digital screen.

## 4. Elevation & Depth

### Tonal Layering
Avoid shadows where possible. Instead, "lift" a component by shifting its background token up one level (e.g., `surface-container-low` to `surface-container-high`).

### Ambient Shadows
When an element must float (e.g., a primary CTA or Video Player), use a **Chromatic Shadow**:
*   **Color:** `secondary` (#7533FF) at 15% opacity.
*   **Blur:** 60px.
*   **Spread:** -10px.
*   *This creates a purple "aura" rather than a grey shadow.*

### The "Ghost Border" Fallback
If a visual boundary is required for accessibility, use a **Ghost Border**:
*   **Token:** `outline_variant` (#444937).
*   **Opacity:** 15%.
*   **Rule:** Never use 100% opacity for borders.

## 5. Components

### High-Contrast Buttons
*   **Primary (Action):** Background `primary_container` (Lemon #D5FC6B), Text `on_primary`. Sharp corners (`rounded-none` or `rounded-sm`). On hover, add a 12px `primary_fixed` outer glow.
*   **Secondary (Purple Outline):** No background. Border: 2px `secondary` (#7533FF). Text: `secondary`. On hover: Fill background with `secondary` at 10% opacity.

### Bento Cards
*   **Structure:** No dividers. Use `surface-container-highest` as the card base.
*   **Internal Padding:** Always use `spacing-6` (2rem) to maintain a "minimalist luxury" feel.
*   **Content:** Pair a `headline-sm` title with a `label-sm` technical stat in the top right corner.

### Video Player with Glow
*   **Border:** Use a "Ghost Border" (15% opacity).
*   **Underlay:** Apply a `secondary` (Purple) radial gradient at 30% opacity behind the player, extending 100px beyond the player's edges.
*   **Controls:** Glassmorphic bar at the bottom with a 30px backdrop blur.

### Animated Counters
*   **Typography:** Montserrat Bold.
*   **Color:** `primary_fixed` (Lemon).
*   **Detail:** Place a `label-sm` "Data Source" tag directly below the counter using `tertiary_fixed_dim` color.

## 6. Do's and Don'ts

*   **DO** use extreme vertical white space (`spacing-20` or `spacing-24`) between major sections to let the data "breathe."
*   **DO** overlap elements. A purple glow from a card should bleed slightly into the section above it.
*   **DON'T** use standard grey shadows. If it needs a shadow, it needs a purple or lemon tinted glow.
*   **DON'T** use icons from different libraries. Stick to sharp, linear icons with a 1.5px stroke weight to match the "Ghost Border" aesthetic.
*   **DON'T** use 100% white. Use the Cream (`on_surface`) for all neutral content to maintain the "High-End Editorial" warmth.
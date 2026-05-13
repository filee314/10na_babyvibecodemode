# Weather App Spec — BMO Face / Poetic ASCII Output

## Concept

A single-page weather app that renders current conditions as a large ASCII BMO face — the weather data lives *inside* the screen area of the face. The background is a gently morphing noisy gradient in colours derived from the weather. The whole thing should feel like awe: a living, breathing terminal that knows where you are and what the sky is doing.

---

## Core Features

1. **Location input** — default to Shoreditch, London; allow user to change via a text field
2. **Weather fetch** — pull current conditions from Open-Meteo (free, no key): temperature, weather description, precipitation probability, UV index (as proxy for sunniness), thunderstorm probability
3. **BMO ASCII face** — large, monospace, inspired by BMO from Adventure Time; the screen area of the face contains all weather data and poetry; the face expression changes with weather condition
4. **Noisy gradient background** — two-layer noise: film grain (subtle organic texture) + pixel scatter (visible digital static); colours derived from the active weather condition; morphs slowly and continuously
5. **Hand-curated poetry** — one or two lines per condition, chosen from a small curated pool; appears inside or just below the BMO screen; emoji fragments and typographic ornaments scattered through the interface

---

## Weather Data Displayed

| Field | Display |
|-------|---------|
| Location | City name + coordinates, top of screen |
| Temperature | Large, prominent, inside BMO screen |
| Weather description | Short label (Clear, Rain, Storm, etc.) |
| Chance of rain | Percentage |
| Sunniness / UV | Mapped to a brightness indicator |
| Thunder & lightning probability | **Featured prominently** — this is the sacred one |

---

## Condition → Colour Palette

| Condition | Background palette | Noise tint |
|-----------|--------------------|------------|
| Clear / Sunny | Warm amber, pale gold, horizon orange | golden scatter |
| Overcast | Slate blue-grey, muted lavender | cool grain |
| Rain | Deep blue, pewter, wet teal | blue static |
| Fog | Off-white, pale sage, dissolving cream | soft scatter |
| Snow | Cold white, ice blue, faint violet | silver grain |
| Storm / Thunder | Deep indigo, electric violet, near-black | purple-white flash |

Colours should feel unexpected and considered — not default "grey = sad". Fog is not grey. Overcast is not depressing.

---

## BMO Face — ASCII Design

- Large: fills roughly 60–70% of viewport width
- Inspired by BMO (Adventure Time): boxy body, large screen face, small dot eyes, rounded mouth, controller buttons on body
- Screen area contains: temperature, weather description, rain %, poetry line
- Expression (eyes + mouth) reacts to weather condition:

| Condition | Expression |
|-----------|------------|
| Clear | `^‿^` bright, content |
| Overcast | `-_-` low energy, quiet |
| Rain | `T⌣T` soft crying, melancholic |
| Fog | `·‿·` dreamy, unfocused |
| Snow | `°o°` hushed wonder |
| Storm / Thunder | `☉▽☉` wide-eyed, electric, alive |

- The face should feel *large* — ASCII characters sized up via CSS, not tiny terminal text

---

## Thunder & Lightning — Special Treatment

Thunder is the favourite. When thunderstorm probability is present:

- Background flashes: brief white/violet pulse animation, randomised interval
- Entire page shakes subtly (CSS keyframe shake)
- The thunder probability is displayed with special emphasis — larger, different colour, with a ⚡ glyph
- Poetry line swaps to a storm-specific curated set
- BMO expression goes `☉▽☉` — maximum awe

---

## Poetry & Emoji

- Hand-curated pool: 3–5 lines per weather condition
- One line chosen randomly each page load
- Lines appear inside BMO screen area, below the data
- Small emoji and Unicode ornaments (`⌇ ❀ · ✦ ░ ▒`) scattered in the negative space around BMO — not cluttered, spacious
- Font: monospace throughout — terminal aesthetic (`JetBrains Mono`, `Fira Code`, `Courier New` fallback)

---

## Layout

```
┌─────────────────────────────────────────────┐
│  [location input]              [city, coords]│
│                                              │
│         ┌──────────────────────┐            │
│         │  ·     ·             │            │
│         │   BMO SCREEN AREA    │            │
│         │  22°C  Rain  ⚡18%   │            │
│         │  "the sky is crying  │            │
│         │   very softly"       │            │
│         └──────────────────────┘            │
│         │ [B] [M] [O]          │            │
│         │  ✦  △  ●  ──         │            │
│         └──────────────────────┘            │
│                                              │
│  ░ ⌇  · ❀  ·    ·   ✦   ░  ·              │
└─────────────────────────────────────────────┘
```

- Spacious: generous padding, low density outside BMO
- Background fills full viewport, morphs behind everything
- Single page, no navigation

---

## Stack

- **Frontend only** — plain HTML + CSS + vanilla JS (no framework needed)
- **Weather API** — Open-Meteo + Open-Meteo geocoding for location names
- **Rendering** — `<pre>` blocks for ASCII, CSS for background animation and noise layers
- **Noise** — SVG `<feTurbulence>` filter or CSS `backdrop-filter` for grain; canvas pixel scatter or CSS animation for static layer

---

## Animations

- Background gradient: slow morph, 8–12s cycle, `ease-in-out`
- Noise layers: subtle shift/drift, not distracting
- Thunder flash: randomised interval (15–45s when storm active), 80ms white flash + 200ms fade
- Page shake: `transform: translate` keyframe, 300ms, triggered with flash
- BMO expression: no animation — static ASCII, changes on weather load

---

## Out of Scope (for now)

- Forecasts
- Maps
- User accounts
- Mobile app
- Dark/light mode toggle

# Migration Plan: Next.js 15 + React 19 + Chakra UI v2

**Goal**: Upgrade all major dependencies while keeping visuals identical.
**Current stack**: Next.js 12, React 17, Chakra UI v1, framer-motion v5
**Target stack**: Next.js 15, React 19, Chakra UI v2, framer-motion v11

> Stay on Pages Router. App Router migration is a separate, larger effort and not needed to get the benefits of Next.js 15.

---

## Phase 1: React 17 → 18 (foundation)

React 18 is a prerequisite for all other upgrades. React 19 requires Next.js 15, so we do 18 first.

### Changes
- [ ] `npm install react@18 react-dom@18`
- [ ] `pages/_app.js` — no changes needed (Next.js handles createRoot automatically)
- [ ] `pages/_document.js` — convert from class component to function export:
  ```js
  import { Html, Head, Main, NextScript } from 'next/document'
  export default function Document() { return (<Html>...</Html>) }
  ```
- [ ] Test that `useColorModeValue`, `useColorMode`, and all hooks still work
- [ ] Run full build, check for `act()` warnings or hydration mismatches

### Risk: Low
React 18 is backward-compatible. No component API changes needed.

---

## Phase 2: Chakra UI v1 → v2

Must happen before Next.js upgrade because Chakra v2 requires React 18+.

### Breaking changes to handle

| Pattern | Files | Fix |
|---------|-------|-----|
| `mode()` from `@chakra-ui/theme-tools` | `src/theme/index.js` | Import path stays, but verify `mode()` still works in v2. If not, use `useColorModeValue` in styles. |
| `ColorModeScript` | `pages/_document.js` | Still exists in v2, same usage. Just verify import. |
| `ChakraProvider` | `pages/_app.js` | Same API in v2, no change needed. |
| `extendTheme` | `src/theme/index.js` | Same API. Verify our custom `brand.*` colors resolve correctly. |

### Changes
- [ ] `npm install @chakra-ui/react@2 @emotion/react@latest @emotion/styled@latest framer-motion@latest`
  - Chakra v2 requires framer-motion v6+ as a peer dependency, so upgrade together
- [ ] `src/components/ThemeToggleButton.js` — `exitBeforeEnter` → `mode="wait"` (framer-motion v6+ rename)
- [ ] `src/theme/index.js` — verify `mode()` import from `@chakra-ui/theme-tools` still works; if removed, inline with `useColorModeValue`
- [ ] Search for any Chakra components with changed props (e.g., `Stack direction` is fine, `SimpleGrid columns` is fine)
- [ ] Visually compare every page in light + dark mode

### Risk: Medium
Chakra v2 is mostly API-compatible with v1. The main risk is subtle style differences in default theme values (spacing, font sizes). Visual regression check is critical.

---

## Phase 3: Next.js 12 → 15

Upgrade incrementally: 12 → 13 → 14 → 15, following each version's codemod.

### Step 3a: Next.js 12 → 13
- [ ] `npm install next@13 eslint-config-next@13`
- [ ] Run `npx @next/codemod@13 next-image-to-legacy-image .` — renames `next/image` → `next/legacy/image`
- [ ] Then run `npx @next/codemod@13 next-image-experimental .` — migrates to new `next/image` API
- [ ] **`next/link` changes** (no more `<a>` child needed, `passHref` removed):
  - `src/components/InternalLink.js` — remove `passHref`, Chakra `<Link>` becomes direct child (use `as` prop or `legacyBehavior`)
  - `src/components/BlogPostPage/ArticleNavigator.js` — remove nested `<Link>` inside `<NextLink>`
  - `src/components/BlogPostCard.js` — remove `passHref`
  - `src/components/TagSummary.js` — check for nested `<a>` tags
- [ ] `next.config.js` — add `const` keyword to `nextConfig`, remove `raw-loader` webpack rule (use `@next/mdx` built-in support)
- [ ] Remove `raw-loader` and `webpack` from devDependencies
- [ ] `@next/mdx` — already at v13, verify config still works
- [ ] Fix `next.config.js` images config: `domains` → `remotePatterns` (deprecated in 13)

### Step 3b: Next.js 13 → 14
- [ ] `npm install next@14 eslint-config-next@14`
- [ ] Minimal breaking changes for Pages Router users
- [ ] Verify build passes

### Step 3c: Next.js 14 → 15
- [ ] `npm install next@15 eslint-config-next@15`
- [ ] `npm install react@19 react-dom@19` (Next.js 15 supports React 19)
- [ ] `next.config.js` — check for any deprecated options
- [ ] Verify all `getStaticProps` / `getStaticPaths` still work (Pages Router is fully supported)

### Risk: Medium-High
The `next/link` changes affect many files. Image codemods help but need manual verification. Pages Router stays supported, so no forced App Router migration.

---

## Phase 4: Secondary dependency upgrades

These can be done independently after Phases 1-3.

### next-mdx-remote v3 → v5
- [ ] `npm install next-mdx-remote@latest`
- [ ] `pages/blog/[slug].js` — `serialize()` API may change slightly; check return shape
- [ ] MDX component passing stays the same
- [ ] Test all blog posts render correctly (especially code blocks and images)

### prism-react-renderer v1 → v2
- [ ] `npm install prism-react-renderer@latest`
- [ ] `src/components/MDXComponents.js`:
  - Change import: `import Highlight, { defaultProps }` → `import { Highlight, themes }`
  - Remove `{...defaultProps}` spread (no longer needed)
  - Custom theme object format is the same
- [ ] Verify code blocks render with correct syntax highlighting

### plaiceholder v2 → v3
- [ ] `npm install plaiceholder@latest`
- [ ] `src/utils/imageMetaData.js` — check if `getPlaiceholder()` return shape changed (v3 returns `{ base64, metadata }` vs v2's `{ base64 }`)
- [ ] Test blog post images still get blur placeholders

### react-pdf v6 → v9
- [ ] `npm install react-pdf@latest`
- [ ] `src/components/PdfViewer.js`:
  - Worker setup has changed — v9 uses `pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url)`
  - Or use the simpler `import 'react-pdf/dist/Page/TextLayer.css'` + `import 'react-pdf/dist/Page/AnnotationLayer.css'`
- [ ] CSS import path may have changed
- [ ] Test CV page renders both pages correctly

### framer-motion (already done in Phase 2)
Only change was `exitBeforeEnter` → `mode="wait"`.

---

## Phase 5: Cleanup

- [ ] Remove `prop-types` dependency — replace with JSDoc or TypeScript types in `MainLayout.js` and `EmailLink.js`
- [ ] Remove `@babel/core` from devDependencies (Next.js 13+ uses SWC by default)
- [ ] Remove `webpack` from devDependencies
- [ ] Remove `raw-loader` from devDependencies
- [ ] Remove `ignoreBuildErrors: true` from `next.config.js` and fix any TS errors (or add proper tsconfig if staying JS)
- [ ] Delete `public/runningmalawismall.png` (replaced by `.webp`)
- [ ] Audit `public/` for unused assets (e.g., `avatar3.jpg` if not referenced)
- [ ] Update `eslint` and `prettier` to latest

---

## Files changed per phase (reference)

| File | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Phase 5 |
|------|---------|---------|---------|---------|---------|
| `package.json` | x | x | x | x | x |
| `next.config.js` | | | x | | x |
| `pages/_document.js` | x | | | | |
| `pages/_app.js` | | | | | |
| `pages/blog/[slug].js` | | | x | x | |
| `src/theme/index.js` | | x | | | |
| `src/components/ThemeToggleButton.js` | | x | | | |
| `src/components/InternalLink.js` | | | x | | |
| `src/components/BlogPostCard.js` | | | x | | |
| `src/components/BlogPostPage/ArticleNavigator.js` | | | x | | |
| `src/components/MDXComponents.js` | | | | x | |
| `src/components/PdfViewer.js` | | | | x | |
| `src/utils/imageMetaData.js` | | | | x | |
| `src/components/MainLayout.js` | | | | | x |
| `src/components/EmailLink.js` | | | | | x |

---

## Testing checklist (run after each phase)

- [ ] `npm run build` passes
- [ ] Homepage renders correctly (hero image, latest posts, contact)
- [ ] Blog listing page loads, cards display with thumbnails
- [ ] Individual blog post renders (MDX content, code blocks with syntax highlighting, images with blur placeholders)
- [ ] Dark mode toggle works, all colors correct in both modes
- [ ] CV page PDF renders both pages
- [ ] Publications and Software pages render cards correctly
- [ ] About page image loads (webp)
- [ ] Tag filtering works
- [ ] Links (internal and external) navigate correctly
- [ ] No console errors or hydration warnings

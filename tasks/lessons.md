# Lessons

## Personal site design preferences

- Keep the page minimal: no greeting, biography, visible project-section title, section divider, decorative sign-off, or footer message. Do not add filler copy.

- This is a single-page personal namecard, not a business portfolio or marketing site. Do not add a navigation bar, a separate projects route, large marketing slogans, numbered sections, or sales-oriented contact sections.
- Preserve the owner's playful cat identity and understated personal-site character. All projects and social links belong on the homepage.
- Support dark styling only. Keep theme switching and light-theme dependencies removed.

## 2026-07-04 upgrade retrospective (Next 14→16, Tailwind 3→4)

- **Don't leave compat bridges as "done".** Used `@config "../tailwind.config.js"` to bridge Tailwind v4 instead of finishing the CSS-first migration (`@theme` + delete the JS config). A migration that still depends on the legacy artifact is half done.
- **Account for new tool defaults after major upgrades.** Tailwind v4 auto-scans all non-gitignored files — the `_archive/` directory would be scanned for class names. Needed an explicit `@source not "../_archive"`.
- **"Advisory" warnings are still findings.** Left the GTM inline-script lint warning as "pre-existing, advisory". The proper fix (`@next/third-parties` `<GoogleTagManager />`) took two minutes. Lint should end at zero.
- **"Upgrade all deps" includes pruning.** lodash remained as a full dependency for a single `omit()` call that a destructure replaces. Dependency review means checking usage, not just bumping versions.
- **Dead code from removed features should go in the same pass.** The `squeeze` prop on `Page.tsx` lost its last caller when `pages/` was deleted but survived the cleanup.

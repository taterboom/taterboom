<div style="text-align:center">
    <img src="./public/logo.png" width="128" height="128"/>
    <p style="font-size:1.5em;font-weight:500"><a href="https://taterboom.com">Tater Boom</a></p>
</div>

A single-page personal namecard built with Next.js, React, and Tailwind CSS. No navigation bar, no separate project pages, dark mode only.

### Development

Use Node.js 20.9 or newer and pnpm.

```sh
pnpm install
pnpm dev
```

Run `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build` before publishing.

### Updating the page

- Edit `data/projects.ts` to add, reorder, or update projects. Every project appears on the homepage in array order.
- Set `status: "in-progress"` to show a small WIP label.
- Put images in `public/assets/projects`. `logo` is shown in the list; optional `cover` provides a desktop hover/focus preview.
- Edit the introduction and social links in `app/page.tsx`.
- Shared colors and responsive styles live in `styles/globals.css`. The page stays dark regardless of system preferences, with no theme provider or external font request.

`_archive/` contains retired content and is excluded from routing, linting, type checking, and Tailwind scanning.

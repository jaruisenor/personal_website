# Joaquin Ruiseñor — personal website

A static Astro + TypeScript website. Content lives in `src/content/site.ts`; layout in `src/pages/index.astro`; styles in `src/styles/global.css`. No client-side application JavaScript, tracking, CMS, database or remote fonts.

## Local setup

Use Node.js 24 LTS and pnpm 11. Install pnpm using its official installation instructions if it is not already available.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Astro (normally http://127.0.0.1:4321). The server binds only to loopback. If Astro starts in the background, stop it with `pnpm exec astro dev stop`.

## Check, build and preview

```sh
pnpm check
pnpm build
pnpm preview
```

The production output is `dist/`. The preview command serves that build locally. Set `ASTRO_TELEMETRY_DISABLED=1` to disable Astro CLI telemetry. TypeScript stays on version 6 because the installed Astro checker does not support TypeScript 7. The lockfile pins the dependency graph.

## Updating content

Edit the biography, career roles, stack and contact links in `src/content/site.ts`. Add only approved projects to the typed `projects` array, supplying title, description, contribution and URL; the section appears automatically when entries exist. Use absolute HTTPS project URLs. Smaller section labels and draft notices are in `src/pages/index.astro`.

Keep claims and sources in `PROJECT_BRIEF.md`. Experience now uses approved company summaries; Projects stays hidden until approved entries exist. Do not infer dates or feature forks as original work.

## Verification — 2026-11-03

- `pnpm check`: zero errors, warnings or hints.
- `pnpm build`: successful static build.
- Local server: HTTP 200.
- Visually inspected the full page at 1280px desktop and 390px mobile widths; neither had horizontal overflow.
- All fragment links have matching targets; clicked navigation and back-to-top links.
- Keyboard focus displayed a visible outline; the skip link is present and focusable.
- Reviewed semantic landmarks, heading hierarchy, page title, description and Open Graph metadata.
- Revised to the compact hudovich.com-inspired layout: name/bio, stack, career roles, projects and contact.
- Verified revised desktop (1280px) and mobile (390px) rendering, no mobile horizontal overflow, valid anchor targets and Experience navigation.
- Calculated revised text/accent/badge colour pairs: all exceed WCAG AA 4.5:1.
- Contact URLs match the approved LinkedIn and GitHub URLs. External destination availability was not independently re-tested during UI QA.
- This was targeted verification, not a full assistive-technology or cross-browser audit.

## Vercel deployment

Import `jaruisenor/personal_website` in Vercel, using the repository root and the Astro preset. Use Node.js 24.x, `pnpm install --frozen-lockfile`, build command `pnpm build`, and output directory `dist`. No environment variables or server adapter are required. The package manager is pinned in package.json.

Production canonical URL: https://jruisenor.com. Add that domain in Vercel, plus www.jruisenor.com redirecting to the apex. Copy the exact DNS records displayed by Vercel into Porkbun; preserve unrelated email/TXT records and existing nameservers. Verify HTTPS and both hostnames after DNS validation. Future pushes to the linked production branch trigger deployments.

Publication workflow approved on 2026-11-05. Hosting and DNS completion are still pending. Projects remain intentionally hidden until approved entries are added. Do not change jaruisenor.github.io, which belongs to the separate Oscar project.

## Career update — 2026-11-05

Added seven roles and dates from user-supplied LinkedIn screenshots. Both OutThink product roles retain the source’s Present end date with a draft clarification. Type checks and static build passed; inspected all seven rows at desktop (1280px) and mobile (390px), with no horizontal overflow. Stack selection remains deferred.

## Company experience update — 2026-11-05

Replaced individual roles with three company entries: Google, OutThink and Deloitte. Each whole entry links to its approved company website in a new tab, with noopener/noreferrer and an accessible new-tab notice. Removed the promotion timeline, CODELCO and obsolete career draft note. The supplied Google team mission is approved for public copy.

Type checks and static build passed. Inspected desktop (1280px) and mobile (390px), verified three entries with no mobile overflow, checked all link destinations/target attributes, visible keyboard focus and keyboard activation opening OutThink in a separate tab.

## Stack and social links — 2026-11-05

Added the approved eleven tools as pills, plus AWS, GCP and Azure under Cloud experience. Edit the stack/clouds arrays in src/content/site.ts. LinkedIn and GitHub links in both locations now open new tabs with noopener/noreferrer and accessible new-tab notices.

Validation: final type checks and build passed; visually checked pills at 1280px and 390px with no mobile overflow. All four social links have new-tab targets and noopener/noreferrer. Clicked GitHub and LinkedIn and confirmed separate tabs; LinkedIn showed its authentication wall.

## Official icon refinement — 2026-11-05

Replaced emoji with local official product/vendor icons. Claude Code and Codex icons come from their publisher extension listings; Azure uses Microsoft Learn’s Azure logo. SQL uses a neutral, project-authored database symbol. Provenance is recorded in public/icons/SOURCES.md. Pill text is now 12px, with 16px icons and tighter padding.

# Navakanth Boyina Portfolio

A production-ready personal portfolio for Navakanth Boyina, focused on Microsoft Dynamics 365 CRM, Power Platform, Dataverse, C# plugins, PCF controls, Power Automate, and Azure integrations.

The site is built as a static Next.js export so it can be deployed to GitHub Pages without a backend, database, CMS, or server runtime.

## Technology Stack

- Next.js with the App Router
- TypeScript
- React
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Actions
- GitHub Pages static hosting

## Node.js Requirement

Use Node.js 22 or newer for development and CI. The GitHub Actions workflow currently uses Node.js 22.

## Local Setup

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Build Commands

Development:

```bash
pnpm dev
```

Lint:

```bash
pnpm lint
```

TypeScript check:

```bash
pnpm typecheck
```

Production static export:

```bash
GITHUB_PAGES=true pnpm build
```

Static export alias:

```bash
GITHUB_PAGES=true pnpm export
```

The generated static site is written to `out/`.

## GitHub Repository Setup

Create and publish the repository with GitHub CLI:

```bash
gh auth login
gh repo create navakanth-portfolio --public --source=. --remote=origin --push --description "Navakanth Boyina Dynamics 365 and Power Platform portfolio"
gh api --method POST repos/navakanthboyina/navakanth-portfolio/pages -f build_type=workflow
```

If GitHub CLI is not installed, create a public repository named `navakanth-portfolio` at GitHub.com, then run:

```bash
git remote add origin https://github.com/navakanthboyina/navakanth-portfolio.git
git branch -M main
git push -u origin main
```

## GitHub Pages Setup

The workflow at `.github/workflows/deploy-pages.yml` runs on pushes to `main`.

It:

- Installs dependencies
- Runs ESLint
- Runs TypeScript checks
- Builds the static Next.js export
- Uploads the `out/` directory
- Deploys through GitHub Pages

In GitHub:

1. Go to repository Settings.
2. Open Pages.
3. Set Source to `GitHub Actions`.
4. Push to `main`.
5. Watch the `Deploy Portfolio to GitHub Pages` workflow complete.

With GitHub CLI, this can be enabled with:

```bash
gh api --method POST repos/navakanthboyina/navakanth-portfolio/pages -f build_type=workflow
```

If the command returns a conflict because Pages is already configured, use the repository Settings page and confirm Source is set to `GitHub Actions`.

The live portfolio URL is:

```text
https://navakanthboyina.github.io/navakanth-portfolio/
```

## Repository Name and Base Path

The repository name is configured in one place in `site.config.ts`:

```ts
export const repositoryName = "navakanth-portfolio";
```

`next.config.ts`, SEO metadata, manifest generation, sitemap generation, and profile data all use this shared value. You can also temporarily override it with `NEXT_PUBLIC_GITHUB_REPOSITORY_NAME`.

For local development, the site runs without a base path. For GitHub Pages builds, `GITHUB_PAGES=true` enables:

- `basePath: "/navakanth-portfolio"`
- `assetPrefix: "/navakanth-portfolio/"`

This keeps JavaScript, CSS, icons, and resume downloads working under the repository subpath.

## Personal Content Updates

Most editable content lives in `data/`:

- `data/profile.ts` - name, role, email, social links, resume path, SEO placeholders, repository name, portfolio URL
- `data/experience.ts` - editable professional experience timeline
- `data/projects.ts` - project cards and project detail content
- `data/skills.ts` - categorized technical skills
- `data/education.ts` - education entries
- `data/architecture.ts` - architecture diagram nodes

Search for `TODO:` comments to find placeholders that should be updated.

## Update Social Links

Edit `data/profile.ts`:

```ts
social: {
  github: "https://github.com/navakanthboyina",
  linkedin: "https://www.linkedin.com/in/navakanth-b-b26a29208/"
}
```

Update these if your social profile URLs change later.

## Replace the Resume

Replace:

```text
public/resume/Navakanth_Boyina_Resume.pdf
```

with your latest resume PDF. Keep the same file name unless you also update `resumePath` in `data/profile.ts`.

## Add a Professional Headshot

Add an image to `public/images/`, then update `data/profile.ts`:

```ts
headshotPath: "/images/navakanth-boyina-headshot.jpg"
```

If `headshotPath` is blank, the site falls back to a professional `NB` initials avatar.

## Update Experience

Edit `data/experience.ts` and replace the placeholder entry with actual:

- Company
- Job title
- Location
- Start date
- End date
- Summary
- Responsibilities
- Technologies

Do not add confidential client details unless they are safe to publish.

## Add Projects

Edit `data/projects.ts` and add a new object with:

- Business challenge
- Proposed solution
- My contribution
- Technical architecture
- Main features
- Technology stack
- Outcome
- Key technical decisions

Avoid client names, confidential information, financial savings, performance percentages, or metrics unless you can publish them.

## Custom Domain

An example file is included at:

```text
public/CNAME.example
```

To enable a custom domain later:

1. Rename `public/CNAME.example` to `public/CNAME`.
2. Put only your domain inside that file.
3. Configure the domain DNS records in your DNS provider.
4. Update `portfolioUrl`, `canonicalUrl`, sitemap, robots, and Open Graph image URLs.

Do not enable `public/CNAME` until the domain is ready.

## SEO Files

- Metadata and JSON-LD are configured in `app/layout.tsx`.
- Canonical URL and profile image URL placeholders are in `data/profile.ts`.
- `public/robots.txt` and `public/sitemap.xml` include GitHub Pages URL placeholders.
- `public/favicon.svg` and `public/icons/apple-touch-icon.svg` provide icon support.

## Troubleshooting GitHub Pages Asset Paths

If CSS or JavaScript loads locally but not on GitHub Pages:

- Confirm repository name is `navakanth-portfolio`.
- Confirm `site.config.ts` matches the repository name.
- Confirm the workflow builds with `GITHUB_PAGES=true`.
- Confirm Pages source is set to `GitHub Actions`.
- Confirm `.nojekyll` exists in the generated output.
- Re-run `pnpm build` with the same environment variables used in CI.

## Screenshot Placeholders

Add screenshots after deployment:

```text
public/images/screenshot-desktop.png
public/images/screenshot-mobile.png
```

Suggested README embeds after screenshots are added:

```md
![Desktop portfolio screenshot](public/images/screenshot-desktop.png)
![Mobile portfolio screenshot](public/images/screenshot-mobile.png)
```

## License

This portfolio is personal content for Navakanth Boyina. Keep it private or all rights reserved unless you choose to add an open-source license.

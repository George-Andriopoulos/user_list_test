# Next.js 15 SSR User List - Test Task

A simple user list page built with Next.js 15 (App Router) featuring SSR, Tailwind CSS, static data with images, SEO, and basic WCAG compliance, as per the test task requirements.

## Tech Stack

- Next.js 15 (App Router)
- React / TypeScript
- Tailwind CSS
- `next/font` (Geist Sans/Mono)
- `next/image`

## Running Locally

1.  **Clone:** `git clone <Your-GitHub-Repository-URL-Here>`
2.  **Navigate:** `cd <your-project-directory-name>`
3.  **Install:** `npm install` (or `yarn install` / `pnpm install`)
4.  **Place Images:** Ensure image files (e.g., `iron_man.png`) are in the `/public` directory.
5.  **Run:** `npm run dev` (or `yarn dev` / `pnpm dev`)
6.  **View:** Open [http://localhost:3000/users](http://localhost:3000/users)

## Implementation Notes

### SEO Optimization

- **Metadata:** Page-specific `<title>` and `<meta name="description">` tags are dynamically generated using the `metadata` export feature within the page component (`app/users/page.tsx`). Default metadata can be set in the root layout.
- **Crawlability:** Server-Side Rendering (SSR) via Next.js App Router ensures the page content (user list) is present in the initial HTML, making it easily crawlable by search engines.

### WCAG Compliance (Basic)

- **Semantic HTML:** Uses appropriate HTML elements like `<main>`, `<h1>`, `<ul>`, and `<li>` for structuring content, aiding assistive technologies. The `lang="en"` attribute is set on the `<html>` tag.
- **Image Accessibility:** Uses the `next/image` component with a dynamically generated `alt` attribute for each user image, providing context for screen readers.
- **Keyboard Navigation/Focus:** Relies on standard browser behavior for keyboard navigation. Tailwind CSS utilities help ensure visible focus states for interactive elements (if any were added beyond the basic list structure).

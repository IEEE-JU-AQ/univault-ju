# Contributing to UniVault

Thank you for your interest in contributing to **UniVault**! This project is open-source and student-led, built with support from the IEEE Student Branch at JU Aqaba and [JOSA](https://josa.ngo/) OpenLab. Every contribution helps preserve and organize academic resources for students.

## Setup

1. Fork & clone the repo:
   ```bash
   git clone https://github.com/<your-username>/univault.git
   cd univault
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the dev server:
   ```bash
   npm run dev
   ```

## Contributing

1. Create a branch (`feature/`, `fix/`, or `docs/` prefix):
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes in small, focused commits.
3. Ensure everything passes:
   ```bash
   npm run lint && npm run build
   ```
4. Open a PR against `main` with a clear description and reference any related issues.

## Code Style

- **TypeScript** — avoid `any` where possible.
- **Tailwind CSS** — avoid custom CSS unless necessary.
- **Functional components** with React hooks.
- Components: `PascalCase` — Utilities: `camelCase` exports — Types: `app/types/index.ts`.
- Run `npm run lint` before committing.

## Reporting Issues

Include: a clear title, steps to reproduce, expected vs. actual behavior, and screenshots/browser info if applicable.

---

Licensed under [MIT](LICENSE). Contributions fall under the same license.

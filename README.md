# Linkhaven (prototype, phase 1)

A static, clickable version of every Linkhaven screen. No server, no database. Forms do not save yet.

## Pages
index.html (home) | auth.html (sign up, log in, reset, confirmation) | onboarding.html (sign-up step 2)
dashboard.html, appearance.html, analytics.html, settings.html | profile-demo.html (3 themes)
legal.html (Terms, Privacy, Acceptable use, Report a page) | feedback-demo.html | states-demo.html | 404.html

## Put it online for free (no installs)
1. Create a free GitHub account, then a new PRIVATE repository called linkhaven.
2. In the repo, choose Add file > Upload files and drag in everything from this folder (keep the assets folder).
3. Create a free Cloudflare account > Workers & Pages > Create > Pages > Connect to Git > pick the repo.
4. Build command: leave empty. Build output directory: leave empty (or /). Deploy.
5. Your site appears at something like linkhaven.pages.dev. Send that link to testers.

The pages carry a noindex tag, so search engines will not list the site while you test.

## Next (phase 2)
Supabase for real sign-up and login, saving links, click tracking, and the public profile pages.

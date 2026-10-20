# Deployment guide

## Public production site

The current release uses the connected GitHub repository and automatic production deployments from `main`. The initial Drop release is retained below as deployment history.

## Initial deployment

- Live URL: https://nord-and-nest.vercel.app
- Dashboard: https://vercel.com/kreatorrdev/nord-and-nest
- Project: `nord-and-nest`
- Account/team: `kreatorrdev` (Hobby)
- Deployment: `dpl_GkF9WEqoBGe4EVWP6RDEe2zVXxvR`
- Deployment URL: https://nord-and-nest-8eyo8zk5f-kreatorrdev.vercel.app
- Method: Vercel Drop, uploaded source ZIP, detected Next.js framework.
- Result: Ready; public access and key routes verified on 19 October 2026.

The source upload is saved at `artifacts/nord-and-nest-vercel.zip`. It excludes local dependencies, caches, Git history, Sites metadata and credentials. Vercel builds the source using the project's existing Next.js scripts and static export configuration.

## Updating the site

The source is stored in the private repository at https://github.com/kreatorrdev/nord-and-nest. The repository is connected to the existing Vercel project. Push changes to `main` to start an automatic production build and deployment, then check the deployment status in the Vercel dashboard. The public domain remains https://nord-and-nest.vercel.app.

Use `npm ci`, `npm test`, `npm run typecheck` and `npm run build` to verify application changes before publishing them. No database or application secrets are required for this demo.

## GitHub integration

- Repository: https://github.com/kreatorrdev/nord-and-nest (private).
- Default branch: `main`.
- Production branch: `main`, with automatic domain assignment enabled.
- Integration: connected to the existing `nord-and-nest` Vercel project.
- Source includes the application, generated imagery, English documentation and portfolio screenshots.
- Dependencies, build output, local hosting metadata and credentials are excluded from the repository.

### Verified automatic deployment

On 20 October 2026, commit `827d028188827ea952da1b0d0f526ea0003a7dca` triggered a production deployment through the GitHub integration. Vercel reported Ready and GitHub's Vercel commit status reported success. The deployment was assigned to the existing public domain.

- Deployment: `dpl_Ea3a1LptsHxoeCKr5JLWNbm52Czq`.
- Dashboard: https://vercel.com/kreatorrdev/nord-and-nest/Ea3a1LptsHxoeCKr5JLWNbm52Czq.

## Site metadata

`metadataBase` uses `NEXT_PUBLIC_SITE_URL` if supplied, otherwise Vercel's `VERCEL_PROJECT_PRODUCTION_URL`; the private Sites origin remains the fallback for the original hosting workflow. The public Open Graph URL was verified after deployment.

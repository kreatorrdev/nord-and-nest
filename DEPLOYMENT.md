# Deployment guide

## Public production site

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

To update the existing production project, upload the refreshed source package on its Vercel project overview. The project can also be updated through Vercel CLI after signing in.

## GitHub integration status

The initial production deployment was made through Vercel Drop. A GitHub repository has not yet been connected, so pushes do not currently trigger automatic deployments. The next release task is to publish the prepared source to a repository and connect its `main` branch to the existing Vercel project.

## Site metadata

`metadataBase` uses `NEXT_PUBLIC_SITE_URL` if supplied, otherwise Vercel's `VERCEL_PROJECT_PRODUCTION_URL`; the private Sites origin remains the fallback for the original hosting workflow. The public Open Graph URL was verified after deployment.

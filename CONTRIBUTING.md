# Contributing to Nord & Nest

Project documentation and contribution descriptions are maintained in English. Literal interface labels, identifiers and recorded output may retain their original language when needed for accuracy.

## Set up a working copy

Install the locked dependencies with `npm ci`, then run `npm run dev`. Follow the Node.js requirement in the [README](README.md).

Run project commands from the repository root.

## Make and validate a change

1. Create a focused branch from the current default branch and read the relevant specification and current status.
2. Make the change and update the affected English documentation.
3. For application changes, run the applicable checks below and inspect the affected experience.
4. Review the diff and open a pull request describing the problem, resulting behavior and checks actually performed. For documentation-only changes, verify links, paths and commands; a full application build is needed only if the change affects it.

~~~sh
npm test
npm run typecheck
npm run build
~~~

Exercise combined catalog filters and sorting, product options, bag quantities and totals, wishlist persistence, empty states and valid/invalid demo checkout. Check keyboard dialogs, mobile layouts and reduced motion.

## Content and configuration

Record image provenance and font information in [ASSETS.md](ASSETS.md). Keep products, prices and checkout explicitly fictional.

Use your own local configuration. Commit configuration templates with placeholders; keep real credentials, runtime databases, personal records and generated build caches out of Git. Do not add a license or claim redistribution rights for third-party material without the owner's decision.

## Release notes

The build exports to `out/`. Use `npm run preview` after building. See [deployment](DEPLOYMENT.md).

Report dated verification honestly. Existing historical PASS records describe their recorded environment and do not establish that a new checkout or deployment has passed the same checks.

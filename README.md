# Gothos Labs

Company website for medical solutions with a thoughtful touch of AI. Arogya ELogBook is featured as the flagship product.

## Run locally

Requires Node.js 18 or later. There are no dependencies to install and no build step.

```sh
git clone https://github.com/x3O8/Gothos-labs.git
cd Gothos-labs
npm run dev
```

Open http://127.0.0.1:4177/. Set the PORT environment variable to use another port. The server binds to the local machine.

## Website

- Dark/lime company design with a large Gothos Labs footer wordmark.
- A tilted, frosted-glass ELogBook preview with six navigable screens and an expanded view.
- GhostFibers WebGL2 background with scroll rotation, mouse interaction, and click pulses.
- Staggered scroll entrances, keyboard support, pause, reduced motion, and a static background fallback.
- Locally bundled fonts; no CDN or external asset requests.
- An enquiry form that downloads a brief locally. It does not send messages or store submissions.

## Source layout

- index.html: company content, product preview, SVG symbols, and dialogs.
- styles.css: marketing layout and scroll-reveal styles.
- product-preview.css: glass interface, responsive styles, and footer wordmark.
- site.js: product tabs, navigation, dialogs, enquiries, and motion controls.
- ghost-fibers.js: static-site adaptation of the supplied GhostFibers renderer.
- server.mjs: dependency-free local static server.
- fonts/ and licenses/: bundled Manrope/Open Sauce One fonts and source notices.
- reference-source/: original supplied GhostFibers component/CSS, retained for attribution; these files are not loaded at runtime.

PRODUCT.md, DESIGN.md, and REFERENCE.md describe the product context, presentation, and references.

## Product preview and enquiries

The ELogBook interface is an illustrative dark interpretation of the product layout. It does not authenticate or load resident/patient records, and it shows no invented training totals. Product availability can depend on department configuration.

The enquiry flow prepares a text file on the visitor's device. An approved contact destination and delivery integration are needed for actual message submission.

## Validation

JavaScript syntax and local asset references were checked before publication. Browser/GPU visual verification remains outstanding because the available browser automation could not complete startup. Existing controller simulation checks do not establish a browser render pass.

This repository contains only the independent Gothos Labs website, without Electronic-LogBook application code, databases, local reference videos, temporary profiles, or generated offline bundles.

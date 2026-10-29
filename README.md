# Gothos Labs

Buildless marketing website for Gothos Labs, Arogya ELogBook and Arogya Health Assistant.

## Run locally

Requires Node.js 18 or later. No dependency install or build step.

```sh
npm run dev
```

Open http://127.0.0.1:4177/. The existing server binds to loopback only. PORT can select another local port.

## Website

Five flight stops: hero, company/ELogBook, dark assistant showcase, light enquiry section and footer. A dimensional, feathered owl matching the reference video guides native scrolling and crossfades into the original company mark in the footer. The site uses cream, sage and forest-green tokens and locally bundled Poppins 300/400/500/600/700/800.

ELogBook retains its original six illustrative screens, keyboard tabs and shared expanded dialog. Empty states are intentional: no authenticated, resident or patient records are loaded.

Hoot is the website guide, separate from both products. With an empty endpoint it uses local scripted company replies, refuses medical questions and prepares demo enquiry text files. It never confirms a booking or claims a message was sent. Inputs stay in memory, are rendered as text and are cleared when Hoot closes. Only the motion-pause preference uses sessionStorage.

## Source layout

- index.html: five sections, native dialogs, preserved preview and inline named SVG owl rig.
- styles.css: page tokens, local font declarations, responsive sections, leaves and reveals.
- product-preview.css: light frosted-glass ELogBook interface.
- site.js: shared motion state, dialogs, preview tabs, local brief download and assistant configuration.
- owl.js: one shared requestAnimationFrame scheduler, real section-offset progress, direction-aware flight, pupil/blink state and reversible logo landing.
- chat.js / owl-chat.css: Hoot interactions, conversation state and presentation.
- assets/logo/gothos-owl.svg: flat source-derived company mark for navigation and the final lockup.
- assets/owl/hoot-body.png and hoot-wing.png: local transparent 3D-rendered character components.
- fonts/ and licenses/: local assets and original licenses; Poppins has its own SIL OFL file.
- reference-source/: original GhostFibers sources and archived buildless adapter. None is loaded at runtime.
- server.mjs: unchanged dependency-free local server.

## Assistant configuration

Arogya Health Assistant is a separately maintained product in https://github.com/Gotham28/hospital-ai-platform. This site does not copy its code, call its backend, or contain credentials.

The single SITE_CONFIG block in site.js controls assistantUrl, assistantFrameAllowed and assistantVoiceVerified. assistantUrl is empty: no dedicated public demo was established, and the button reads “Live demo coming soon”. The accessible named tenant found in planning is not presented as a demo or endorsement.

For a genuine configured demo, verify its public route and current frame policy first. If framing is blocked, set assistantFrameAllowed false and use the new-tab path; changing that product's frame-ancestors policy is separate work in its own repository. The conditional dialog always includes a new-tab link, the personal-health-information notice and the supplied medical disclaimer. Its iframe is created only on activation and removed on close. Microphone delegation is added only when assistantVoiceVerified is true; actual browser permission is still necessary. No embedded voice interaction has been validated here.

CHAT_ENDPOINT in chat.js is deliberately empty. A future approved endpoint can accept POST {messages} and return {reply}, but activation requires separate review of privacy, medical-routing and server-side boundaries. Never place provider keys in browser code.

## Honest local enquiries

The form and Hoot share a Blob text-download helper. Nothing is delivered or stored server-side, and no booking is made. No contact address or delivery destination has been invented. Use synthetic data for verification.

## Motion and accessibility

Native scrolling, native modal dialogs, labelled buttons, focus return/trapping, roving preview tabs, one-time reveals, pause control and prefers-reduced-motion support. The assistant illustration plays once on entry then rests. Background-tab animation work pauses. In reduced motion, the owl changes positions without a flight path and the illustrative conversation is static.

## Verification

Fresh commands, browser results, screenshots and limitations belong in HANDOFF.md. Syntax checks use node --check; the isolated browser harness and screenshots are verification tooling outside this repository, with no package dependency added to the site. Source evidence is not a clinical or production-chat validation.

Open items: final assistant product name, dedicated demo URL, real embedding/microphone verification, and any later enquiry-delivery integration. No deployment/domain work is included.



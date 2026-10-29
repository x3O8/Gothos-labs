# Current Task

## Feature
- Redesign the existing Gothos Labs marketing site around the supplied green-and-white identity with a realistic dimensional owl mascot, retaining ELogBook and adding the evidence-based Arogya Health Assistant showcase and Hoot website guide as one coherent website experience.

## Plan reference
- docs/MASTER_PLAN.md §3 — Pending owl redesign.
- STATUS.md Last updated: 2026-10-28; bootstrap accepted and closed locally.
- Baseline: 9a617a1d0b3597d1193fc822b5a75e7519ab9eac; bootstrap implementation commit 5d6303a3a9171215e5407371b81783edcc4ae554.
- Current branch: bootstrap/import-governance; execution may create a local feature branch from this baseline without checkout of another existing branch or discarding changes.
- Existing 18 text-file status flags are disclosed line-ending/stat behavior: do not overwrite unrelated work or treat flags alone as edits. Verify source bytes/content before execution.

## MASTER_PLAN.md update
- None — this task matches §3. Do not rewrite the roadmap or append §9 during execution.

## Inputs and precedence
- Main brief: C:\Users\aravi\.codex\attachments\fb565a28-4823-4df4-9801-dfadb4e6780c\Pasted text.txt.
- Addendum A: C:\Users\aravi\.codex\attachments\1617138a-da68-4f72-9d58-958b44715b8f\Pasted text.txt.
- Identical duplicate addendum: C:\Users\aravi\.codex\attachments\3efcf6a1-9cfa-456b-a5fc-105d087ce220\Pasted text.txt.
- Logo reference: C:\Users\aravi\AppData\Local\Temp\codex-clipboard-187d018e-f786-4398-a5ed-b783b29c99e4.png.
- Motion reference: C:\Users\aravi\Downloads\gemini_generated_video_8bb59343.mp4.
- Addendum A overrides main brief conflicts. Preserve supplied exact approved copy and medical disclaimers.
- Reference image contains green gradients and a presentation caption: preserve owl silhouette and brand identity in flat vector artwork, omitting the presentation caption.
- No redesign implementation has been written in this planning stage.

## Files/areas in scope
- index.html — replace layout/copy with hero, 01 company/ELogBook, 02 assistant (dark, #assistant), 03 Build with Gothos/enquiry (light, #access), footer (#contact); final identical navigation; accessible native controls/dialogs; named inline SVG rig.
- styles.css — supplied palette, Poppins typography, layout, section theme, leaves, reveals and responsive treatment.
- product-preview.css — light frosted-glass restyle preserving preview content and controls.
- site.js — preserve/coordinate keyboard, motion, reveals and dialogs; reusable local enquiry helper; SITE_CONFIG assistant URL and conditional demo behavior; remove dead handlers after old sections disappear.
- owl.js (new) — SVG rig, shared animation scheduler, direction-aware scroll flight, pupil/blink behavior, footer logo transition and chat positioning.
- chat.js (new) — accessible Hoot guide, scripted fallback and optional empty CHAT_ENDPOINT seam; shared brief-download flow; no medical advice.
- owl-chat.css (new) — owl/chat presentation and accessible responsive bottom sheet.
- assets/logo/gothos-owl.svg (new) — clean flat owl/brand artwork derived from supplied reference, compatible with inline rig; no animated raster.
- fonts/poppins-*.woff2 and licenses/Poppins-OFL.txt (new) — locally bundled weights 300/400/500/600/700/800 and actual upstream SIL OFL text. Read-only download from primary font source permitted; no runtime font CDN or npm dependency.
- ghost-fibers.js -> reference-source/ghost-fibers.js — archive renderer, retain attribution and existing reference-source originals; remove runtime imports/canvas/hooks.
- README.md, PRODUCT.md, DESIGN.md, REFERENCE.md — update runtime/design descriptions, source evidence, configuration and honest limitations; preserve existing evidence provenance.
- .agents/CURRENT_TASK.md — portable approved scope and execution/paused state.
- HANDOFF.md — replace bootstrap execution report with redesign evidence; bootstrap report remains available in commit 5d6303a.
- docs/STATUS.md — draft later status wording in HANDOFF only; apply only at separately approved close-out.

## Explicitly out of scope
- Reimplementing or modifying hospital-ai-platform, copying its implementation, or changing its security/header configuration.
- New backend, dependencies/frameworks/bundler, analytics, message delivery, real bookings, authentication or clinical advice.
- Activating an AI provider or CHAT_ENDPOINT, introducing credentials, or choosing a production contact address.
- Publishing, DNS/domain changes, commits/push/PR/merge during execution.
- New unverified products, testimonials, pricing, hospital/customer endorsements or clinical/certification claims.

## Do NOT touch
- server.mjs, package.json scripts, dependency-free local-server behavior and existing original license texts.
- .agents/AGENTS.md, OS permissions, hooks, sandbox configuration and persistent Git trust/configuration.
- Other repositories, .env, credentials, seed data, or PROJECT_NOTES.md login details; no login or backend execution.
- Source logo/video/brief attachments; never commit the video or temporary analysis frames.
- Existing preview processes unrelated to the execution run.
- ELogBook factual capabilities and its six-screen dataset; no patient/resident identifiers or invented totals.

## Execution route
- B — Codex loop.
- Why: visual/motion/accessibility work needs iterative browser verification and judgment.
- Close-out: route B, separately authorized after accepted independent review; local-only unless a later task explicitly authorizes publication.

## Manual (developer does)
- Approve this exact scope and the conflict resolutions below.
- Decide final product name later; use Arogya Health Assistant consistently as the explicitly supplied working name.
- Supply a dedicated public demo URL later if desired; absence does not block the disabled demo state.
- Accept or send back independent review; authorize later close-out and exact status wording.

## Agent (does on its own, once scope is confirmed)
- Re-read all supplied inputs, existing source and product evidence; inspect the video in a supported viewer and record any playback limitation honestly.
- Preserve server/scripts, all six ELogBook screens/keyboard behavior, shared expanded preview, local brief downloads, one-time reveals and motion controls.
- Apply green/white design with exact main/addendum copy, corrected section/navigation order, Poppins and light glass dialogs/form/preview.
- Build native-button owl rig and accessible Hoot; rename the existing SVG symbol id=owl to avoid duplicate IDs.
- Use one coordinated requestAnimationFrame scheduler for JS motion; pause work when hidden, offscreen as appropriate, paused or reduced-motion.
- Implement real-section-top progress with measurements after fonts/resize/content reflow; ensure footer top is scroll-reachable and transformation fully reversible.
- Implement assistant illustrative preview once on section entry, then resting; static with paused/reduced motion.
- Use only verified assistant feature chips and administrative sample topics; clearly label illustrative preview and include supplied disclaimers.
- Default SITE_CONFIG.assistantUrl to empty because no dedicated public demo was verified; button disabled with Live demo coming soon.
- Build the conditional accessible demo dialog/new-tab fallback code for a later genuine configured URL, without issuing remote requests while empty. Never call the assistant backend directly.
- If a dedicated public demo is subsequently supplied within approved scope, verify URL and current frame policy before enabling; do not substitute the existing named tenant automatically.
- Keep CHAT_ENDPOINT empty. Hoot is a local website guide; collect demo name/email only in memory and reuse honest local brief download, with no persistence/logging/analytics.
- Route medical questions to the exact refusal before demo-intent handling, including during name/email collection; never forward medical input to an endpoint or live assistant.
- Update scoped docs with source-backed capability evidence and verification limits; write evidence-bearing HANDOFF and later status draft.
- Run four independent read-only review lenses and stop for developer acceptance; no automatic acceptance or close-out.

## Blocked on developer input
- Independent four-lens review completed 2026-10-28: verdict reject; decision send back. Await developer confirmation of fix-only round before further implementation or close-out. Critical: chat.js:75–85 accepts unrecognized health statements as contact names and includes them in local briefs; related medical/product routing bypass at :89. Major: mobile ELogBook inner clipping and incomplete legibility evidence (product-preview.css:4; HANDOFF.md:147/238). Major: site.js:4 microphone delegation flag defaults true despite live verification not performed; URL is empty, so none active. No remote transmission observed.
- Complete review and fix-only prompt: C:\Users\aravi\.codex\visualizations\2026\10\26\01a17990-0bda-7f40-89d2-8e001e3f7688\gothos-redesign-review.md.
- No other work, staging, commit, push, PR, STATUS write, cleanup or MASTER_PLAN append until Critical closure and fresh four-lens re-review. Keep current dimensional owl and layout. Next Order step is fix-only verification/re-review after developer decision, not close-out.
- Final assistant name and dedicated public demo URL are deferred open items, not permission to guess.

## Order
### Steps inside this task
1. Obtain explicit scope approval; record the requested same-chat execution exception below.
2. Recheck baseline/source/assets and inspect motion reference; acquire licensed local Poppins assets and establish scoped feature branch safely.
3. Implement layout, vector artwork, shared motion state/scheduler and preserved preview/form behavior.
4. Implement Hoot and assistant showcase with disabled real-demo default, then docs.
5. Verify desktop and 390px behavior, keyboard/reduced motion, flight direction/reversal and honest downloads; fix in-scope failures.
6. Write HANDOFF, run independent review, stop for developer acceptance.

### Where this task sits
- Before this: bootstrap closed locally, all original website files unchanged.
- After this: accepted review and separately authorized local close-out; public deployment/domain work is a separate task.

## Conflict resolutions included in scope approval
- Desktop x=-.52 would put the owl center outside the viewport: use supplied composition/keyframe targets but clamp visual bounds to a viewport safe area; verify actual wing/body bounds.
- Appearance amendment supersedes the old flat-only rule: use realistic dimensional character artwork matching the video for flight/chat, with the original flat company mark retained at the logo landing.
- Use a real button for the interactive owl, resolving the earlier div-role-button vs native-button conflict.
- Prefer static blur/masks with transform/opacity reveal animation instead of animating clip-path, blur or layout. Use transform/opacity letter reveals rather than animated letter-spacing if it causes layout work.
- Allow section content to grow on short desktop screens as well as mobile; preserve hierarchy, disclaimers, form and footer reachability rather than clipping at a forced viewport height.
- The assistant preview plays once then rests; do not loop it indefinitely.
- External-request prohibition has only the user-requested configured assistant iframe/new-tab and optional Hoot endpoint exceptions; both remain empty/inactive by default. Fonts/assets stay local.
- Retire handlers for removed old navigation/roles sections instead of retaining null-reference failures. Shared enquiry helper and motion-state/scheduler coordination are explicitly authorized refactors.
- Clinical disclaimer/refusal wording is already supplied by the developer; preserve it exactly, adding no clinical claims.

## Verification required before this is considered done
- Run node --check for every runtime .js file, archived .js file and server.mjs; paste exact commands/output and file list.
- Validate all HTML/CSS/JS local asset paths, fragment anchors, unique SVG/HTML IDs, font files/license, and no runtime GhostFibers or unintended external asset requests.
- Run npm run dev and verify loopback serving; leave unrelated processes running. Record actual port/session.
- In a real browser at desktop (e.g. 1440x900 plus short-height laptop) and 390px width, capture actual screenshots and inspect every section for overflow, contrast, legibility and mascot/text interference.
- Scroll down/up across all five sections: section-top progress, flight direction/pitch, wing unfurl/fold, visible safe bounds, dark-nav state, pupil target, footer logo completion/reversal and no scroll-jacking.
- Check normal, pause, reduced-motion and hidden-tab behavior for owl, trails, reveals, leaves, chat sequence and assistant preview; preview plays only once.
- Exercise all six preview screens, keyboard tab navigation/Arrow/Home/End, expanded dialog restoration, buttons, native focus trap/Esc/focus return and mobile nav access.
- Exercise Hoot from owl/nav/pills/dock/footer, chips and free text, support/fallback, Arogya explanation, medical refusal during every conversation state, demo name/email validation, actual local brief download, close/reopen and input rendered as text rather than HTML.
- Inspect downloaded enquiry/Hoot briefs for expected synthetic test data and honest not-sent wording; no real patient or sensitive data.
- Empty assistantUrl: disabled Live demo coming soon everywhere, no iframe/network activity, notices/disclaimers visible in section and preview; do not claim live demo works.
- Conditional configured dialog/focus trap/Esc/new-tab behavior may be checked using a temporary same-origin non-clinical fixture outside committed source; report it as synthetic UI verification only, never a live assistant or microphone/embedding pass.
- Report actual assistant capabilities by source, omitted claims, working-name status, absent dedicated demo, point-in-time headers, and unperformed live embedding/voice checks.
- Record baseline/HEAD/file inventory, scoped changes, exact commands, fresh outputs and files touched in HANDOFF; four independent lenses at the scoped assurance level. No execution commit, push or PR.

## Flags (AGENTS.md rule triggers)
- §5.1/§5.6: no credentials or real clinical data, no chat analytics/logging/persistence, public-demo notice.
- §5.2/§5.5: code-backed configurable assistant facts only; source implementation is not end-to-end validation; exact supplied medical disclaimer/refusal.
- §5.3: modular motion/dialog/enquiry integration refactors are scoped; no dependency or architecture change.
- §5.4/§9: local preview only; no deployment/domain or external writes.
- §5.7: hospital repo inspection is read-only and evidence-only; no copied code or prohibited data.
- §5.8: one integrated marketing-site redesign; actual product/backend changes are excluded.
- §5.9/§5.10: local browser evidence at two widths plus short-height layout, motion and conversation scenarios required.
- High-risk triggers: substantive chatbot routing and separate-product embedding boundary; preserve High assurance review.

## Suggested review tier (set at scoping time)
- High assurance / high effort — cross-repository showcase boundary, chat medical-routing refusal, input handling and accessibility/motion interactions.
- Runtime model/effort controls are unknown; no setting switch is claimed.

## Executor
- Codex direct.
- Why: ongoing visual, motion, conversation and browser verification is necessary; code volume alone does not justify Antigravity.
- Antigravity model: n/a.
- Developer explicitly asked to continue in this chat because the reference video and logo are attached here. Approval of this scope carries that same-chat execution exception; approval/review/close-out requirements and actual sandbox restrictions remain unchanged.

## Approval
- Status: APPROVED 2026-10-28 — developer said proceed; includes conflict resolutions and explicit same-chat execution exception. Executor: Codex direct.

## Read-only assistant evidence collected during planning
- Source repository: https://github.com/Gotham28/hospital-ai-platform
- Inspected source SHA: f0f7b013bd11ad7544d3bed8bc52cbe74c46dcd1.
- Public deployment listed by repository metadata: https://hospital-ai-platform.vercel.app
- Public route /p/:hospitalSlug: frontend/src/App.tsx:250; canonical named-tenant redirect frontend/src/pages/IrisPage.tsx:4.
- No dedicated public demo tenant established. Named public hospital tenant lookup returned 200, but do not market it as a demo or customer endorsement.
- English/Malayalam: frontend/src/themes/iris-hospitals/Chat.tsx:141 and backend/app/api/v1/endpoints/ai.py:425.
- Voice input/VAD: frontend/src/hooks/useHospitalChat.tsx:203; STT paths backend/app/api/v1/endpoints/ai.py:1101.
- Hospital branding: frontend/src/themes/registry.ts:3 and frontend/src/themes/ThemeLoader.tsx:7.
- Hospital knowledge: backend/app/api/v1/endpoints/ai.py:296 and :686.
- Doctor availability, hospital details and lab information: backend/app/api/v1/endpoints/ai.py:187.
- Appointment requests, not guaranteed confirmed appointments: backend/app/api/v1/endpoints/ai.py:937 and :1026.
- Feature evidence is code implementation, not completed production chat/voice tests. No clinical/diagnostic/treatment/voice-output/WhatsApp advertising.
- 2026-10-28 HEAD responses for public root and canonical named-tenant page: 200, no observed X-Frame-Options, CSP or Permissions-Policy headers. Absence is not proof of working embedding or delegated microphone access.
- frontend/vercel.json:1 contains SPA rewrites; backend/app/main.py:44 contains CORS, not frame policy assurance.
- Legacy components/iris/chat-bot-ui.tsx has a hardcoded different hospital ID and Web Speech implementation; canonical themed route uses ChatCore/useHospitalChat. Do not copy tenant IDs.
- frontend/vite.config.js:3 documents a VAD dev-server caveat; its production-success comment is not our runtime test.
- No .env, credentials, seed data or PROJECT_NOTES.md details were read; no login, backend execution, chat submission or microphone activation.

## Reference inspection status
- Supplied logo was visually inspected: asymmetric layered leaf owl, tall ear tufts, light negative-space face and dark round eyes; final artwork should flatten gradients and omit the presentation caption.
- Motion video (40 seconds, 1280x720) was inspected at six representative frames. A full-resolution 7.6-second frame informed the new body render; continuous frame-perfect matching is not claimed.



## Approved appearance amendment — 2026-10-28
- Developer explicitly changed the owl requirement: it may be 3D, must look realistic and may match the supplied reference video exactly. This overrides earlier flat-only/no-shading requirements for the animated mascot.
- Preserve the current five-section layout, scroll/wing/blink/gaze behavior, Hoot boundaries, ELogBook, accessibility and local-only enquiry behavior.
- Additional files in scope: assets/owl/hoot-body.png and assets/owl/hoot-wing.png (transparent, locally bundled dimensional character components), plus existing index.html, owl.js, owl-chat.css, README.md, PRODUCT.md, DESIGN.md, REFERENCE.md and HANDOFF.md for integration/evidence.
- Use the reference video's rounded, layered-feather owl rather than a wildlife photograph. Keep the original flat company mark for navigation and the final logo lockup; the flying/chat mascot may crossfade from dimensional artwork into that mark.
- This amendment is approved by the developer's direct steering in this chat; same-chat execution exception remains in force. No deployment, new runtime dependency or external AI endpoint activation is added.
- Execution state: dimensional body/wing assets integrated; seven current-turn static/browser/conversation/motion/visual/keyboard logs and root HANDOFF completed. Four independent read-only review lenses and developer acceptance are pending. Branch: feature/owl-redesign; baseline/HEAD: 9a617a1d0b3597d1193fc822b5a75e7519ab9eac. No execution commit, staging, push, PR or deployment. A previous automatic approval service call failed due usage limit; the same supported escalation succeeded after its retry time. No guard or permission bypass occurred. STATUS.md and MASTER_PLAN.md remain unchanged; status wording is drafted in HANDOFF only.



## Review state — 2026-10-28
- Four fresh read-only Scope/Rules/Evidence/Blast-radius lenses finished at High assurance; coordinator received findings only. Snapshot hashes and HEAD matched after review; no staged files. Findings and complete fix-only prompt saved in external review path above. Seven supplied harness logs are credible for tested scenarios, but do not establish universal medical routing or complete mobile preview readability. No implementation fix was made during review.
- Local preview http://127.0.0.1:4177/ refreshed in the in-app browser and retained as deliverable. 3D body/wing artwork remains integrated. STATUS/MASTER_PLAN unchanged; HANDOFF status draft not approved/applied. Review outcome: reject / send back; developer decision pending.

## Approved WIP checkpoint publication — 2026-10-28
- Developer explicitly requested “push in git hub, for now” after the rejected review. Publish the present scoped work as an unaccepted work-in-progress checkpoint to origin (https://github.com/x3O8/Gothos-labs.git), branch feature/owl-redesign. This narrowly overrides earlier no-commit/no-push execution restrictions for this checkpoint only.
- Authorized operations: update this portable task/HANDOFF publication note, stage only named scoped files, create a truthful WIP commit, and push this feature branch without force. No PR, merge, main push, deployment, DNS change, STATUS update or task cleanup. This is not accepted close-out and does not waive/fix any review finding.
- Critical medical-intake/local-brief issue, mobile preview clipping and default microphone flag remain open. Implementation remains frozen; next task work remains the fix-only round plus same-assurance four-lens re-review, awaiting developer direction. Source hashes other than portable task state matched the frozen review snapshot before this checkpoint.

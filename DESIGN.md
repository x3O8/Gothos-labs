# Gothos Labs design

## Design read

A spacious product-studio marketing site for teams and hospital buyers: a custom cream/sage/forest identity, with dimensional owl storytelling and a flat company-logo landing. Design variance 6, motion intensity 7 when enabled, visual density 3. The supplied layout, dark assistant section and latest 3D mascot instruction override general design-skill defaults.

## Composition

Five full-viewport flight stops with growing content where needed:
1. Hero: masked two-line headline, sage shape, owl and short supporting copy.
2. Section 01: pale numeral and owl on the left; company story and compact ELogBook invitation on the right.
3. Section 02: dark-green gradient, translucent numeral, drifting leaves, verified assistant copy and clearly illustrative light chat preview.
4. Section 03: light “Build with Gothos” and honest local enquiry form.
5. Footer: invitation, reversible owl-to-logo lockup, simple supplied anchors and motion control.

Navigation is consistent across sections. The dark section changes navigation colour at the header's viewport position. Mobile navigation remains accessible through an expanded menu.

## Tokens and typography

Background #F7F6F1, sage #DDE9DF, emerald #2F8F5B, forest #1E5B3F, deep #123D2B, ink #14231B and muted #4A5F53. Locally bundled Poppins weights 300–800 use font-display:swap and upstream SIL OFL licensing. Existing unused font assets/licenses remain for provenance; their old font-face rules are removed.

Native controls, pill CTAs, one glass language for product previews/dialogs, generous space and soft sage shapes. No photos, flowers, invented logos or social links.

## Owl and motion

The named inline SVG rig composites locally bundled, transparent 3D-rendered body and wing artwork generated from the video reference. Clipped copies of the same body image keep the glossy pupils responsive; shaded lids blink. The wing component is mirrored, hinged and eased into spread/fold poses behind the body. The dimensional character and trails crossfade into the original flat mark for the footer lockup. The shadow stays separate. This preserves the buildless stack and adds no rendering library or runtime service. Wing-aware viewport bounds account for the wider silhouette.

owl.js owns one coordinated requestAnimationFrame loop. It combines actual measured section-top progress, eased holds/transitions, lag, scroll-direction swoop, pitch, wings, cursor/touch gaze, blink, shadow, trails and parallax. JS conversation timing registers with that scheduler instead of adding another loop. Measurements refresh on resize, fonts and content size changes. Hidden-tab work pauses.

The literal x=-.52 keyframe would put the centre offscreen. Flight targets preserve the intended composition but clamp visual bounds within the viewport. Footer minimum height ensures the last top is reachable and the logo transition can complete.

Animation uses transforms and opacity with static blur/masks. Letter reveals replace animated letter-spacing; chat uses scale/opacity rather than animated clipping. Reduced-motion/paused states remove flight, trails, flapping and parallax and show the assistant conversation statically.

## Product interactions

The original six-screen preview moves into one native dialog and returns to its hidden home on close. Keyboard tabs, empty states and focus return are preserved. The assistant illustration is an administrative example and plays once, then rests.

Hoot's native modal moves the interactive owl into the modal layer, flies it to the panel and restores it on close. At 390px it becomes a bottom sheet. Native focus trapping is reinforced for keyboard edges, Esc closes, and labelled controls have visible focus rings.

## Reference inspection

The supplied 40-second 1280x720 video was inspected through six actual frames at 0.05, 7.6, 15.2, 22.8, 30.4 and 38.4 seconds using a temporary loopback-only viewer. This establishes representative composition/poses, not frame-perfect continuous-motion matching.

Retained reference signals: cream/sage background, large pale numerals, wing spread/fold, curved motion, dark leaves and the chat dock. Ignored: browser chrome, garbled text, inconsistent navigation/section labels, phone flash, unsupported buttons and unsupported page artifacts. The reference video and inspection tooling are not site assets.

## Verification

See HANDOFF.md for actual screenshots, functional results and limitations. Visual verification is at desktop, a short laptop viewport and 390px; full-motion, pause and reduced-motion states must be reported separately. A configured synthetic iframe check is not a live assistant or microphone validation.


## Approved appearance change

The developer explicitly requested a realistic 3D look matching the video after the flat implementation. This overrides the earlier instruction to ignore the video's dimensional owl shading. Body and wing assets use the built-in image generation tool, remain local and preserve transparent alpha. No provider key, runtime dependency or live endpoint is introduced.



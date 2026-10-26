# Gothos Labs design

The reference video's fixed navigation, split hero, black/lime palette, italic display accents, section order, and large lime statement panel remain the visual framework. The company hero now introduces medical solutions and a thoughtful use of AI, with ELogBook clearly identified as a flagship product rather than the whole company.

## Hero: the product itself

The right-hand hero now shows ELogBook's resident workspace in dark mode. The design is grounded in the application's sidebar structure, resident dashboard, profile panel, training insights, category links, and recent-entry area. Use zinc backgrounds derived from the source dark theme, teal clinical accents, and the application's Open Sauce One font. It is a coded interface preview with no personal records, not an authenticated app embed. The window now uses a translucent dark glass surface, 20px backdrop blur, brighter edge reflections, and translucent interior panels so the fibers diffuse through the UI. An opaque fallback remains when backdrop filtering is unavailable.

The hero screen has a static perspective tilt of -6 degrees around its Y axis and 1 degree around X, echoing the initial reference shot. Phones use a gentler -3-degree Y tilt; the expanded dialog stays flat for reading and interaction.

Six sidebar tabs switch the preview; dashboard category controls open their corresponding screens. The expand control moves the same interface into a larger native dialog and restores it on close. Sidebar navigation supports arrow keys, Home, and End. Small screens collapse the sidebar to icons while preserving accessible names. No invented totals or clinical examples are shown.

## GhostFibers background

Use the complete GhostFibers shaders supplied in Pasted text.txt. Preserve instanced dotted fibers, three twisting ribbons, five-level bloom, depth-of-field blur, mouse interaction, particles, and click pulses. Colors are configured to lime, pale green, and teal to match the site.

The plain JavaScript adapter removes the React lifecycle while retaining the supplied renderer. It adds the site's pause control, live reduced-motion preference updates, context-loss fallback/restoration, a 30fps target, a 1920px render limit, and DPR capped at 1.25. Phones use fewer threads and lower density. Rendering stops when the document is hidden. Static muted color fields remain if WebGL2 is unavailable. Text stays visible without JavaScript.

Page scroll drives a smooth 144-degree rotation of the ribbon geometry across the full page, with 0.38-second exponential smoothing. Mouse movement gives the scene stronger yaw and pitch and parts the fibers near the pointer. Background clicks create light pulses; clicks on controls are ignored. Touch scrolling does not drive the mouse camera. Pause and reduced motion hold the scroll rotation still, and resume picks up the current page position.

## Product language

Lead with postgraduate training: clinical work, academic activities, faculty verification, departmental targets, assessments, rotations, and printable records. Generic claims about ideas, curiosity, and building unrelated products have been removed. Role descriptions distinguish resident recording, faculty evaluation, and HOD requirements/access/oversight.

## Typography and assets

Marketing uses locally bundled Manrope; display italics use Georgia. The interface preview uses locally bundled Open Sauce One, as the application does. Fonts and their supplied licenses are included. The owl mark continues to identify Gothos Labs.

The video remains the visual reference for composition. The current source controls product terminology. The attached text controls the background effect. These explicit references take precedence over generic design defaults.

## Scroll entrances and footer

Headings, descriptive copy, action buttons, activity labels, feature art, cards, role panels, and footer links fade in as they enter the viewport. Coarse text containers are split into separate reveal units; product screens and illustrated cards stay intact as single visual artifacts. Reveals use 650ms opacity and 850ms upward settling, staggered by 70ms with a maximum delay of 210ms. The observer triggers once, 24px inside the viewport, and keyboard focus immediately reveals the focused unit. Pause or reduced motion shows all content without transitions; scripts failing does not hide content.

The footer ends with a large two-part Gothos Labs wordmark, in Manrope with a lime Labs accent. It spans the full footer grid and links to the top. Its responsive type is sized to stay within the content width from 320px upward.

## Company positioning

The headline is Built for medicine. Made for people. Hero, about, contact, and footer copy now speak to Gothos Labs' broader medical-software and AI focus, supplied directly by the user. Product-specific features remain explicitly about ELogBook. The marked header badge, hero announcement badge, and small duplicate footer logo are removed. The large footer wordmark remains. Mobile headline sizing is adapted for the longer copy.

## Validation limits

Source and HTTP checks are recorded in verification.json. Browser/GPU and responsive visual checks are reported separately; a static source check is not a rendering pass.


# GhostFibers source

The background uses the GhostFibers component attributed to React Bits in the user's supplied `Pasted text.txt`. The supplied React component and its CSS are retained in `reference-source/` for provenance.

`ghost-fibers.js` adapts that source to this static site's lifecycle without React. It retains the supplied WebGL2 shaders, ribbon geometry, instanced fibers, depth of field, focus interaction, click pulse, and bloom passes. The integration adds the page's pause control, reduced-motion updates, a 30fps limit, rendering-size limits, context-loss handling, scroll-driven ribbon rotation, and stronger mouse camera/parting behavior. Colors are configured to match Gothos Labs' lime and teal treatment.

No new license terms are asserted for the supplied component.

(() => {
  'use strict';
  const site = window.Gothos;
  const sections = [...document.querySelectorAll('[data-flight-section]')];
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
  const ease = t => t * t * t * (t * (t * 6 - 15) + 10);
  let journey = null, lastWheel = -Infinity, wheelSum = 0, finishedAt = -Infinity;
  let touch = null, wheelLocked = false;
  const stops = () => sections.map(el => Math.round(el.getBoundingClientRect().top + scrollY));
  const blocked = target => !!document.querySelector('dialog[open]') ||
    !!target?.closest('input, textarea, select, [contenteditable="true"], .nav-links.open');

  // Keep native scrolling for overflow panels and for the readable part of tall sections.
  function nestedScroll(target) {
    for (let el = target; el && el !== document.body; el = el.parentElement) {
      if (el.scrollHeight > el.clientHeight + 2 && /auto|scroll/.test(getComputedStyle(el).overflowY)) return true;
    }
    return false;
  }
  function destination(direction) {
    const points = stops();
    let index = points.findLastIndex(top => top <= scrollY + 3);
    index = Math.max(0, index);
    if (direction > 0) {
      if (index === points.length - 1) return null;
      if (scrollY < points[index + 1] - innerHeight - 3) return null;
      return points[index + 1];
    }
    if (scrollY > points[index] + 3 || index === 0) return null;
    // Arrive at the bottom of a tall previous section so no content is skipped on the way up.
    return Math.max(points[index - 1], points[index] - innerHeight);
  }
  function cancel() { journey = null; wheelSum = 0; }
  function travel(top) {
    const to = clamp(top, 0, document.documentElement.scrollHeight - innerHeight);
    if (Math.abs(to - scrollY) < 2) return;
    if (!site.motion.enabled) { cancel(); window.scrollTo(0, to); return; }
    journey = { from: scrollY, to, started: performance.now(), duration: 1100 };
    site.flight?.request();
  }
  site.addTicker(now => {
    if (!journey) return;
    if (document.querySelector('dialog[open]')) { cancel(); return; }
    const t = clamp((now - journey.started) / journey.duration, 0, 1);
    window.scrollTo(0, journey.from + (journey.to - journey.from) * ease(t));
    if (t === 1) { journey = null; finishedAt = now; }
  });
  addEventListener('wheel', event => {
    if (event.ctrlKey || event.metaKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) ||
        !event.deltaY || blocked(event.target) || nestedScroll(event.target)) return;
    const now = performance.now(), gap = now - lastWheel;
    lastWheel = now;
    if (gap > 180) wheelLocked = false;
    if (journey || now - finishedAt < 220 || wheelLocked) {
      event.preventDefault(); return;
    }
    const to = destination(Math.sign(event.deltaY));
    if (to === null) { wheelSum = 0; return; }
    event.preventDefault();
    const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1);
    if (gap > 180 || Math.sign(wheelSum) !== Math.sign(delta)) wheelSum = 0;
    wheelSum += delta;
    if (Math.abs(wheelSum) >= 24) { wheelSum = 0; wheelLocked = true; travel(to); }
  }, { passive: false });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { cancel(); return; }
    if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey || blocked(event.target)) return;
    if (event.key === ' ' && event.target.closest('button, a, summary')) return;
    const direction = ['ArrowDown', 'PageDown', ' '].includes(event.key) ? (event.shiftKey ? -1 : 1) :
      ['ArrowUp', 'PageUp'].includes(event.key) ? -1 : 0;
    const to = event.key === 'Home' ? 0 : event.key === 'End' ? stops().at(-1) : direction ? destination(direction) : null;
    if (to === null) return;
    event.preventDefault();
    if (!event.repeat) travel(to);
  });
  addEventListener('touchstart', event => {
    cancel();
    touch = event.touches.length === 1 && !blocked(event.target) && !nestedScroll(event.target)
      ? { x: event.touches[0].clientX, y: event.touches[0].clientY, down: destination(1), up: destination(-1), to: null }
      : null;
  }, { passive: true });
  addEventListener('touchmove', event => {
    if (!touch || event.touches.length !== 1) { touch = null; return; }
    const dy = touch.y - event.touches[0].clientY, dx = touch.x - event.touches[0].clientX;
    if (Math.abs(dx) > Math.abs(dy)) { touch = null; return; }
    const to = dy > 0 ? touch.down : touch.up;
    if (to === null) { touch = null; return; }
    if (Math.abs(dy) > 8) event.preventDefault();
    touch.to = Math.abs(dy) >= 45 ? to : null;
  }, { passive: false });
  addEventListener('touchend', () => { if (touch?.to != null) travel(touch.to); touch = null; }, { passive: true });
  addEventListener('touchcancel', () => { touch = null; }, { passive: true });
  addEventListener('pointerdown', cancel, { passive: true });
  addEventListener('resize', cancel, { passive: true });
  document.addEventListener('visibilitychange', () => { if (document.hidden) cancel(); });
  addEventListener('gothos-motion', () => {
    if (!site.motion.enabled && journey) { const to = journey.to; cancel(); window.scrollTo(0, to); }
  });
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const section = sections.find(el => '#' + el.id === link.getAttribute('href'));
    if (!section || document.querySelector('dialog[open]')) return;
    event.preventDefault();
    history.pushState(null, '', '#' + section.id);
    travel(section.getBoundingClientRect().top + scrollY);
  });
})();

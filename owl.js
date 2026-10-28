(() => {
  'use strict';
  const site = window.Gothos;
  const layer = document.getElementById('owl-layer');
  const owl = document.getElementById('owl');
  const wingL = document.getElementById('wingL');
  const wingR = document.getElementById('wingR');
  const pupils = [...document.querySelectorAll('.owl-pupil')];
  const lids = [...document.querySelectorAll('.owl-lid')];
  const sections = [...document.querySelectorAll('[data-flight-section]')];
  const parallax = [...document.querySelectorAll('[data-speed]')];
  const trails = [...document.querySelectorAll('.owl-trail')];
  const letters = [];
  document.querySelectorAll('#logo-lockup a > span').forEach(word => {
    const text = word.textContent;
    word.replaceChildren();
    word.classList.add('word-mask');
    for (const character of text) {
      const letter = document.createElement('span');
      letter.className = 'lockup-letter';
      letter.textContent = character;
      letter.setAttribute('aria-hidden', 'true');
      word.append(letter); letters.push(letter);
    }
  });
  const clamp = (n, min = 0, max = 1) => Math.min(max, Math.max(min, n));
  const ease = t => t < .5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2;
  const mix = (a, b, t) => a + (b - a) * t;
  let tops = [], heights = [], raf = 0, previous = 0, lastY = scrollY;
  let direction = 0, velocity = 0, clock = 0, nextBlink = 4, blinkUntil = 0;
  let pointer = { x: 0, y: 0 }, gaze = { x: 0, y: 0 };
  let previewTarget = { x: 0, y: 0 };
  let state = null, initialized = false, logo = 0, lastSection = -1;
  let chat = false, chatStarted = 0, returnStarted = -Infinity, pulsePlayed = false;
  let wingSpread = 0;
  function measure() {
    tops = sections.map(section => section.getBoundingClientRect().top + scrollY);
    heights = sections.map(section => section.offsetHeight);
    const preview = document.querySelector('.assistant-card').getBoundingClientRect();
    previewTarget = { x: preview.left + preview.width / 2, y: preview.top + scrollY + preview.height / 2 };
    request();
  }
  const desktop = [
    { x: -.12, y: .06, s: .34, roll: 0 },
    { x: -.52, y: .04, s: .30, roll: -4 },
    { x: -.02, y: .24, s: .26, roll: 4 },
    { x: -.52, y: .06, s: .30, roll: -4 },
    { x: 0, y: .14, s: .24, roll: 0 }
  ];
  function frames() {
    if (innerWidth >= 760) return desktop;
    return [
      { x: -.09, y: -.02, s: .28, roll: 0 },
      { x: .18, y: -.29, s: .24, roll: -4 },
      { x: .24, y: -.32, s: .20, roll: 4 },
      { x: .18, y: -.29, s: .24, roll: -4 },
      { x: 0, y: .12, s: .25, roll: 0 }
    ];
  }
  function progress(y) {
    let i = 0;
    while (i < tops.length - 1 && y >= tops[i + 1]) i++;
    if (i === tops.length - 1) return i;
    return i + clamp((y - tops[i]) / Math.max(1, tops[i + 1] - tops[i]));
  }
  function request() {
    if (!raf && !document.hidden) raf = requestAnimationFrame(frame);
  }
  function frame(now) {
    raf = 0;
    const dt = previous ? Math.min((now - previous) / 1000, .05) : .016;
    previous = now;
    const motion = site.motion.enabled;
    if (motion) clock += dt;
    const K = frames(), p = progress(scrollY);
    const i = Math.min(K.length - 2, Math.floor(p));
    const t = ease(clamp((p - i - .12) / .76));
    const moving = Math.sin(t * Math.PI);
    const delta = scrollY - lastY;
    lastY = scrollY;
    const smooth = 1 - Math.exp(-dt * 6);
    if (Math.abs(delta) > .1) direction = mix(direction, Math.sign(delta), smooth);
    velocity = mix(velocity, delta / Math.max(1, innerHeight) / dt, smooth);
    const D = motion ? clamp(velocity * .9, -1, 1) : 0;
    const target = {};
    for (const key of ['x', 'y', 's', 'roll']) target[key] = mix(K[i][key], K[i + 1][key], t);
    if (motion && !chat) {
      target.y += direction * moving * .18;
      target.x += (i % 2 ? -1 : 1) * moving * .10;
    }
    let L = i === K.length - 2 ? ease(clamp((t - .55) / .45)) : 0;
    if (p >= K.length - 1) L = 1;
    if (!motion && !chat) {
      const still = Math.min(K.length-1, Math.round(p));
      Object.assign(target, K[still]);
      L = still === K.length-1 ? 1 : 0;
    }
    if (motion && !chat && now - returnStarted < 650) L *= ease(clamp((now - returnStarted - 350) / 300));
    // Offset the drawing above the sheet so its tail never covers the title.
    if (chat) { Object.assign(target, { x: 0, y: innerWidth < 760 ? -.34 : -.29, s: .16, roll: 0 }); L = 0; }
    const size = Math.min(innerHeight * target.s, innerWidth * (innerWidth < 760 ? .58 : .32));
    const desiredWings = motion ? clamp(moving + Math.abs(D) * .8) * (1-L) : 0;
    const safe = size * (.5 + .24 * desiredWings) + 18;
    target.x = clamp(innerWidth * (.5 + target.x), safe, innerWidth - safe);
    target.y = innerHeight * (.5 + target.y);
    target.s = size;
    if (!initialized) { state = { ...target }; initialized = true; }
    const follow = motion ? 1 - Math.exp(-dt * (chat ? 7 : 3.2)) : 1;
    for (const key of ['x', 'y', 's', 'roll']) state[key] = mix(state[key], target[key], follow);
    logo = motion ? mix(logo, L, 1 - Math.exp(-dt * 9)) : L;
    if (Math.abs(logo - L) < .002) logo = L;
    let u = motion ? clamp(moving + Math.abs(D) * .8) * (1 - L) : 0;
    if (chat) u = motion ? clamp(1 - (now - chatStarted) / 650) : 0;
    else if (motion && now - returnStarted < 650) u = Math.max(u, clamp(1 - (now - returnStarted) / 650) * (1-L));
    wingSpread = !motion || L > .97 ? 0 : mix(wingSpread, u, 1-Math.exp(-dt*8));
    u = wingSpread;
    const flap = Math.sin(clock * Math.PI * 2 * (3.2 + 2.5 * u)) * 24 * u;
    wingL.style.transform = `rotate(${-12 - (D > 0 ? 25 : 0) * u + flap}deg) scaleX(${mix(.12, 1, u)})`;
    wingR.style.transform = `rotate(${12 + (D > 0 ? 25 : 0) * u - flap}deg) scaleX(${mix(.12, 1, u)})`;
    wingL.style.opacity = wingR.style.opacity = String(clamp((u - .05) / .25));
    const bob = motion && !chat ? Math.sin(clock * 1.8) * 6 * (1 - L) : 0;
    const px = motion ? pointer.x * 8 * (1 - L) : 0;
    const py = motion ? pointer.y * 5 * (1 - L) : 0;
    const paintSize = Math.min(state.s, (innerWidth-24) / (1+.48*u));
    const paintSafe = paintSize * (.5 + .24*u) + 12;
    const paintX = clamp(state.x + px, paintSafe, innerWidth-paintSafe);
    owl.style.transform = `translate3d(${paintX}px,${state.y + py + bob}px,0) translate(-50%,-50%) rotate(${state.roll}deg) rotateX(${D * 22}deg) scale(${paintSize / 400},${paintSize / 400 * (1 + Math.abs(D) * .08)})`;
    owl.style.setProperty('--L', logo.toFixed(4));
    document.getElementById('shadow').style.cssText = `transform:translate3d(${paintX}px,${state.y + paintSize * .57}px,0) translate(-50%,-50%) scale(${paintSize / 400});opacity:${(1-u)*(1-logo)*.18}`;
    const currentSection = Math.min(K.length - 1, motion ? Math.floor(p + .1) : Math.round(p));
    if (!motion && currentSection !== lastSection) { owl.classList.remove('position-fade'); void owl.offsetWidth; owl.classList.add('position-fade'); }
    lastSection = currentSection;
    const dark = sections.find((section, index) => tops[index] <= scrollY + innerHeight * .06 && tops[index] + heights[index] > scrollY + innerHeight * .06);
    document.body.classList.toggle('on-dark', dark?.dataset.theme === 'dark' && !chat);
    document.body.classList.toggle('owl-logo', logo > .97 && !chat);
    const lockup = document.getElementById('logo-lockup');
    lockup.style.opacity = String(logo);
    lockup.style.transform = `translate(-50%,${(1-logo)*20}px)`;
    lockup.style.pointerEvents = logo > .97 && !chat ? 'auto' : 'none';
    lockup.style.visibility = logo > .01 && !chat ? 'visible' : 'hidden';
    letters.forEach((letter,index) => {
      const reveal = ease(clamp((logo - index * .025) / (1 - index * .025)));
      letter.style.transform = `translateY(${(1-reveal)*110}%)`;
    });
    if (logo > .97 && !pulsePlayed && motion) { owl.classList.remove('landing-pulse'); void owl.offsetWidth; owl.classList.add('landing-pulse'); pulsePlayed = true; }
    if (logo < .1) pulsePlayed = false;
    if (motion && clock > nextBlink) { blinkUntil = clock + .14; nextBlink = clock + 3.5 + Math.random() * 2.5; }
    const blink = motion && clock < blinkUntil ? Math.sin((blinkUntil-clock) / .14 * Math.PI) : 0;
    lids.forEach(lid => { lid.style.transform = `scaleY(${blink})`; });
    const look = !chat && currentSection === 2
      ? { x: clamp((previewTarget.x - state.x) / (innerWidth * .35), -1, 1), y: clamp((previewTarget.y - scrollY - state.y) / (innerHeight * .35), -1, 1) }
      : { x: pointer.x, y: D > .05 ? .9 : pointer.y };
    gaze.x = mix(gaze.x, motion ? look.x : 0, 1 - Math.exp(-dt*8));
    gaze.y = mix(gaze.y, motion ? look.y : 0, 1 - Math.exp(-dt*8));
    pupils.forEach(pupil => {
      const distance = pupil.dataset.gaze === 'dimensional' ? 2 : 3.4;
      pupil.style.transform = `translate(${gaze.x * distance}px,${gaze.y * distance}px)`;
    });
    parallax.forEach(el => {
      const section = el.closest('[data-flight-section]');
      const index = sections.indexOf(section);
      const offset = motion ? (scrollY - tops[index]) * Number(el.dataset.speed) : 0;
      el.style.transform = `translate3d(0,${offset}px,0)`;
    });
    trails.forEach((trail,index) => {
      trail.style.opacity = String(motion && !chat && Math.abs(D) > .5 ? (index ? .08 : .15) * (1-L) : 0);
      trail.style.transform = `translate3d(${paintX - (index+1)*D*22}px,${state.y - (index+1)*direction*24}px,0) translate(-50%,-50%) rotate(${state.roll}deg) scale(${paintSize / 400})`;
    });
    site.tick(now, dt);
    if (motion || Math.abs(state.x-target.x) > .2 || Math.abs(state.y-target.y) > .2) request();
  }
  addEventListener('scroll', request, { passive: true });
  addEventListener('resize', measure, { passive: true });
  addEventListener('pointermove', e => { pointer = { x: clamp(e.clientX/innerWidth*2-1,-1,1), y: clamp(e.clientY/innerHeight*2-1,-1,1) }; request(); }, { passive: true });
  addEventListener('touchstart', e => { const touch=e.touches[0]; if(touch) pointer={x:clamp(touch.clientX/innerWidth*2-1,-1,1),y:clamp(touch.clientY/innerHeight*2-1,-1,1)}; request(); }, { passive:true });
  document.addEventListener('visibilitychange', () => { if(document.hidden){cancelAnimationFrame(raf);raf=0;previous=0;}else{previous=0;lastY=scrollY;request();} });
  addEventListener('gothos-motion', request);
  addEventListener('gothos-chat', e => {
    if (chat && !e.detail.open) returnStarted=performance.now();
    chat=e.detail.open;chatStarted=performance.now();request();
  });
  owl.addEventListener('pointerenter', () => { if(site.motion.enabled){blinkUntil=clock+.14;owl.classList.add('owl-hover');} });
  owl.addEventListener('pointerleave', () => owl.classList.remove('owl-hover'));
  new ResizeObserver(measure).observe(document.querySelector('main'));
  document.fonts.ready.then(measure);
  measure();
  // Pure helpers exposed for meaningful geometry checks, not customer data.
  site.flight = { progress, measure, request };
})();

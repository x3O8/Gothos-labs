(() => {
'use strict';
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const motionButton = document.getElementById('motion-control');
let paused = false;
try { paused = sessionStorage.getItem('gothos-motion-paused') === 'yes'; } catch {}
let motion = !reduced.matches && !paused;
const smallScreen = matchMedia('(max-width: 600px)');
const background = window.createGhostFibers?.(document.getElementById('fiber-background'), {
  glowColor: '#bdff4a', lineColor: '#e5ffd2', secondaryColor: '#368d81',
  layers: 3, twist: 1.2, threads: smallScreen.matches ? 42 : 72,
  fiberStyle: 'dots', density: smallScreen.matches ? .6 : .85,
  depthOfField: .85, hoverEffect: 'part', mouseStrength: 1.15, pulseOnClick: true, intro: true, mouseInteraction: motion,
  particles: .3, sparkle: .35, glow: .8, brightness: .9, grain: .025,
  speed: .4, rotation: 18, paused: !motion, dpr: Math.min(devicePixelRatio || 1, 1.25)
});
function updateBackgroundScroll() {
  if (!motion) return;
  const distance = Math.max(1, document.documentElement.scrollHeight - innerHeight);
  background?.setScroll(Math.max(0, Math.min(1, scrollY / distance)));
}
const syncMotion = () => {
  motion = !reduced.matches && !paused;
  document.body.classList.toggle('motion-on', motion);
  document.body.classList.toggle('motion-off', !motion);
  motionButton.setAttribute('aria-pressed', String(!motion));
  motionButton.disabled = reduced.matches;
  motionButton.querySelector('span').textContent = reduced.matches ? 'Reduced motion' : motion ? 'Pause motion' : 'Resume motion';
  document.getElementById('motion-icon').setAttribute('d', motion ? 'M6 4v10M12 4v10' : 'm5 3 10 6-10 6Z');
  background?.update({ paused: !motion, mouseInteraction: motion });
  updateBackgroundScroll();
};
motionButton.addEventListener('click', () => {
  paused = motion;
  try { sessionStorage.setItem('gothos-motion-paused', paused ? 'yes' : 'no'); } catch {}
  syncMotion();
});
reduced.addEventListener('change', syncMotion);
smallScreen.addEventListener('change', () => background?.update({ threads: smallScreen.matches ? 42 : 72, density: smallScreen.matches ? .6 : .85 }));

// Reveal content units individually, keeping the product screen and each illustrated card intact.
document.querySelectorAll('.section-intro.reveal, .feature-copy.reveal, .people-columns > article.reveal, .role-explorer.reveal').forEach(el => el.classList.remove('reveal'));
const revealTargets = [
  '.hero-copy > :not(.hero-actions)', '.hero-actions > *',
  '.activity-strip > p', '.activity-types > *',
  '.section-intro .eyebrow', '.section-intro h2', '.section-intro > p',
  '.feature-copy > *', '.people-columns > article > *',
  '.role-explorer > *', '.footer-status > span',
  '.footer-brand > *', '.footer nav > *', '.footer-note > *', '.footer-signature'
];
document.querySelectorAll(revealTargets.join(',')).forEach(el => el.classList.add('reveal'));
const revealGroups = '.hero-copy, .activity-strip, .section-intro, .feature-copy, .principle-grid, .day-grid, .people-columns > article, .role-explorer, .role-cards, .contact-grid, .footer-status, .footer-brand, .footer nav, .footer-note';
document.querySelectorAll(revealGroups).forEach(group => {
  group.querySelectorAll('.reveal').forEach((el, index) => el.style.setProperty('--reveal-delay', Math.min(index, 3) * 70 + 'ms'));
});
const reveals = [...document.querySelectorAll('.reveal')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); }
  }), { threshold: .08, rootMargin: '0px 0px -24px 0px' });
  reveals.forEach(el => observer.observe(el));
  document.addEventListener('focusin', event => {
    const target = event.target.closest('.reveal');
    if (target) { target.classList.add('in'); observer.unobserve(target); }
  });
  document.documentElement.classList.add('js');
}
const menu = document.getElementById('menu-button');
const navigation = document.getElementById('navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
}
menu.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navigation.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
document.addEventListener('click', e => { if (!e.target.closest('.header')) closeMenu(); });
document.getElementById('year').textContent = new Date().getFullYear();

const previewPanel = document.getElementById('elog-panel');
const dashboardMarkup = previewPanel.innerHTML;
const previewTabs = [...document.querySelectorAll('[data-preview-tab]')];
const previewScreens = {
  dashboard: { title: 'Dashboard' },
  cases: { title: 'Case Logs', singular: 'clinical case', icon: 'book', description: 'Document clinical encounters with their training context and follow faculty verification.', columns: ['Date', 'Clinical case', 'Verification'], guide: ['Record the clinical activity and its context.', 'Submit the entry for assigned faculty to review.', 'Follow the entry’s verification status in your logbook.'] },
  procedures: { title: 'Procedure Logs', singular: 'procedure', icon: 'activity', description: 'Keep procedure records, supervision context, and verification status together.', columns: ['Date', 'Procedure', 'Verification'], guide: ['Record the procedure and its training details.', 'Keep supervision and participation with the entry.', 'Follow faculty verification alongside the record.'] },
  academics: { title: 'Academic Activities', singular: 'academic activity', icon: 'academic', description: 'Document seminars, journal clubs, presentations, teaching sessions, and other academic work.', columns: ['Date', 'Academic activity', 'Verification'], guide: ['Choose the academic activity and record its details.', 'Keep the topic and training context together.', 'Bring the entry into the faculty review process.'] },
  postings: { title: 'Postings & Rotations', singular: 'posting', icon: 'calendar', description: 'Keep your clinical rotations, posting dates, and department assignment in view.', columns: ['Posting', 'Dates', 'Department'], guide: ['View your clinical posting and rotation records.', 'Check the dates attached to each assignment.', 'Keep the posting context close to your training activity.'] },
  assessments: { title: 'Assessments', singular: 'assessment', icon: 'clipboard', description: 'View the assessment records and feedback entered during your training.', columns: ['Assessment', 'Date', 'Faculty feedback'], guide: ['Open the assessments recorded during training.', 'Read faculty feedback in the same workspace.', 'Keep assessment context with your wider training record.'] }
};
function showPreviewScreen(key, focusTab = false) {
  const screen = previewScreens[key];
  if (!screen) return;
  previewTabs.forEach(tab => {
    const selected = tab.dataset.previewTab === key;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focusTab) tab.focus();
  });
  document.getElementById('preview-screen-title').textContent = screen.title;
  previewPanel.setAttribute('aria-labelledby', 'preview-tab-' + key);
  if (key === 'dashboard') previewPanel.innerHTML = dashboardMarkup;
  else previewPanel.innerHTML = `<div class="elog-list-page"><div class="elog-list-intro"><span class="elog-section-icon"><svg aria-hidden="true"><use href="#${screen.icon}"/></svg></span><div><h3>${screen.title}</h3><p>${screen.description}</p></div></div><div class="elog-list-table"><div class="elog-table-head">${screen.columns.map(column => `<span>${column}</span>`).join('')}</div><div class="elog-empty"><svg aria-hidden="true"><use href="#${screen.icon}"/></svg><strong>No ${screen.singular} records in this preview.</strong><p>Your personal and clinical records are not loaded here.</p></div></div><details class="elog-guide"><summary>How this part of ELogBook works<svg aria-hidden="true"><use href="#chevron"/></svg></summary><ol>${screen.guide.map(step => `<li>${step}</li>`).join('')}</ol></details></div>`;
  previewPanel.scrollTop = 0;
}
previewTabs.forEach(tab => {
  tab.addEventListener('click', () => showPreviewScreen(tab.dataset.previewTab));
  tab.addEventListener('keydown', event => {
    const index = previewTabs.indexOf(tab);
    let next;
    if (event.key === 'ArrowDown') next = (index + 1) % previewTabs.length;
    else if (event.key === 'ArrowUp') next = (index - 1 + previewTabs.length) % previewTabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = previewTabs.length - 1;
    if (next !== undefined) { event.preventDefault(); showPreviewScreen(previewTabs[next].dataset.previewTab, true); }
  });
});
previewPanel.addEventListener('click', event => {
  const button = event.target.closest('[data-preview-go]');
  if (button) showPreviewScreen(button.dataset.previewGo, true);
});

const previewDialog = document.getElementById('preview-dialog');
const previewWindow = document.getElementById('product-window');
const previewHome = document.getElementById('product-preview');
let previewTrigger;
function openPreview(event) {
  if (previewDialog.open) return;
  previewTrigger = event.currentTarget;
  previewHome.style.minHeight = previewHome.getBoundingClientRect().height + 'px';
  document.getElementById('preview-dialog-host').append(previewWindow);
  previewDialog.showModal();
}
document.getElementById('watch-workflow').addEventListener('click', openPreview);
document.querySelectorAll('[data-expand-preview]').forEach(button => button.addEventListener('click', openPreview));
previewDialog.addEventListener('close', () => {
  previewHome.append(previewWindow);
  previewHome.style.minHeight = '';
  previewTrigger?.focus({ preventScroll: true });
});

const roles = {
  resident: { title: 'The record behind your training.', label: 'Resident', copy: 'Logs, verification, and progress in one workspace.', description: 'Document clinical cases, procedures, and academic activities. Follow verification and the training requirements set by your department.', steps: ['Record clinical and academic activity in your logbook.', 'Track faculty verification and completion against department requirements.', 'Keep postings, assessments, and supporting training records in view.'] },
  faculty: { title: 'A review queue with context.', label: 'Faculty', copy: 'Verify entries. Follow residents. Record assessments.', description: 'The faculty workspace brings an evaluation queue, assigned resident progress, and training assessments together.', steps: ['Open the entries waiting in your evaluation queue.', 'Review and verify the work of assigned residents.', 'Follow resident progress and record training assessments.'] },
  department: { title: 'The department’s training picture.', label: 'Department', copy: 'Requirements, access, and oversight for your department.', description: 'Heads of department manage training requirements, resident and faculty access, departmental progress, and leave approvals.', steps: ['Set the requirements used to measure training progress.', 'Manage resident registrations and faculty access.', 'Review departmental training activity and leave approvals.'] }
};
const detailDialog = document.getElementById('detail-dialog');
const enquiryDialog = document.getElementById('enquiry-dialog');
let currentRole = 'resident';
function openRole(role) {
  const data = roles[role];
  document.getElementById('dialog-context').textContent = 'Arogya ELogBook / ' + data.label;
  document.getElementById('dialog-title').textContent = data.title;
  document.getElementById('dialog-description').textContent = data.description;
  document.getElementById('dialog-steps').replaceChildren(...data.steps.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
  detailDialog.showModal();
}
document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => openRole(button.dataset.open)));
const slider = document.getElementById('role-slider');
function updateRole() {
  currentRole = ['resident', 'faculty', 'department'][Number(slider.value)];
  const role = roles[currentRole];
  document.getElementById('selected-role').textContent = role.label;
  document.getElementById('selected-role-copy').textContent = role.copy;
  slider.setAttribute('aria-valuetext', role.label);
  const fill = Number(slider.value) * 50;
  slider.style.background = 'linear-gradient(to right,var(--lime) ' + fill + '%,#333b28 ' + fill + '%)';
}
slider.addEventListener('input', updateRole);
updateRole();
document.getElementById('explore-selected-role').addEventListener('click', () => openRole(currentRole));
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const r = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom)) dialog.close();
  });
});
document.getElementById('dialog-enquire').addEventListener('click', () => {
  detailDialog.close();
  document.getElementById('brief-topic').value = 'Arogya ELogBook';
  enquiryDialog.showModal();
});
document.getElementById('enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!event.target.reportValidity()) return;
  document.getElementById('brief-email').value = document.getElementById('enquiry-email').value;
  document.getElementById('brief-topic').value = 'A medical software project';
  enquiryDialog.showModal();
});
document.getElementById('brief-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!event.target.reportValidity()) return;
  const data = new FormData(event.target);
  const text = 'GOTHOS LABS - ENQUIRY\n\nEmail: ' + data.get('email') + '\nTopic: ' + data.get('topic') + '\n\n' + data.get('message') + '\n\nPrepared locally. This enquiry has not been sent.\n';
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a'); link.href = url; link.download = 'gothos-labs-enquiry.txt'; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
  document.getElementById('form-status').textContent = 'Your enquiry brief is ready in Downloads. Nothing has been sent.';
});

const statement = document.querySelector('[data-word-reveal]');
const sentence = statement.textContent;
statement.replaceChildren(...sentence.split(' ').flatMap((word, index) => {
  const span = document.createElement('span'); span.textContent = word;
  return index ? [document.createTextNode(' '), span] : [span];
}));
const words = [...statement.querySelectorAll('span')];
const header = document.getElementById('header');
let scrollQueued = false;
function updateScroll() {
  header.classList.toggle('scrolled', scrollY > 25);
  updateBackgroundScroll();
  const rect = statement.getBoundingClientRect();
  const progress = Math.max(0, Math.min(1, (innerHeight * .86 - rect.top) / (innerHeight * .47)));
  words.forEach((word, index) => { word.style.opacity = !motion || progress * words.length > index ? '1' : '.2'; });
  scrollQueued = false;
}
addEventListener('scroll', () => { if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateScroll); } }, { passive: true });
addEventListener('resize', updateScroll, { passive: true });
syncMotion();
updateScroll();
})();

// ── TAB SWITCHING ──
function showCity(city, btn) {
  document.querySelectorAll('.city-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active-ams','active-ber','active-cph'));
  const panel = document.getElementById('panel-' + city);
  if (panel) panel.classList.add('active');
  btn.classList.add('active-' + city);
  window.scrollTo({ top: document.querySelector('.city-tabs').offsetTop - 54, behavior: 'smooth' });
}

function showFood(city, tab, btn) {
  const panel = document.getElementById('panel-' + city);
  if (!panel) return;
  panel.querySelectorAll('.food-section').forEach(s => s.classList.remove('fs-active'));
  panel.querySelectorAll('.food-tab').forEach(b => b.classList.remove('ft-active'));
  const sec = document.getElementById(city + '-' + tab);
  if (sec) sec.classList.add('fs-active');
  btn.classList.add('ft-active');
}

// ── SVG ICONS ──
const Icons = {
  maps: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
  web:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  ig:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
};

// ── RENDER LINKS ──
function makeLinks(maps, web, ig) {
  let html = '<div class="card-links">';
  if (maps) html += `<a class="card-link" href="${maps}" target="_blank" rel="noopener">${Icons.maps} Maps</a>`;
  if (web)  html += `<a class="card-link" href="${web}"  target="_blank" rel="noopener">${Icons.web} Site</a>`;
  if (ig)   html += `<a class="card-link" href="${ig}"   target="_blank" rel="noopener">${Icons.ig} Instagram</a>`;
  html += '</div>';
  return html;
}

// ── MARK ACTIVE NAV ──
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
  });
});

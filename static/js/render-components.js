// static/js/render-components.js
(async function () {
  // --- CONFIG ---
  const CDN_BASE = 'https://cdn.jsdelivr.net/npm/@qld-gov-au/qgds-bootstrap5@2.0.9/dist/assets/components/bs5/';
  const COMPONENTS = [
    // declare the components you will render. If a component uses partials, list them.
    { name: 'header', container: 'header-container', partials: [ 'headerBrand' ] }
  ];

  // --- small in-memory cache for fetched templates ---
  const hbsCache = {};
  async function fetchHbs(name, dir) {
    if (hbsCache[name]) return hbsCache[name];
    const url = `${CDN_BASE}${dir}/${name}.hbs`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
    const txt = await res.text();
    hbsCache[name] = txt;
    return txt;
  }

  // --- get JSON data: from embedded window var OR fetch static JSON ---
  async function getData() {
    if (window.__COMPONENTS_DATA) return window.__COMPONENTS_DATA; // Hugo data embedded
    // fallback: fetch from static file (static/data/header.json)
    const res = await fetch('/data/header.json');
    if (!res.ok) return {};
    return await res.json();
  }

  function getTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // --- register partials ---
  async function registerPartials(partials = [], dir = "") {
    for (const p of partials) {
      const txt = await fetchHbs(p, dir);
      // Register partial under its base name
      Handlebars.registerPartial(p, txt);
    }
  }

  // --- main render flow ---
  try {
    const data = await getData();
    // const theme = getTheme();
    
    console.log('Loaded data:', data);

    for (const comp of COMPONENTS) {
      if (comp.partials) await registerPartials(comp.partials, comp.name);

      if (comp.isPartial) continue; // only register partials for these entries

      const tplText = await fetchHbs(comp.name, comp.name);
      const tpl = Handlebars.compile(tplText);
      // Pass the entire data object as context (JSON is already structured for header component)
      const context = data;
      console.log('Rendering context:', context);
      const html = tpl(context);

      if (comp.container) {
        const el = document.getElementById(comp.container);
        console.log("Element", el)
        if (el) el.innerHTML = html;
      }
    }

    // Reinitialize QLD Bootstrap components after rendering
    if (window.QLD && window.QLD.init) {
      window.QLD.init();
    }

    // optional: re-render on theme change (user switches OS theme)
    if (window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      mq.addEventListener && mq.addEventListener('change', () => {
        // simple: reload page or re-run render logic for components only
        window.location.reload();
      });
    }

  } catch (err) {
    console.error('render-components error:', err);
  }
})();

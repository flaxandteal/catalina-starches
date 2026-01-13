// static/js/render-components.js
(async function () {
  // --- CONFIG ---
  const COMPONENTS = [
    // declare the components you will render. If a component uses partials, list them.
    { name: 'header', container: 'header-container', partials: [ 'headerBrand' ] }
  ];

  // --- get JSON data: from embedded window var OR fetch static JSON ---
  async function getData() {
    if (window.__COMPONENTS_DATA) return window.__COMPONENTS_DATA; // Hugo data embedded
    // fallback: fetch from static file (static/data/header.json)
    const res = await fetch('/data/header.json');
    if (!res.ok) return {};
    return await res.json();
  }

  // --- register precompiled partials ---
  function registerPrecompiledPartials(componentName) {
    const precompiled = window.__PRECOMPILED_TEMPLATES?.[componentName];
    if (!precompiled?.partials) return;

    for (const [partialName, templateFunc] of Object.entries(precompiled.partials)) {
      // Template functions are already compiled and ready to use
      Handlebars.registerPartial(partialName, templateFunc);
    }
  }

  // --- get precompiled template ---
  function getPrecompiledTemplate(componentName) {
    const precompiled = window.__PRECOMPILED_TEMPLATES?.[componentName];
    if (!precompiled?.template) {
      throw new Error(`Precompiled template not found for component: ${componentName}`);
    }
    // Template function is already compiled and ready to use
    return precompiled.template;
  }

  // --- main render flow ---
  try {
    const data = await getData();
    console.log('Loaded data:', data);

    for (const comp of COMPONENTS) {
      if (comp.partials) registerPrecompiledPartials(comp.name);

      if (comp.isPartial) continue; // only register partials for these entries

      const tpl = getPrecompiledTemplate(comp.name);
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

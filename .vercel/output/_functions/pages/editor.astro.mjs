import { a as createComponent, h as renderHead, g as renderComponent, r as renderTemplate } from '../chunks/astro/server_Blp1FlTl.mjs';
import 'kleur/colors';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Editor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-nmyy7qaa> <head><title>Editor de artículos</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-nmyy7qaa> <main class="container" data-astro-cid-nmyy7qaa> ${renderComponent($$result, "Editor", null, { "client:only": true, "client:component-hydration": "only", "data-astro-cid-nmyy7qaa": true, "client:component-path": "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/components/jsx/Editor", "client:component-export": "default" })} </main> </body></html>`;
}, "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/pages/editor.astro", void 0);

const $$file = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/pages/editor.astro";
const $$url = "/editor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Editor,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

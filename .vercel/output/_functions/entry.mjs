import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DY1U0tl2.mjs';
import { manifest } from './manifest_BsZ92yM0.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/anime/_page_.astro.mjs');
const _page2 = () => import('./pages/autores/_id_.astro.mjs');
const _page3 = () => import('./pages/autores/_page_.astro.mjs');
const _page4 = () => import('./pages/editor.astro.mjs');
const _page5 = () => import('./pages/games/_page_.astro.mjs');
const _page6 = () => import('./pages/noticias/_id_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["../../../../AppData/Local/pnpm/global/5/.pnpm/astro@5.5.5_@types+node@16.18.11_rollup@4.37.0_typescript@4.9.5_yaml@2.7.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/anime/[page].astro", _page1],
    ["src/pages/autores/[id].astro", _page2],
    ["src/pages/autores/[page].astro", _page3],
    ["src/pages/editor.astro", _page4],
    ["src/pages/games/[page].astro", _page5],
    ["src/pages/noticias/[id].astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e75a6939-f3eb-426d-936d-65a9275897d5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_pdUngwpj.mjs';
import { manifest } from './manifest_CjuaeIUL.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/anime/anime.astro.mjs');
const _page2 = () => import('./pages/anime/_page_.astro.mjs');
const _page3 = () => import('./pages/editor.astro.mjs');
const _page4 = () => import('./pages/games/games.astro.mjs');
const _page5 = () => import('./pages/games/_page_.astro.mjs');
const _page6 = () => import('./pages/noticias/_id_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/anime/anime.astro", _page1],
    ["src/pages/anime/[page].astro", _page2],
    ["src/pages/editor.astro", _page3],
    ["src/pages/games/games.astro", _page4],
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
    "middlewareSecret": "fca8d10d-ac09-42d7-883e-bc0670d29966",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_pdUngwpj.mjs';
import { manifest } from './manifest_CQOXoHgu.mjs';

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
    "middlewareSecret": "aa6a605d-dcea-4e7c-8d4c-0f5495863e9d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

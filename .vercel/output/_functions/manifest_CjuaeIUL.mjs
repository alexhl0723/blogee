import 'kleur/colors';
import { j as decodeKey } from './chunks/astro/server_Blp1FlTl.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BlDE6W1x.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/","cacheDir":"file:///C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/node_modules/.astro/","outDir":"file:///C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/dist/","srcDir":"file:///C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/","publicDir":"file:///C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/public/","buildClientDir":"file:///C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/dist/client/","buildServerDir":"file:///C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/global.CDaflprw.css"},{"type":"inline","content":"html,body{background-color:#13121a;margin:0;width:auto;height:100%;scroll-behavior:smooth}body>div[data-astro-cid-sckkx6r4]{margin:0 auto;width:100%;max-width:100vw;overflow-x:hidden}\n"}],"routeData":{"route":"/anime/anime","isIndex":false,"type":"page","pattern":"^\\/anime\\/anime\\/?$","segments":[[{"content":"anime","dynamic":false,"spread":false}],[{"content":"anime","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/anime/anime.astro","pathname":"/anime/anime","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":".container[data-astro-cid-nmyy7qaa]{max-width:1200px;margin:0 auto;padding:2rem 1rem}@media (max-width: 768px){.container[data-astro-cid-nmyy7qaa]{padding:1rem}}body{background-color:#f0f2f5;margin:0;padding:0;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;min-height:100vh}@media (max-width: 768px){body{padding:0}}\n"},{"type":"external","src":"/_astro/global.CDaflprw.css"}],"routeData":{"route":"/editor","isIndex":false,"type":"page","pattern":"^\\/editor\\/?$","segments":[[{"content":"editor","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/editor.astro","pathname":"/editor","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/global.CDaflprw.css"},{"type":"inline","content":"html,body{background-color:#13121a;margin:0;width:auto;height:100%;scroll-behavior:smooth}body>div[data-astro-cid-sckkx6r4]{margin:0 auto;width:100%;max-width:100vw;overflow-x:hidden}\n"}],"routeData":{"route":"/games/games","isIndex":false,"type":"page","pattern":"^\\/games\\/games\\/?$","segments":[[{"content":"games","dynamic":false,"spread":false}],[{"content":"games","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/games/games.astro","pathname":"/games/games","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/global.CDaflprw.css"},{"type":"inline","content":"html,body{background-color:#13121a;margin:0;width:auto;height:100%;scroll-behavior:smooth}body>div[data-astro-cid-sckkx6r4]{margin:0 auto;width:100%;max-width:100vw;overflow-x:hidden}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/pages/editor.astro",{"propagation":"none","containsHead":true}],["C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/pages/anime/[page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/pages/anime/anime.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/pages/games/[page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/pages/games/games.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/pages/noticias/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/components/header.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/anime/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/games/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/games/games@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/anime/anime@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/noticias/[id]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/anime/anime@_@astro":"pages/anime/anime.astro.mjs","\u0000@astro-page:src/pages/anime/[page]@_@astro":"pages/anime/_page_.astro.mjs","\u0000@astro-page:src/pages/editor@_@astro":"pages/editor.astro.mjs","\u0000@astro-page:src/pages/games/games@_@astro":"pages/games/games.astro.mjs","\u0000@astro-page:src/pages/games/[page]@_@astro":"pages/games/_page_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/noticias/[id]@_@astro":"pages/noticias/_id_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DGnJfhCh.mjs","C:\\Users\\alexr\\OneDrive\\Desktop\\blogereal\\bloge\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\alexr\\OneDrive\\Desktop\\blogereal\\bloge\\.astro\\content-modules.mjs":"chunks/content-modules_Ce1h-DLr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_oFcihcO5.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/DarketDays.mdx?astroPropagatedAssets":"chunks/DarketDays_BJ-ii59m.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/Demonslager.mdx?astroPropagatedAssets":"chunks/Demonslager_B51NDvWb.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/Konosuba.mdx?astroPropagatedAssets":"chunks/Konosuba_C9XHSY28.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/eldenrig.mdx?astroPropagatedAssets":"chunks/eldenrig_-VXtjMFQ.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/edi-lavoe.mdx?astroPropagatedAssets":"chunks/edi-lavoe_C9P00mIW.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/finaFantasyFinal.mdx?astroPropagatedAssets":"chunks/finaFantasyFinal_DCvKJ9li.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/Astro.mdx?astroPropagatedAssets":"chunks/Astro_DUKxy9Wk.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/minecraft.mdx?astroPropagatedAssets":"chunks/minecraft_VRMMBnZS.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/mewin-cat-rompe-la-red-con-su-mewin.mdx?astroPropagatedAssets":"chunks/mewin-cat-rompe-la-red-con-su-mewin_DPW563xE.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/onepiece.mdx?astroPropagatedAssets":"chunks/onepiece_tFlyiKDc.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/prueba-mdx.mdx?astroPropagatedAssets":"chunks/prueba-mdx_B52IoCK6.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/TheLegendOfZelda.mdx?astroPropagatedAssets":"chunks/TheLegendOfZelda_DTYafLT5.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/Shingeki.mdx?astroPropagatedAssets":"chunks/Shingeki_l9elbX7-.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/DarketDays.mdx":"chunks/DarketDays_BmO5jSc6.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/Demonslager.mdx":"chunks/Demonslager_DTMhtztV.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/Konosuba.mdx":"chunks/Konosuba_DDL8lD74.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/eldenrig.mdx":"chunks/eldenrig_D3J33oRw.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/edi-lavoe.mdx":"chunks/edi-lavoe_C3cPEMHT.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/finaFantasyFinal.mdx":"chunks/finaFantasyFinal_B7NR4n0I.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/Astro.mdx":"chunks/Astro_BYQEsUlb.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/minecraft.mdx":"chunks/minecraft_DrsATIXL.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/mewin-cat-rompe-la-red-con-su-mewin.mdx":"chunks/mewin-cat-rompe-la-red-con-su-mewin_DEj5yaOd.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/onepiece.mdx":"chunks/onepiece_CSTquNnC.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/prueba-mdx.mdx":"chunks/prueba-mdx_CDGXMiIW.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/TheLegendOfZelda.mdx":"chunks/TheLegendOfZelda_Cnkv9159.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/Shingeki.mdx":"chunks/Shingeki_CBDGWybw.mjs","\u0000@astrojs-manifest":"manifest_CjuaeIUL.mjs","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/components/tsx/FechaRelativa":"_astro/FechaRelativa.Bi0Zz57Y.js","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/components/jsx/LikeCounter.jsx":"_astro/LikeCounter.BPxIg1hF.js","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/components/jsx/SearchBar.jsx":"_astro/SearchBar.TrVp1pae.js","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/components/jsx/Editor":"_astro/Editor.CJSGivTI.js","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/components/jsx/PackageTabs.jsx":"_astro/PackageTabs.csrWBcwp.js","@astrojs/react/client.js":"_astro/client.CJ2mfJId.js","C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BunVjUrQ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/global.CDaflprw.css","/atackontita.jpg","/darketdays.png","/demonslager.jpg","/eldenring.avif","/favicon.svg","/finalfantasy.avif","/fondoParallax.jpg","/fondoParallax2.jpg","/image1.jpg","/image2.jpg","/image3.jpg","/Konosuba.webp","/minecraft.jfif","/onepiece.avif","/TheLegendOfZelda.avif","/_astro/client.CJ2mfJId.js","/_astro/Editor.CJSGivTI.js","/_astro/FechaRelativa.Bi0Zz57Y.js","/_astro/index.6otl1p8d.js","/_astro/index.astro_astro_type_script_index_0_lang.BunVjUrQ.js","/_astro/index.CGqfUJ1b.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/LikeCounter.BPxIg1hF.js","/_astro/PackageTabs.csrWBcwp.js","/_astro/SearchBar.TrVp1pae.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"fm+8LkShfFXfBUiWWpfd+FQKMa51JL8+/KexVQKJZLI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

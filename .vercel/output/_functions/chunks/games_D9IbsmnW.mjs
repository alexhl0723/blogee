import { a as createComponent, b as createAstro, m as maybeRenderHead, f as addAttribute, r as renderTemplate } from './astro/server_Blp1FlTl.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro();
const $$TvAnime = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TvAnime;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-tv"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M16 3l-4 4l-4 -4"></path></svg>`;
}, "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/icons/tvAnime.astro", void 0);

const $$Astro = createAstro();
const $$Games = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Games;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-gamepad-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z"></path><path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232"></path><path d="M8 9v2"></path><path d="M7 10h2"></path><path d="M14 10h2"></path></svg>`;
}, "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/icons/games.astro", void 0);

export { $$TvAnime as $, $$Games as a };

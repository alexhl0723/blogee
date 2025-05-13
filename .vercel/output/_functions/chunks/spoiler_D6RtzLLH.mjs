import { a as createComponent, b as createAstro, d as defineStyleVars, r as renderTemplate, e as renderSlot, f as addAttribute, m as maybeRenderHead } from './astro/server_Blp1FlTl.mjs';
/* empty css                                                               */
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Spoiler = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Spoiler;
  const {
    title = "Mostrar spoiler",
    accentColor = "#4f46e5"
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{ accentColor }]);
  return renderTemplate(_a || (_a = __template(["", '<div class="spoiler" data-astro-cid-3ymntkin', '> <button id="spoilerBtn" class="spoiler-btn" data-astro-cid-3ymntkin', ">", '</button> <div id="spoilerContent" class="spoiler-content hidden" data-astro-cid-3ymntkin', "> ", ` </div> </div>  <script>
  // Este script se ejecutar\xE1 en el cliente
  function setupSpoilers() {
    document.querySelectorAll('.spoiler').forEach(spoiler => {
      const button = spoiler.querySelector('.spoiler-btn');
      const content = spoiler.querySelector('.spoiler-content');
      const originalText = button.textContent;
      const hideText = "Ocultar";

      button.addEventListener('click', () => {
        const isHidden = content.classList.contains('hidden');
        content.classList.toggle('hidden');
        button.classList.toggle('active');
        button.textContent = isHidden ? hideText : originalText;
      });
    });
  }

  // Ejecutar cuando se carga la p\xE1gina
  document.addEventListener('DOMContentLoaded', setupSpoilers);

  // Tambi\xE9n ejecutar cuando hay cambios en el DOM (\xFAtil para MDX y navegaci\xF3n de Astro)
  document.addEventListener('astro:page-load', setupSpoilers);
<\/script>`])), maybeRenderHead(), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), title, addAttribute($$definedVars, "style"), renderSlot($$result, $$slots["default"]));
}, "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/components/spoiler.astro", void 0);

export { $$Spoiler as $ };

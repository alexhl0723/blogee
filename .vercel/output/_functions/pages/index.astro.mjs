import { a as createComponent, m as maybeRenderHead, r as renderTemplate, g as renderComponent, i as renderScript, f as addAttribute } from '../chunks/astro/server_BxnBs9Y3.mjs';
import 'kleur/colors';
/* empty css                                  */
import { g as getCollection, a as getEntry, $ as $$Layout, F as FechaRelativa } from '../chunks/FechaRelativa_DOPzyGgV.mjs';
import { $ as $$Header, a as $$Coment } from '../chunks/games_DBQcw8Ig.mjs';
import 'clsx';
import { a as $$Arrow, $ as $$Slidebar } from '../chunks/slidebar_C1WzZUw9.mjs';
export { renderers } from '../renderers.mjs';

const $$HeroImage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] relative overflow-hidden"> <img id="parallax-image" src="/fondoParallax2.jpg" alt="Parallax Image" class="w-full h-full object-cover absolute inset-0"> <div class="relative flex flex-col items-center justify-center h-full text-center px-4 z-10"> <div class="bg-black/30 backdrop-blur-sm p-8 rounded-xl max-w-2xl"> <h1 class="text-5xl font-bold text-white mb-4">BlogZZtita</h1> <p class="text-xl text-white/90 mb-6">Bienvenido a BlogZZtita, tu fuente de noticias y análisis de anime, videojuegos y tecnología.</p> </div> </div> </div>`;
}, "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/components/heroImage.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const articles = (await getCollection("articles")).filter((article) => article.data.publishDate).sort((a, b) => {
    const dateA = new Date(a.data.publishDate).getTime();
    const dateB = new Date(b.data.publishDate).getTime();
    return dateB - dateA;
  });
  const limitedArticles = articles.slice(0, 4);
  const limitArticles2 = articles.slice(4, 7);
  const limitArticles3 = articles.slice(7, 10);
  const limitArticles4 = articles.slice(10, 14);
  function truncateText(text, maxLength = 100) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  }
  const title = "Bienvenido a BlogZZtita";
  await Promise.all(
    articles.map(async (article) => {
      const entry = await getEntry("authors", article.data.author.id);
      return entry?.data;
    })
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="justify-center m-auto"> ${renderComponent($$result2, "Header", $$Header, {})} <!-- Hero Section con Parallax --> ${renderComponent($$result2, "HeroImage", $$HeroImage, {})} <!-- Content Section --> <article class="container mx-auto py-12 px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-10 max-w-[1350px]"> <!-- Main Content --> <section class="lg:w-2/3"> <h2 class="text-3xl font-bold mb-8 border-b pb-4 text-white/80">Últimas noticias</h2> <!-- News Item 1 --> ${limitedArticles.map((article) => {
    const { slug, data } = article;
    const { title: title2, img, description, categoryName, publishDate } = data;
    const truncatedDescription = truncateText(description, 120);
    return renderTemplate`<div class="flex flex-row mb-12 rounded-lg transition-shadow duration-300 overflow-hidden">   <div class="order-2 sm:order-1 md:order-1 w-1/3 sm:w-1/3 md:w-1/3"> <img${addAttribute(img, "src")}${addAttribute(title2, "alt")} class="w-full h-[120px] sm:h-[210px] md:h-[200px] lg:h-[210px] xl:h-[210px] rounded-[5px] object-cover"> </div> <div class="order-1 sm:order-2 md:order-2 w-2/3 sm:w-2/3 md:w-2/3 pl-0 sm:pl-4 md:pl-4 pt-1"> <span class="inline-block text-purple-800 rounded-full text-sm font-medium">${categoryName}</span> <a${addAttribute(`/noticias/${slug}`, "href")}> <h3 class="text-xl font-semibold text-white mb-3 hover:text-purple-400 transition-colors duration-300">${title2}</h3> </a> <p class="text-gray-600 mb-2 sm:mb-4 text-sm sm:text-base">${truncatedDescription}</p> <div class="mb-2 flex items-center text-gray-500 text-sm p-0 m-auto"> ${renderComponent($$result2, "Coment", $$Coment, { "class": "w-4 h-4 sm:w-5 sm:h-5" })} <span class="mr-1">42</span> <span class="mr-1"> - </span> ${renderComponent($$result2, "FechaRelativa", FechaRelativa, { "fechaISO": publishDate.toISOString(), "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/components/tsx/FechaRelativa", "client:component-export": "default" })} </div> <a${addAttribute(`/autores/${article.data.author.id}`, "href")} class="text-gray-500 hover:text-purple-400 transition-colors duration-300">${article.data.author.id}</a> </div> </div>`;
  })} <hr class="border-gray-200 my-10"> <!-- Featured Cards Section --> <section class="flex flex-col md:flex-row gap-5 mb-12"> ${limitArticles2.map((article) => {
    const { slug, data } = article;
    const { title: title2, img, categoryName, publishDate } = data;
    return renderTemplate`<div class="rounded-lg relative overflow-hidden shadow-lg group w-[265px] h-[470px]"> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 z-10"></div> <img${addAttribute(img, "src")}${addAttribute(title2, "alt")} class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"> <div class="absolute bottom-0 left-0 p-6 z-20 w-full"> <span class="inline-block px-3 py-1 bg-purple-600/20 text-white rounded-full text-sm font-medium mb-3">${categoryName}</span> <a${addAttribute(`/noticias/${slug}`, "href")}> <h3 class="text-xl font-semibold text-white mb-3 hover:text-purple-400 transition-colors duration-300">${title2}</h3> </a> <div class="flex items-center text-white/80 text-sm"> ${renderComponent($$result2, "Coment", $$Coment, { "class": "w-5 h-5 mr-1" })} <span class="mr-2">18</span> <span class="mr-2">-</span> ${renderComponent($$result2, "FechaRelativa", FechaRelativa, { "fechaISO": publishDate.toISOString(), "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/components/tsx/FechaRelativa", "client:component-export": "default" })} </div> <a${addAttribute(`/autores/${article.data.author.id}`, "href")} class="text-gray-500 hover:text-purple-400 transition-colors duration-300">${article.data.author.id}</a> </div> </div>`;
  })} </section> <hr class="border-gray-200 my-10"> <!-- News Item 2 --> <section class="mb-12"> ${limitArticles3.map((article) => {
    const { slug, data } = article;
    const { title: title2, img, description, categoryName, publishDate } = data;
    const truncatedDescription = truncateText(description, 120);
    return renderTemplate`<div class="flex flex-col md:flex-row mb-12 rounded-lg transition-shadow duration-300 overflow-hidden"> <div class="md:w-1/3"> <img${addAttribute(img, "src")}${addAttribute(title2, "alt")} class="w-[275px] h-[200px] rounded-[5px] object-cover"> </div> <div class="pl-4 pt-1 md:w-2/3"> <span class="inline-block  text-purple-800 rounded-full text-sm font-medium">${categoryName}</span> <a${addAttribute(`/noticias/${slug}`, "href")}> <h3 class="text-2xl font-bold mb-1 text-white/80 hover:text-purple-400 transition-colors duration-300">${title2}</h3> </a> <p class="text-gray-600 mb-4">${truncatedDescription}</p> <div class="flex items-center text-gray-500 text-sm"> ${renderComponent($$result2, "Coment", $$Coment, { "class": "w-5 h-5 mr-1" })} <span class="mr-4">42 comentarios</span> ${renderComponent($$result2, "FechaRelativa", FechaRelativa, { "fechaISO": publishDate.toISOString(), "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/components/tsx/FechaRelativa", "client:component-export": "default" })} </div> <a${addAttribute(`/autores/${article.data.author.id}`, "href")} class="text-gray-500 hover:text-purple-400 transition-colors duration-300">${article.data.author.id}</a> </div> </div>`;
  })} </section> <hr class="border-gray-200 my-10"> <section class="mb-10"> <h2 class="text-2xl font-bold mb-6 text-white/80">Artículos destacados</h2> <div class="relative overflow-hidden group" id="article-slider"> <!-- Slider container --> <div class="flex gap-4 overflow-x-auto pb-4 snap-x scroll-smooth scrollbar-hide" id="slider-track" style="-ms-overflow-style: none; scrollbar-width: none;"> ${limitArticles4.map((article) => {
    const { slug, data } = article;
    const { title: title2, img, categoryName } = data;
    return renderTemplate`<div class="snap-start shrink-0 w-72 h-56 bg-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden "> <img${addAttribute(img, "src")}${addAttribute(title2, "alt")} class="absolute w-full h-full object-cover opacity-60 transition-transform duration-300 hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div> <div class="absolute bottom-0 left-0 p-4 z-20 text-white"> <span class="text-sm font-medium text-purple-800">${categoryName}</span> <h3 class="font-bold text-lg hover:text-purple-400 transition-colors duration-300 cursor-pointer"><a${addAttribute(`/noticias/${slug}`, "href")}>${title2}</a></h3> </div> <a${addAttribute(`/autores/${article.data.author.id}`, "href")} class="text-gray-500 hover:text-purple-400 transition-colors duration-300">${article.data.author.id}</a> </div>`;
  })} </div> <!-- Navigation buttons --> <button class="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/10  text-purple-800 hover:bg-purple-800/20 p-2 rounded-full shadow-md z-20" id="prevBtn" aria-label="Slide anterior"> ${renderComponent($$result2, "Arrow", $$Arrow, { "class": "rotate-180" })} </button> <button class="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/10  text-purple-800 hover:bg-purple-800/20 p-2 rounded-full shadow-md z-20" id="nextBtn" aria-label="Siguiente slide"> ${renderComponent($$result2, "Arrow", $$Arrow, {})} </button> </div> </section> </section> <!-- Sidebar --> ${renderComponent($$result2, "Slidebar", $$Slidebar, {})} </article> </main> ` })} ${renderScript($$result, "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/pages/index.astro?astro&type=script&index=1&lang.ts")}`;
}, "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/pages/index.astro", void 0);

const $$file = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

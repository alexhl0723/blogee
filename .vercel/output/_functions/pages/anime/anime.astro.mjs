import { a as createComponent, g as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_Blp1FlTl.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Layout, F as FechaRelativa } from '../../chunks/FechaRelativa_DBT7_PJa.mjs';
import { $ as $$Coment, a as $$Discord, b as $$XTwiter } from '../../chunks/XTwiter_1pSEv-Hi.mjs';
import { $ as $$TvAnime, a as $$Games } from '../../chunks/games_D9IbsmnW.mjs';
export { renderers } from '../../renderers.mjs';

const $$Anime = createComponent(async ($$result, $$props, $$slots) => {
  const articles = (await getCollection("articles")).filter((article) => article.data.categoryName === "anime").sort((a, b) => {
    const dateA = new Date(a.data.publishDate).getTime();
    const dateB = new Date(b.data.publishDate).getTime();
    return dateB - dateA;
  });
  function truncateText(text, maxLength = 100) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  }
  const title = "Anime";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col lg:flex-row justify-between gap-10 max-w-[1350px] m-auto"> <section> ${articles.map((article) => {
    const { slug, data } = article;
    const { title: title2, img, description, categoryName, publishDate } = data;
    const truncatedDescription = truncateText(description, 120);
    return renderTemplate`<div class="flex flex-col md:flex-row mb-12 rounded-lg transition-shadow duration-300 overflow-hidden"> <div class="md:w-1/3"> <a${addAttribute(`/noticias/${slug}`, "href")}> <img${addAttribute(img, "src")}${addAttribute(title2, "alt")} class="w-[275px] h-[200px] rounded-[5px] object-cover"> </a> </div> <div class="pl-4 pt-1 md:w-2/3"> <span class="inline-block  text-purple-800 rounded-full text-sm font-medium">${categoryName}</span> <h3 class="text-2xl font-bold mb-1 text-white/80">${title2}</h3> <p class="text-gray-600 mb-4">${truncatedDescription}</p> <div class="flex items-center text-gray-500 text-sm"> ${renderComponent($$result2, "Coment", $$Coment, { "class": "w-5 h-5 mr-1" })} <span class="mr-4">42 comentarios</span> ${renderComponent($$result2, "FechaRelativa", FechaRelativa, { "fechaISO": publishDate.toISOString(), "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/components/tsx/FechaRelativa", "client:component-export": "default" })} </div> </div> </div>`;
  })} </section> <section class="lg:w-1/3"> <div class="sticky top-24"> <!-- Social Media --> <article class="p-6 mb-8"> <h2 class="text-2xl font-bold mb-6 pb-3 border-b text-white/80">Comunidad</h2> <div class="flex items-center mb-5 p-4 rounded-lg transition-colors"> ${renderComponent($$result2, "Discord", $$Discord, { "class": "w-12 h-12 text-indigo-600 flex-shrink-0" })} <div class="ml-4"> <span class="block text-sm text-white/80">Únete a la comunidad</span> <span class="font-medium text-lg text-white/80">Discord</span> </div> <div class="ml-auto"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> </div> </div> <div class="flex items-center p-4 rounded-lg transition-colors"> ${renderComponent($$result2, "XTwiter", $$XTwiter, { "class": "w-12 h-12 text-gray-800 flex-shrink-0" })} <div class="ml-4"> <span class="block text-sm text-white/80">Únete a la comunidad</span> <span class="font-medium text-lg text-white/80">Twitter</span> </div> <div class="ml-auto"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> </div> </div> </article> <!-- Categories --> <article class="p-6 mb-8"> <h2 class="text-2xl font-bold mb-6 pb-3 border-b text-white/80">Categorías</h2> <div class="flex items-center p-4 rounded-lg transition-colors mb-3"> ${renderComponent($$result2, "TvAnime", $$TvAnime, { "class": "w-10 h-10 text-red-500 flex-shrink-0" })} <h3 class="ml-4 font-medium text-white/80">Anime</h3> <div class="ml-auto"> <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </span> </div> </div> <div class="flex items-center p-4 rounded-lg transition-colors"> ${renderComponent($$result2, "Games", $$Games, { "class": "w-10 h-10 text-purple-500 flex-shrink-0" })} <h3 class="ml-4 font-medium text-white/80">Videojuegos</h3> <div class="ml-auto"> <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </span> </div> </div> </article> <!-- Newsletter --> <article class="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-lg shadow-md text-white"> <h3 class="text-xl font-bold mb-3 text-white/80">Suscríbete al boletín</h3> <p class="mb-4 text-white/90">Recibe las últimas noticias directamente en tu correo.</p> <form class="space-y-3"> <input type="email" placeholder="Tu correo electrónico" class="w-full px-4 py-2 rounded-lg text-gray-800 focus:ring focus:ring-indigo-300 outline-none"> <button type="submit" class="w-full bg-white text-indigo-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">Suscríbete</button> </form> </article> </div> </section> </main> ` })}`;
}, "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/pages/anime/anime.astro", void 0);

const $$file = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/pages/anime/anime.astro";
const $$url = "/anime/anime";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Anime,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { a as createComponent, b as createAstro, m as maybeRenderHead, f as addAttribute, r as renderTemplate, g as renderComponent } from './astro/server_Blp1FlTl.mjs';
import 'kleur/colors';
import 'clsx';
import { b as $$XTwiter, a as $$Discord } from './XTwiter_1pSEv-Hi.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { g as getCollection } from './FechaRelativa_DBT7_PJa.mjs';

const $$Astro$2 = createAstro();
const $$Barrita = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Barrita;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-align-justified"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l12 0"></path></svg>`;
}, "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/icons/barrita.astro", void 0);

const $$Astro$1 = createAstro();
const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Facebook;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="url(#a)" height="40" width="40"><defs><linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="a"><stop offset="0%" stop-color="#00000"></stop><stop offset="100%" stop-color="#00000"></stop></linearGradient></defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path><path fill="#FFF" d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path></svg>`;
}, "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/icons/facebook.astro", void 0);

const $$Astro = createAstro();
const $$Luz = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Luz;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brightness-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M12 5l0 -2"></path><path d="M17 7l1.4 -1.4"></path><path d="M19 12l2 0"></path><path d="M17 17l1.4 1.4"></path><path d="M12 19l0 2"></path><path d="M7 17l-1.4 1.4"></path><path d="M6 12l-2 0"></path><path d="M7 7l-1.4 -1.4"></path></svg>`;
}, "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/icons/luz.astro", void 0);

function SearchBar({ searchData }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const searchRef = useRef(null);
  useEffect(() => {
    if (query.length > 0) {
      const results = searchData.filter(
        (item) => item.title.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
      setIsOpen(true);
    } else {
      setFilteredResults([]);
      setIsOpen(false);
    }
  }, [query, searchData]);
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleResultClick = (url) => {
    window.location.href = url;
    setQuery("");
    setIsOpen(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative", ref: searchRef, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center bg-gray-700 rounded-lg px-3 py-2", children: [
      /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Buscar...",
          className: "bg-transparent border-none outline-none text-white pl-2 w-64",
          value: query,
          onChange: (e) => setQuery(e.target.value),
          onFocus: () => query && setIsOpen(true)
        }
      )
    ] }),
    isOpen && filteredResults.length > 0 && /* @__PURE__ */ jsx("div", { className: "absolute mt-2 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "p-2", children: filteredResults.map((result) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "p-2 hover:bg-gray-700 rounded cursor-pointer flex items-center",
        onClick: () => handleResultClick(result.url),
        children: /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "text-white font-medium", children: result.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: result.category })
        ] })
      },
      result.id
    )) }) }),
    isOpen && query && filteredResults.length === 0 && /* @__PURE__ */ jsx("div", { className: "absolute mt-2 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50", children: /* @__PURE__ */ jsxs("div", { className: "p-4 text-center text-gray-400", children: [
      'No se encontraron resultados para "',
      query,
      '"'
    ] }) })
  ] });
}

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const articles = (await getCollection("articles")).filter((article) => article.data.publishDate).sort((a, b) => {
    const dateA = new Date(a.data.publishDate).getTime();
    const dateB = new Date(b.data.publishDate).getTime();
    return dateB - dateA;
  });
  const searchData = articles.map((article) => ({
    id: article.id,
    title: article.data.title,
    category: article.data.categoryName,
    url: `/noticias/${article.slug}`
    //o .split('.md').join('')} si es con el id recuerda alex
  }));
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-around bg-gray-800 text-white p-4 align-center items-center max-w-[2000px] m-auto"> <div class="flex items-center gap-4"> <span>${renderComponent($$result, "Barrita", $$Barrita, {})}</span> <h1 class="text-xl font-bold">Kudasai.</h1> <nav class="flex gap-4 ml-4"> <a href="/" class="hover:text-gray-300">Inicio</a> <a href="/anime/1" class="hover:text-gray-300">Anime</a> <a href="/games/1" class="hover:text-gray-300">Videojuegos</a> <a href="#" class="hover:text-gray-300">Perú</a> <a href="/editor" class="hover:text-gray-300">Editor</a> </nav> </div> <div class="flex items-center gap-4"> <div class="flex gap-2"> <a href="#" aria-label="Facebook">${renderComponent($$result, "Facebook", $$Facebook, { "class": "w-6 h-6" })}</a> <a href="#" aria-label="Twitter">${renderComponent($$result, "XTwiter", $$XTwiter, { "class": "w-6 h-6" })}</a> <a href="#" aria-label="Discord">${renderComponent($$result, "Discord", $$Discord, { "class": "w-6 h-6" })}</a> <button aria-label="Cambiar tema">${renderComponent($$result, "Luz", $$Luz, { "class": "w-6 h-6" })}</button> </div> ${renderComponent($$result, "SearchBar", SearchBar, { "client:load": true, "searchData": searchData, "client:component-hydration": "load", "client:component-path": "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/components/jsx/SearchBar.jsx", "client:component-export": "default" })} </div> <div class="" aria-label="Acciones de usuario"> <!-- <SignedOut>
      <SignInButton class="text-white rounded-full cursor-pointer bg-alex hover:bg-alex/80 transition-colors duration-300 hover:scale-110 hover:transition-transform px-8 py-2" mode="modal">
        Iniciar sesión
      </SignInButton>
    </SignedOut>
    <SignedIn>
      <UserButton/>
    </SignedIn> --> </div> </header>`;
}, "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/components/header.astro", void 0);

export { $$Header as $ };

import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Blp1FlTl.mjs';
import { $ as $$Spoiler } from './spoiler_D6RtzLLH.mjs';
import 'clsx';

const frontmatter = {
  "title": "¡Konosuba Regresa con una Nueva Temporada!",
  "categoryName": "anime",
  "img": "/Konosuba.webp",
  "description": "Los fans de Konosuba están de fiesta: ¡se ha anunciado una nueva temporada de las divertidas aventuras de Kazuma y su peculiar grupo!",
  "publishDate": "2025-04-29T22:16:00.000Z"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["¡Prepárense para más situaciones hilarantes, magia explosiva y la adorable inutilidad de Aqua! Después de una larga espera, se ha confirmado el regreso de ", createVNode(_components.em, {
        children: "Konosuba: God’s Blessing on This Wonderful World!"
      }), " con una nueva temporada. Si bien aún no hay una fecha de lanzamiento exacta, el anuncio ha generado una gran expectativa entre los seguidores de esta popular comedia isekai."]
    }), "\n", createVNode($$Spoiler, {
      title: "¿Qué es Konosuba?",
      children: createVNode(_components.p, {
        children: "¡Estén atentos para más detalles!"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/articles/Konosuba.mdx";
const file = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/Konosuba.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/Konosuba.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

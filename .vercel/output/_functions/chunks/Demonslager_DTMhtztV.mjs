import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Blp1FlTl.mjs';
import 'clsx';

const frontmatter = {
  "title": "Un Nuevo Mundo en Demon Slayer",
  "categoryName": "anime",
  "img": "/demonslager.jpg",
  "description": "Demon Slayer ha sorprendido a sus fans con la inclusión de un nuevo arco que cambia todo lo conocido.",
  "publishDate": "2025-04-23T19:00:00.000Z"
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
  return createVNode(_components.p, {
    children: ["La historia de ", createVNode(_components.em, {
      children: "Demon Slayer"
    }), " continúa con un giro inesperado. El nuevo arco argumental promete revelar secretos sorprendentes sobre los demonios y el poder de los cazadores. ¡No puedes perdértelo!"]
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
const url = "src/content/articles/Demonslager.mdx";
const file = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/Demonslager.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/Demonslager.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Blp1FlTl.mjs';
import 'clsx';

const frontmatter = {
  "title": "El Futuro de One Piece: Nuevos Secretos Revelados",
  "categoryName": "anime",
  "img": "/onepiece.avif",
  "description": "La popularidad de One Piece sigue creciendo, y los secretos más oscuros de la serie finalmente están saliendo a la luz.",
  "publishDate": "2025-04-21T14:45:00.000Z"
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
    children: [createVNode(_components.em, {
      children: "One Piece"
    }), " está en su punto más álgido, y nuevos secretos sobre los personajes y el mundo están siendo revelados. Los fans están ansiosos por conocer el futuro de Luffy y su tripulación. ¡La aventura continúa!"]
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
const url = "src/content/articles/onepiece.mdx";
const file = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/onepiece.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/onepiece.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

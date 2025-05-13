import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Blp1FlTl.mjs';
import 'clsx';

const frontmatter = {
  "title": "Revisión Completa de Final Fantasy XVI",
  "categoryName": "games",
  "img": "/finalfantasy.avif",
  "description": "Final Fantasy XVI ha llegado y ha traído consigo una nueva historia épica, personajes profundos y una jugabilidad mejorada.",
  "publishDate": "2025-04-19T11:30:00.000Z"
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
      children: "Final Fantasy XVI"
    }), " ha causado furor entre los fanáticos de la franquicia. Con una historia profunda y mecánicas innovadoras, este título promete llevar a los jugadores a una nueva aventura inolvidable."]
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
const url = "src/content/articles/finaFantasyFinal.mdx";
const file = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/finaFantasyFinal.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/finaFantasyFinal.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

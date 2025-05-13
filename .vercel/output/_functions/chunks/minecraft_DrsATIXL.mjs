import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Blp1FlTl.mjs';
import 'clsx';

const frontmatter = {
  "title": "Minecraft: Nuevas Actualizaciones del Mundo Abierto",
  "categoryName": "games",
  "img": "/minecraft.jfif",
  "description": "Minecraft sigue evolucionando con nuevas actualizaciones que traen consigo aventuras inéditas y nuevas criaturas.",
  "publishDate": "2025-04-22T17:30:00.000Z"
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
    children: ["Las nuevas actualizaciones de ", createVNode(_components.em, {
      children: "Minecraft"
    }), " han llegado, con nuevas criaturas, biomas, y mecánicas de juego. Los jugadores de todo el mundo están emocionados por explorar el contenido fresco que se les ofrece. ¡Prepárate para una experiencia renovada!"]
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
const url = "src/content/articles/minecraft.mdx";
const file = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/minecraft.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/minecraft.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

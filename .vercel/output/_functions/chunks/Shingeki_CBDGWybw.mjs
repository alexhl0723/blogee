import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Blp1FlTl.mjs';
import 'clsx';

const frontmatter = {
  "title": "Attack on Titan: El Final del Viaje",
  "categoryName": "anime",
  "img": "/atackontita.jpg",
  "description": "La épica historia de Eren Jaeger y la lucha por la libertad ha llegado a su conclusión, dejando a los fans con emociones encontradas.",
  "publishDate": "2025-04-29T21:30:00.000Z"
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
    children: ["El final de ", createVNode(_components.em, {
      children: "Attack on Titan"
    }), " ha sido un evento trascendental en el mundo del anime. Después de años de intensos giros argumentales, batallas desgarradoras y dilemas morales complejos, la adaptación animada del manga de Hajime Isayama ha llegado a su conclusión. Las reacciones de los fans han sido diversas, pero nadie puede negar el impacto cultural y narrativo de esta obra maestra. ¿Qué te pareció el final?"]
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
const url = "src/content/articles/Shingeki.mdx";
const file = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/Shingeki.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/Shingeki.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

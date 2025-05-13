import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Blp1FlTl.mjs';
import 'clsx';

const frontmatter = {
  "title": "Explorando el Mundo de Elden Ring",
  "categoryName": "games",
  "img": "/eldenring.avif",
  "description": "Con una vasta tierra para explorar, *Elden Ring* ofrece uno de los mundos más ricos en detalle y peligro que jamás hayas visto.",
  "publishDate": "2025-04-20T13:00:00.000Z"
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
      children: "Elden Ring"
    }), " ha llegado para revolucionar los juegos de rol de acción. Con un mundo expansivo y repleto de enemigos aterradores, cada rincón de la tierra tiene algo que ofrecer a los valientes exploradores."]
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
const url = "src/content/articles/eldenrig.mdx";
const file = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/eldenrig.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/eldenrig.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

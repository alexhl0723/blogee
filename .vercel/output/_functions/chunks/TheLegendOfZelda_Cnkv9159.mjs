import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Blp1FlTl.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Legend of Zelda: Tears of the Kingdom - Un Éxito Arrollador",
  "categoryName": "games",
  "img": "/TheLegendOfZelda.avif",
  "description": "El último título de la aclamada saga Zelda ha conquistado a crítica y público, vendiendo millones de copias en su lanzamiento.",
  "publishDate": "2025-04-29T10:30:00.000Z"
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
      children: "The Legend of Zelda: Tears of the Kingdom"
    }), " ha demostrado ser un fenómeno imparable. Con su vasto mundo, mecánicas de juego innovadoras y una historia épica, el juego ha recibido elogios universales y se ha convertido en uno de los lanzamientos más exitosos del año. Los jugadores están explorando Hyrule como nunca antes, descubriendo secretos y desatando su creatividad con las nuevas habilidades de Link. ¡Si aún no lo has probado, esta es tu señal!"]
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
const url = "src/content/articles/TheLegendOfZelda.mdx";
const file = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/TheLegendOfZelda.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/TheLegendOfZelda.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

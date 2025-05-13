import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Blp1FlTl.mjs';
import 'clsx';

const frontmatter = {
  "title": "El framework para el contenido estático: Todo lo que necesitas saber sobre Astro",
  "categoryName": "tecnologia",
  "img": "/favicon.svg",
  "description": "Astro es un framework web moderno diseñado específicamente para crear sitios web rápidos y enfocados en el contenido. Desde su lanzamiento inicial, ha ganado una popularidad significativa entre desarrolladores que buscan una solución eficiente para crear sitios estáticos o con poca interactividad. En este artículo, exploraremos en profundidad qué es Astro, sus características principales, cómo funciona, casos de uso y mucho más.",
  "publishDate": "2025-05-04T18:00:00.000Z"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    li: "li",
    ol: "ol",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "¿Qué es Astro?"
    }), "\n", createVNode(_components.p, {
      children: "Astro es un framework web de código abierto que permite a los desarrolladores crear sitios web rápidos con menos JavaScript. Fue creado por los desarrolladores de Snowpack y lanzado en 2021, con la premisa principal de “enviar menos JavaScript”. Astro está diseñado específicamente para sitios centrados en el contenido como blogs, sitios de comercio electrónico, sitios de documentación, portfolios y sitios de marketing."
    }), "\n", createVNode(_components.p, {
      children: "La filosofía de Astro se basa en lo que llaman “Islands Architecture” (Arquitectura de Islas), un enfoque que permite a los desarrolladores combinar componentes estáticos con interactividad dinámica solo donde sea necesario.\r\nCaracterísticas principales de Astro"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Arquitectura de Islas\r\nLa característica más distintiva de Astro es su implementación de la Arquitectura de Islas. En esta arquitectura, la mayor parte de tu sitio se renderiza como HTML estático, y solo las partes interactivas (las “islas”) utilizan JavaScript en el cliente. Esto resulta en tiempos de carga significativamente más rápidos, ya que el navegador necesita analizar y ejecutar menos JavaScript."
      }), "\n", createVNode(_components.li, {
        children: "Zero JavaScript por defecto\r\nAstro adopta un enfoque de “zero JavaScript por defecto”. Esto significa que, a menos que especifiques lo contrario, Astro no enviará ningún JavaScript al navegador. Esto hace que tus sitios sean extremadamente rápidos de cargar y proporciona una excelente experiencia al usuario."
      }), "\n", createVNode(_components.li, {
        children: "Soporte para múltiples frameworks\r\nUna de las características más poderosas de Astro es la capacidad de utilizar componentes de diferentes frameworks juntos en el mismo proyecto. Puedes mezclar y combinar componentes de React, Vue, Svelte, Solid, Preact, y más en un solo proyecto Astro. Esto te da una flexibilidad increíble y te permite aprovechar las bibliotecas y herramientas específicas de cada framework."
      }), "\n", createVNode(_components.li, {
        children: "Renderizado en el servidor\r\nAstro renderiza todos tus componentes en el servidor por defecto. Esto significa que el HTML generado está listo para ser enviado directamente al navegador, lo que resulta en tiempos de carga más rápidos y mejor SEO. Sin embargo, también ofrece opciones para la hidratación en el cliente cuando se necesita interactividad."
      }), "\n", createVNode(_components.li, {
        children: "Optimización de imágenes integrada\r\nAstro incluye optimización de imágenes integrada, lo que te permite servir imágenes en formatos modernos como WebP y AVIF, aplicar transformaciones de tamaño y calidad, y cargar imágenes de manera perezosa (lazy loading) sin configuración adicional."
      }), "\n", createVNode(_components.li, {
        children: "MDX y Markdown integrados\r\nAstro proporciona soporte integrado para contenido en Markdown y MDX, lo que lo hace ideal para blogs y sitios de documentación. Esto te permite escribir contenido en Markdown y enriquecerlo con componentes cuando sea necesario."
      }), "\n", createVNode(_components.li, {
        children: "Enrutamiento basado en archivos\r\nSimilar a frameworks como Next.js, Astro utiliza un sistema de enrutamiento basado en archivos. Esto significa que la estructura de archivos de tu proyecto define la estructura de URL de tu sitio, lo que hace que la navegación sea intuitiva y fácil de mantener."
      }), "\n", createVNode(_components.li, {
        children: "Integración con CMS sin cabeza (Headless CMS)\r\nAstro se integra fácilmente con CMS sin cabeza como Contentful, Sanity, o Strapi, lo que te permite manejar tu contenido de manera externa y conectarlo a tu sitio."
      }), "\n"]
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

const url = "src/content/articles/Astro.mdx";
const file = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/Astro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/Astro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

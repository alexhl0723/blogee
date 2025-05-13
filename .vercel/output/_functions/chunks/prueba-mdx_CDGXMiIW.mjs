import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Blp1FlTl.mjs';
import { $ as $$Spoiler } from './spoiler_D6RtzLLH.mjs';
/* empty css                          */
import 'react/jsx-runtime';
import 'react';
import 'clsx';

const frontmatter = {
  "title": "Prueba mdx",
  "categoryName": "games",
  "img": "https://cdn-images.dzcdn.net/images/cover/8cf1281f979110796c60727e5ece8fc9/0x1900-000000-80-0-0.jpg",
  "description": "Hola mao",
  "publishDate": "2025-05-12T01:19:04.640Z"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "arrow-functions---funciones-de-flecha",
    "text": "Arrow Functions - Funciones de Flecha"
  }, {
    "depth": 3,
    "slug": "ejemplo",
    "text": "Ejemplo"
  }, {
    "depth": 2,
    "slug": "template-literals---literales-de-plantilla",
    "text": "Template Literals - Literales de Plantilla"
  }, {
    "depth": 3,
    "slug": "ejemplo-1",
    "text": "Ejemplo"
  }, {
    "depth": 2,
    "slug": "destructuring-assignment---asignación-por-desestructuración",
    "text": "Destructuring Assignment - Asignación por Desestructuración"
  }, {
    "depth": 3,
    "slug": "ejemplo-2",
    "text": "Ejemplo"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode("article", {
      class: "prose lg:prose-xl w-screen",
      children: [createVNode("a", {
        class: "underline-offset-4",
        href: "https://google.com",
        children: "Google"
      }), createVNode($$Spoiler, {
        title: "Contenido del spoiler",
        children: createVNode("img", {
          src: "https://i.blogs.es/a19bfc/testing/1366_2000.jpg"
        })
      }), createVNode(_components.p, {
        children: "JavaScript ES6 introdujo varias funciones nuevas que han hecho que la codificación en JavaScript sea más eficiente y agradable. Vamos a explorar algunas de estas funciones."
      }), createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: "esta cobardia"
        }), "\n", createVNode(_components.li, {
          children: "esta cobardia"
        }), "\n", createVNode(_components.li, {
          children: "esta yo la he tenido en mis brazos diciendo que no me importaba"
        }), "\n"]
      }), createVNode(_components.h2, {
        id: "arrow-functions---funciones-de-flecha",
        children: "Arrow Functions - Funciones de Flecha"
      }), createVNode(_components.p, {
        children: "las gatos"
      }), createVNode(_components.h3, {
        id: "ejemplo",
        children: "Ejemplo"
      }), createVNode(_components.pre, {
        class: "astro-code github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "javascript",
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " add"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), createVNode(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "a"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "b"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " a "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " b;"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "console."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "add"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")); "
            }), createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Output: 5"
            })]
          })]
        })
      }), createVNode(_components.h2, {
        id: "template-literals---literales-de-plantilla",
        children: "Template Literals - Literales de Plantilla"
      }), createVNode(_components.p, {
        children: "Los literales de plantilla permiten una interpolación de cadenas más fácil y cadenas de varias líneas. Utilizan comillas invertidas (`) en lugar de comillas simples o dobles."
      }), createVNode(_components.h3, {
        id: "ejemplo-1",
        children: "Ejemplo"
      }), createVNode("astro-client-only", {
        "client:only": true,
        npm: "npm install my-package",
        pnpm: "pnpm install my-package",
        bun: "bun install my-package",
        "client:display-name": "PackageTabs",
        "client:component-path": "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/components/jsx/PackageTabs.jsx",
        "client:component-export": "default",
        "client:component-hydration": true
      }), createVNode(_components.pre, {
        class: "astro-code github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "javascript",
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " name"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " 'Jane'"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "console."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "`Hello, ${"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "name"
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}!`"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Output: Hello, Jane!"
            })
          })]
        })
      }), createVNode(_components.h2, {
        id: "destructuring-assignment---asignación-por-desestructuración",
        children: "Destructuring Assignment - Asignación por Desestructuración"
      }), createVNode(_components.p, {
        children: "La asignación por desestructuración le permite extraer valores de matrices u objetos y asignarlos a variables de una manera más concisa."
      }), createVNode(_components.h3, {
        id: "ejemplo-2",
        children: "Ejemplo"
      }), createVNode(_components.pre, {
        class: "astro-code github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "javascript",
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " person"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { name: "
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'Jane'"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", age: "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "30"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " };"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "name"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "age"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " } "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " person;"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "console."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "log"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(name, age); "
            }), createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Output: Jane 30"
            })]
          })]
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Hola zzztitabro"
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

const url = "src/content/articles/prueba-mdx.mdx";
const file = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/prueba-mdx.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/alexr/OneDrive/Desktop/blogereal/bloge/src/content/articles/prueba-mdx.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

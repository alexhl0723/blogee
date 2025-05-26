import '../../styles/global.css'
import { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import HardBreak from '@tiptap/extension-hard-break'
import HorizontalRule from '@tiptap/extension-horizontal-rule'



// Componente para la barra de herramientas del editor
const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="menu-bar flex flex-wrap">
      <div className="menu-group">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
          title="Negrita"
        >
          <strong>B</strong>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
          title="Cursiva"
        >
          <em>I</em>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? 'is-active' : ''}
          title="Subrayado"
        >
          <u>U</u>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
          title="Tachado"
        >
          <s>S</s>
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          title="Insertar línea divisora"
        >
          ⎯
        </button>
        <button
          onClick={() => editor.chain().focus().setHardBreak().run()}
          title="Salto de línea"
        >
          ↵
        </button>
      </div>

      <div className="menu-group">
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
          title="Título 2"
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
          title="Título 3"
        >
          H3
        </button>
      </div>

      <div className="menu-group">
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
          title="Lista de viñetas"
        >
          • Lista
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
          title="Lista numerada"
        >
          1. Lista
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
          title="Bloque de código"
        >
          &lt;/&gt;
        </button>
      </div>

      <div className="menu-group">
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
          title="Alinear a la izquierda"
        >
          ←
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
          title="Centrar"
        >
          ↔
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
          title="Alinear a la derecha"
        >
          →
        </button>
      </div>

      <div className="menu-group">
        <button
          onClick={() => {
            const url = window.prompt('URL:');
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className={editor.isActive('link') ? 'is-active' : ''}
          title="Insertar enlace"
        >
          🔗
        </button>
        <button
          onClick={() => {
            const url = window.prompt('URL de la imagen:');
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          }}
          title="Insertar imagen"
        >
          🖼️
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          title="Deshacer"
        >
          ↩️
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          title="Rehacer"
        >
          ↪️
        </button>
      </div>
    </div>
  );
};

export default function Editor() {
  const [content, setContent] = useState('');
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [autor, setAutor] = useState('');
  const [guardado, setGuardado] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [wordCount, setWordCount] = useState({ characters: 0, words: 0 });
  const [error, setError] = useState('');

  const categorias = ["games", "anime", "tecnologia"];
  const autores = ["zztitabro", "autor2", "elzztitamaumau"];

  const editor = useEditor({
    extensions: [
      HardBreak,
      HorizontalRule,
      StarterKit,
      Placeholder.configure({
        placeholder: 'Escribe tu artículo aquí...',
      }),
      Link.configure({
        openOnClick: true,
        linkOnPaste: true,
      }),
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
    ],
    content: '',
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
      
      // Contar caracteres y palabras
      const text = editor.getText();
      const characters = text.length;
      const words = text.split(/\s+/).filter(word => word.length > 0).length;
      setWordCount({ characters, words });
    },
    immediatelyRender: false,
  });

  const validarFormulario = () => {
    if (!titulo.trim()) {
      setError("Por favor, ingresa un título para el artículo.");
      return false;
    }

    if (!categorias.includes(categoria)) {
      setError("Por favor, selecciona una categoría válida.");
      return false;
    }

    if (!descripcion.trim()) {
      setError("Por favor, ingresa una descripción para el artículo.");
      return false;
    }

    if (!content.trim()) {
      setError("El contenido del artículo no puede estar vacío.");
      return false;
    }

    setError('');
    return true;
  };

  const guardarArticulo = async () => {
    if (!validarFormulario()) {
      return;
    }

    try {
      setCargando(true);
      const articulo = {
        title: titulo,
        content: content,
        categoryName: categoria,
        description: descripcion,
        author: autor,
        img: imagen // Este campo es opcional
      };

      console.log("Enviando datos:", articulo);

      const res = await fetch('https://backend-bloge.vercel.app/bloge/src/content/articles', {//astes http://localhost:4000
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(articulo),
      });
      

      const data = await res.json();
      
      if (res.ok) {
        setGuardado(true);
        setTimeout(() => setGuardado(false), 3000);
        alert(data.message || "Artículo guardado correctamente");
        redirect("/")
      } else {
        setError(data.error || "Error al guardar el artículo");
      }
    } catch (error) {
      setError("Error de conexión: " + error.message);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="editor-wrapper">
      <div className="editor-container flex flex-col">
        <h1 className="editor-title">📝 Editor de artículos</h1>

        {error && (
          <div className="error-message">
            ❌ {error}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="titulo">Título del artículo</label>
          <input
            id="titulo"
            type="text"
            placeholder="Escribe un título impactante..."
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="editor-titulo-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="categoria text-red-500">Categoría</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="editor-categoria-select w-full"
          >
            <option value="">Selecciona una categoría</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="imagen">URL de la imagen (opcional)</label>
          <input
            id="imagen"
            type="text"
            placeholder="https://ejemplo.com/imagen.jpg"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            className="editor-imagen-input w-full"
          />
        </div>

        <div className="form-group">
          <label htmlFor="descripcion">Descripción breve</label>
          <textarea
            id="descripcion"
            placeholder="Escribe una descripción atractiva para el artículo..."
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="editor-descripcion-textarea w-full max-h-48"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="autor">Autor</label>
          <select
            id="autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            className="editor-categoria-select w-full"
          >
            <option value="">Selecciona un autor</option>
            {autores.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="editor-toolbar-wrapper">
          {editor && <MenuBar editor={editor} />}
        </div>

        <EditorContent
          editor={editor}
          className="editor-content border max-h-64"
        />

        <div className="editor-footer">
          <div className="word-count">
            {wordCount.words} palabras | {wordCount.characters} caracteres
          </div>
          
          <div className="editor-actions">
            <button
              onClick={guardarArticulo}
              className="btn-save"
              disabled={cargando}
            >
              {cargando ? '⏳ Guardando...' : '💾 Guardar artículo'}
            </button>

            {guardado && (
              <div className="success-message">
                ✅ Artículo guardado correctamente
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="preview-container">
        <h2 className="preview-title">🔍 Vista previa</h2>
        <div className="preview-content">
          {titulo && <h1 className="preview-article-title">{titulo}</h1>}
          {categoria && <div className="preview-category">Categoría: {categoria}</div>}
          {imagen && <img src={imagen} alt={titulo} className="preview-image" />}
          {descripcion && <p className="preview-description">{descripcion}</p>}
          {autor && <p className="preview-author">Autor: {autor}</p>} 
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="preview-article-content"
          />
          {!content && <p className="preview-placeholder">La vista previa aparecerá aquí...</p>}
        </div>
      </div>
      <style jsx>{`
        .editor-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .editor-wrapper {
            grid-template-columns: 1fr 1fr;
          }
        }

        .editor-container, .preview-container {
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
        }

        .editor-title, .preview-title {
          margin-top: 0;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          font-weight: 600;
          color: #1e293b;
          text-align: center;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #4b5563;
        }

        .editor-titulo-input {
          width: 100%;
          padding: 0.75rem;
          font-size: 1rem;
          font-family: inherit;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background-color: #f8fafc;
          transition: all 0.2s ease;
        }

        .editor-titulo-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
          background-color: #fff;
        }

        .editor-toolbar-wrapper {
          margin-bottom: 0.75rem;
        }

        .menu-bar {
          gap: 8px;
          padding: 8px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
        }

        .menu-group {
          display: flex;
          gap: 4px;
          margin-right: 8px;
        }

        .menu-bar button {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 36px;
          height: 36px;
          padding: 0 8px;
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 14px;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .menu-bar button:hover {
          background-color: #f1f5f9;
          color: #334155;
        }

        .menu-bar button.is-active {
          background-color: #eff6ff;
          border-color: #bfdbfe;
          color: #3b82f6;
        }

        .menu-bar button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .editor-content {
          min-height: 300px;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          padding: 1rem;
          background-color: #fff;
          overflow-wrap: break-word;
          word-wrap: break-word;
          word-break: break-word;
          overflow-y: auto;
          line-height: 1.6;
          font-size: 16px;
        }

        .editor-content:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }

        .editor-content p {
          margin-bottom: 1em;
        }

        .editor-content ul, .editor-content ol {
          padding-left: 2em;
          margin-bottom: 1em;
        }

        .editor-content h1 {
          font-size: 1.8em;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
        }

        .editor-content h2 {
          font-size: 1.5em;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
        }

        .editor-content h3 {
          font-size: 1.3em;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
        }

        .editor-content a {
          color: #3b82f6;
          text-decoration: underline;
        }

        .editor-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1em 0;
        }

        .editor-content blockquote {
          border-left: 4px solid #e2e8f0;
          padding-left: 1em;
          color: #64748b;
          font-style: italic;
          margin: 1em 0;
        }

        .editor-content pre {
          background-color: #f8fafc;
          padding: 1em;
          border-radius: 0.5rem;
          overflow-x: auto;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.9em;
          margin: 1em 0;
        }

        .editor-content code {
          background-color: #f1f5f9;
          padding: 0.2em 0.4em;
          border-radius: 0.25rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.9em;
        }

        .editor-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .word-count {
          font-size: 0.875rem;
          color: #64748b;
        }

        .editor-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .btn-save {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          background-color: #3b82f6;
          color: white;
          font-weight: 600;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .btn-save:hover:not(:disabled) {
          background-color: #2563eb;
        }

        .btn-save:disabled {
          background-color: #94a3b8;
          cursor: not-allowed;
        }

        .success-message {
          color: #10b981;
          font-weight: 500;
        }

        .preview-container {
          position: sticky;
          top: 2rem;
          height: fit-content;
        }

        .preview-content {
          background-color: #f8fafc;
          border-radius: 0.5rem;
          padding: 2rem;
          min-height: 300px;
          overflow-wrap: break-word;
          word-wrap: break-word;
          word-break: break-word;
          overflow-y: auto;
        }

        .preview-article-title {
          margin-top: 0;
          margin-bottom: 1.5rem;
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
        }

        .preview-article-content {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
          line-height: 1.7;
          color: #334155;
        }

        .preview-placeholder {
          color: #94a3b8;
          font-style: italic;
          text-align: center;
          margin-top: 4rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .menu-bar {
            flex-direction: column;
            align-items: flex-start;
          }

          .menu-group {
            width: 100%;
            justify-content: flex-start;
            margin-right: 0;
          }

          .editor-footer {
            flex-direction: column;
            align-items: flex-start;
          }

          .editor-actions {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
          }

          .btn-save {
            width: 100%;
          }
            /* Mejora de espaciado y legibilidad */
.editor-content, .preview-article-content {
  p, h1, h2, h3, ul, ol, pre, blockquote {
    margin: 1.5em 0;
    line-height: 1.8;
  }

  img {
    margin: 2em auto;
  }

  blockquote {
    border-left: 3px solid #3b82f6;
    padding-left: 1rem;
    color: #475569;
  }

  pre {
    background: #1e293b;
    color: white;
    padding: 1rem;
    border-radius: 0.5rem;
  }
}
  ul, ol {
  padding-left: 1.5rem;

  li {
    margin: 0.5em 0;
    &::marker {
      color: #64748b;
    }
  }
}
        }
      `}</style>
    </div>
    
    
  );
}
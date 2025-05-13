import { useState, useEffect } from "react";

export default function LikeCounter({ articleId = "default" }) {
  // Aseguramos que el componente solo se renderice en el cliente
  if (typeof window === 'undefined') return null;
  const storageKey = `likes-${articleId}`;
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Leer del localStorage al cargar
  useEffect(() => {
    // Verificamos que estamos en el cliente
    if (typeof window !== 'undefined') {
      const storedLikes = localStorage.getItem(storageKey);
      const userLiked = localStorage.getItem(`${storageKey}-user`) === "true";
      
      if (storedLikes) {
        setLikes(parseInt(storedLikes));
      }
      
      if (userLiked) {
        setHasLiked(true);
      }
    }
  }, [storageKey]);

  // Guardar en localStorage al cambiar
  const handleLike = () => {
    if (hasLiked) return;
    
    const newLikes = likes + 1;
    setLikes(newLikes);
    setHasLiked(true);
    setIsAnimating(true);
    
    // Guardar el total de likes
    localStorage.setItem(storageKey, newLikes.toString());
    // Guardar que este usuario dio like
    localStorage.setItem(`${storageKey}-user`, "true");
    
    // Quitar la animación después de un segundo
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div 
      className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 my-8 max-w-xs mx-auto">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span 
          className={`text-3xl transition-transform duration-300 ${
            isAnimating ? "scale-150 animate-pulse" : ""
          } ${hasLiked ? "text-red-500" : "text-gray-500"}`}
        >
          👍
        </span>
        <span className="text-xl font-semibold text-gray-700 dark:text-gray-300 min-w-8 text-center">
          {likes}
        </span>
      </div>
      
      <button 
        onClick={() => {
          if (typeof window !== 'undefined') {
            handleLike();
          }
        }}
        disabled={hasLiked}
        className={`w-full py-2 px-4 rounded-md font-medium text-white transition-all duration-200 
          ${hasLiked 
            ? "bg-green-500 hover:bg-green-500 cursor-default" 
            : "bg-blue-500 hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0"
          }
          focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-90`}
      >
        {hasLiked ? "¡Gracias por tu like!" : "Me gusta"}
      </button>
      
      {/* Opcional: Contador de texto abajo */}
      <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        {likes === 0 
          ? "Sé el primero en dar like"
          : likes === 1 
            ? "1 persona ha dado like" 
            : `${likes} personas han dado like`}
      </div>
    </div>
  );
}
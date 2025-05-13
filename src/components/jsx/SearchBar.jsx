import { useState, useRef, useEffect } from 'react';

export default function SearchBar({ searchData }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const searchRef = useRef(null);

  // Filtrar resultados cuando cambia la consulta
  useEffect(() => {
    if (query.length > 0) {
      const results = searchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
      setIsOpen(true);
    } else {
      setFilteredResults([]);
      setIsOpen(false);
    }
  }, [query, searchData]);

  // Cerrar la búsqueda al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Manejar selección de un resultado
  const handleResultClick = (url) => {
    window.location.href = url;
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Buscar..."
          className="bg-transparent border-none outline-none text-white pl-2 w-64"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
        />
      </div>

      {/* Resultados de búsqueda */}
      {isOpen && filteredResults.length > 0 && (
        <div className="absolute mt-2 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            {filteredResults.map((result) => (
              <div
                key={result.id}
                className="p-2 hover:bg-gray-700 rounded cursor-pointer flex items-center"
                onClick={() => handleResultClick(result.url)}
              >
                <div className="flex-1">
                  <p className="text-white font-medium">{result.title}</p>
                  <p className="text-gray-400 text-sm">{result.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mensaje cuando no hay resultados */}
      {isOpen && query && filteredResults.length === 0 && (
        <div className="absolute mt-2 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50">
          <div className="p-4 text-center text-gray-400">
            No se encontraron resultados para "{query}"
          </div>
        </div>
      )}
    </div>
  );
}
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const MobileFilter = ({ onClose, categories, filters, setFilters }) => {
  const [query, setQuery] = useState({ sort: null, category: null });
  const containerRef = useRef();
  const router = useRouter();

  console.log({query})

  useEffect(() => {
    if (filters.sort) {
      setQuery({ ...query, sort: filters.sort });
    }
  }, [filters]);

  const handleClose = (e) => {
    if (e.target === containerRef.current) {
      onClose();
    }
  };

  const handleFilter = () => {


    setFilters({ ...filters, sort: "hola" });

    if (query.category && query !== "null") {
      setFilters({ ...filters, category: query.category });
    } else {
      setFilters({ ...filters, category: null });
    }

    onClose();
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClose}
      className="md:hidden w-screen h-screen fixed bg-opacity top-0 left-0 px-2 flex items-center justify-center"
    >
      <div className="w-full max-w-[30rem] h-[30rem] bg-white rounded-xl flex flex-col justify-between overflow-hidden">
        <div className="w-full py-5 bg-btn text-white px-2 text-xl flex justify-between items-center">
          <p>Filtros</p>
          <i
            onClick={() => onClose()}
            className="bx bx-x text-3xl cursor-pointer"
          ></i>
        </div>
        <div className="flex flex-col gap-4 px-2  flex-1 py-4">
          <div className="flex flex-col gap-2">
            <p>Filtrar por:</p>
            <select
              onChange={(e) => {
                setQuery({ ...query, sort: e.target.value });
              }}
          
              className="w-full py-2 rounded-xl border border-btn focus:ring-btn focus:border-btn"
            >
              <option value="-createdAt">Mas nuevos</option>
              <option value="-price">Precio (Mayor a menor)</option>
              <option value="price">Precio (Menor a mayor)</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <p>Categorias:</p>
            <select
              onChange={(e) => {
                setQuery({ ...query, category: e.target.value });
              }}
              value={filters.category}
              className="w-full py-2 rounded-xl border border-btn focus:ring-btn focus:border-btn"
            >
              <option selected disabled>
                Categoria
              </option>
              {categories.map((i) => {
                return (
                  <option key={i._id} value={i._id}>
                    {i.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="py-2 px-2">
          <button
            onClick={handleFilter}
            className="w-full py-3 rounded-xl text-white bg-btn"
          >
            Filtrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;

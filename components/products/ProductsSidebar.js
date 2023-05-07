import React from "react";
import sidebarFilters from "./products-sidebar/sidebarFilters";

const ProductsSidebar = ({categories, filters, setFilters}) => {
  return (
    <div className="hidden md:flex w-[15rem] bg-white flex-col rounded-xl h-[calc(100vh-6rem)] min-h-[40rem] shadow-2xl">
      <div className="flex flex-col my-2  py-4 pl-2 border-b pr-4 gap-1">
        <p className="font-normal text-lg">Buscar</p>
        <div className="relative">
          <input
            className="rounded-xl py-2 w-full px-2 bg-secondarybg text-white placeholder:text-white"
            type="text"
            placeholder="Buscar"
          />
          <i className="bx bxs-search absolute top-[50%] right-2 -translate-y-[50%]"></i>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-4 border-b pl-2 pr-4">
        <p className="font-normal text-lg">Filtrar por:</p>
        {sidebarFilters.map((i, key) => {
          return (
            <div key={key}>
              <div onClick={()=> setFilters({...filters, sort: i.query})} className="flex gap-2 items-center font-light cursor-pointer">
                <div className={`w-4 h-4 rounded-full ${i.query === filters.sort ? "bg-btn" : "bg-secondarybg"} `}></div>
                <p>{i.name}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col py-4 pl-2 gap-2 pr-4 ">
        <p className="font-normal text-lg">Categorias:</p>
        {categories.map((item, key) => (
          <div key={item}>
            {" "}
            <div onClick={()=> setFilters({...filters, category: item._id})} className="flex gap-2 items-center font-light cursor-pointer">
              <div className={`w-4 h-4 rounded-full  ${item._id === filters.category ? "bg-btn" : "bg-secondarybg"} `}></div>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSidebar;

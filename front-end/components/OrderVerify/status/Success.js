import React from "react";
import Link from "next/link";

const Success = ({ order }) => {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] ">
      <div className="w-full h-[14rem]  bg-green-400 flex items-center justify-center text-2xl font-bold text-white">
        {" "}
        <p>Aprobado</p>
      </div>
      <div className="w-full h-fit flex justify-center">
        <div className="w-[80%] min-h-[30rem] flex flex-col justify-between gap-3 bg-white shadow-2xl rounded-2xl -translate-y-[10%]">
          <div>
            <div className="w-full flex gap-2 py-4 border-b px-4 ">
              <p>Nombre:</p>
              <p>{order.name}</p>
            </div>
            <div className="w-full flex gap-2 py-4 border-b px-4 ">
              <p>Email:</p>
              <p>{order.email}</p>
            </div>
            <div className="w-full flex gap-2 py-4 border-b px-4 ">
              <p>Dni:</p>
              <p>{order.dni}</p>
            </div>
            <div className="w-full flex gap-2 py-4 border-b px-4 ">
              <p>Telefono:</p>
              <p>{order.phone}</p>
            </div>
            <div className="w-full flex flex-col gap-2 py-4 border-b px-4 ">
              <p>Productos</p>
              {order.products.map((i) => (
                <div className="flex gap-4" key={i._id}>
                  <p>- {i.name}:</p>
                  <p>${i.price}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="px-4">Revisar dias y horarios de retiro</p>
            <div className="w-full flex justify-between py-4 border-t text-xl px-4 ">
              <p>Total:</p>
              <p>${order.total}</p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center py-2">
            <Link
              href={"/retiros"}
              className="w-fit px-8 py-2 rounded-xl bg-btn text-white"
            >
              Consultar retiros
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

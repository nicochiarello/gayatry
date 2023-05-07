import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)]">
      <div className="w-full h-[14rem]  bg-red-500 flex items-center justify-center text-2xl font-bold text-white">
        {" "}
        <p>Error</p>
      </div>
      <div className="w-full h-fit flex flex-col justify-between items-center">
        <div className="w-[80%] min-h-[30rem] flex flex-col justify-center items-center gap-3 bg-white shadow-2xl rounded-2xl -translate-y-[10%] text-center">
          <p>No hemos podido confirmar su compra</p>
          <p>El proceso de confirmacion puede demorar algunas horas</p>
        </div>
        <Link
          href={"/retiros"}
          className="px-8 py-2 rounded-xl bg-btn text-white"
        >
          Consultar retiros
        </Link>
      </div>
    </div>
  );
};

export default Error;

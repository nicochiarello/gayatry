import { useRef } from "react";
import Link from "next/link";

const MobileNavbar = ({ onClose }) => {
  const ref = useRef();

  const handleClose = (e) => {
    if (ref.current === e.target) {
      onClose();
    }
  };
  
  return (
    <div
      ref={ref}
      onClick={handleClose}
      className="md:hidden w-screen h-screen bg-opacity  fixed top-0 left-0 z-50"
    >
      <div className="w-[80%] min-w-[20rem] max-w-[25rem] h-full bg-white py-2 flex flex-col gap-6">
        <div className="flex gap-3 items-center px-2">
          <div className="flex w-[3rem] h-[3rem] text-xl font-medium items-center justify-center bg-main rounded-full text-yellow">
            FH
          </div>
          <p className="font-semibold text-xl text-main">Feria Hermana</p>
        </div>
        <div className="flex flex-col gap-4 text-xl ">
          <Link className="py-4 px-3" href={"/"}>
            Inicio
          </Link>
          <Link className="py-4 px-3" href={"/productos"}>
            Productos
          </Link>
          <Link className="py-4 px-3" href={"/retiros"}>
            Retiros
          </Link>
          <a className="py-4 px-3" href={"https://wa.me/5492613662494"}>
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;

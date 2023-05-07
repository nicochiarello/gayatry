import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-fit py-6 md:h-[10rem] bg-white text-main flex items-center justify-center text-lg">
      <div className="flex flex-col md:flex-row justify-center md:justify-between px-4 items-center w-[1200px] px-2 gap-4">
        <div className="flex flex-col gap-2 items-center justify-center ">
          <div className="h-[3.5rem] w-[3.5rem] rounded-full bg-main flex items-center justify-center text-yellow text-3xl">
            <p>FH</p>
          </div>
          <p className="text-xl">Feria Hermana</p>
        </div>
        <div className="hidden sm:flex flex-col gap-2 items-center">
          <Link href={"/productos?page=1"}>Productos</Link>
          <Link href={"/retiros"}>Retiros</Link>
          <a href={"https://wa.me/5492613662494"}>Contacto</a>
        </div>
        <div className="hidden sm:flex flex-col gap-2 items-center">
          <p>Redes sociales</p>
          <a href={"https://www.instagram.com/feriahermana/?hl=es"}>
            Instagram
          </a>
          <a href={"https://wa.me/5492613662494"}>Whatsapp</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

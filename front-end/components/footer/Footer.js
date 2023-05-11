import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-fit py-6 md:h-[10rem] bg-stone-900 text-white flex items-center justify-center text-lg">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-[1200px] px-2 gap-4">
        <div className="flex flex-col gap-2 items-center justify-center ">
          <div className="hidden md:flex w-[3rem] h-[3rem] text-xl font-medium items-center justify-center bg-transparent rounded-full text-yellow">
            <img src="logo.png" alt="" />
          </div>
          <p className="text-xl uppercase">Gayatry</p>
        </div>
        <div className="hidden sm:flex flex-col gap-2 items-center">
          <Link href={"/"}>Inicio</Link>
          <Link href={"/productos?page=1"}>Productos</Link>
          <a href={"https://wa.me/5492613642922"}>Contacto</a>
        </div>
        <div className="hidden sm:flex flex-col gap-2 items-center">
          <p>Redes sociales</p>
          <a href={"https://www.instagram.com/gayatrydecoybienestar/"}>
            Instagram
          </a>
          <a href={"https://wa.me/"}>Whatsapp</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

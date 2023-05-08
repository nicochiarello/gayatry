import Head from "next/head";
import Cart from "../components/cart/Cart";
import { useSelector } from "react-redux";

export default function Home() {
  const cartStatus = useSelector((state) => state.cart.value.status);
  return (
    <>
      <Head>
        <title>Gayatry Store</title>
        <meta name="description" content="Tienda digital gayatry store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full flex-col gap-12 pt-4 relative">
      {cartStatus && <Cart />}
        <div className="w-full relative h-[40rem] h- md:h-[38rem] overflow-hidden flex flex-col md:flex-row rounded-md">
          <div className="flex items-center justify-center h-[100%] w-[100%] bg-black text-white relative">
            <img
              className="w-full h-full object-cover opacity-60"
              src="/main-bg.png"
              alt=""
            />
            <div className="absolute text-center md:text-left left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] md:left-[5rem] md:translate-x-0">
              <p className="font-bold text-[55px] md:text-[65px] leading-[50px] md:leading-[40px]">GAYATRY</p>
              <p className="font-thin text-[30px]  md:text-[45px] md:ml-1">Deco y Bienestar</p>
            </div>
          </div>
        </div>
        <h3 className="text-center text-white text-4xl">Destacados</h3>

        <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-0 place-items-center">
          <div className=" w-full relative max-w-[24rem] sm:max-w-none h-[28rem] flex flex-col items-center overflow-hidden">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-black">
              <img
                className="w-full h-full object-cover opacity-60"
                src="/sahumerios.png"
                alt=""
              />
            </div>
            <div className="w-[70%] py-4 bg-white -translate-y-[2rem] text-center rounded-xl shadow-lg">
              <p>Producto</p>
            </div>
          </div>
          <div className=" w-full relative max-w-[24rem] sm:max-w-none h-[28rem] flex flex-col items-center overflow-hidden">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-black">
              <img
                className="w-full h-full object-cover opacity-60"
                src="/sahumerios.png"
                alt=""
              />
            </div>
            <div className="w-[70%] py-4 bg-white -translate-y-[2rem] text-center rounded-xl shadow-lg">
              <p>Producto</p>
            </div>
          </div>
          <div className=" w-full relative max-w-[24rem] sm:max-w-none h-[28rem] flex flex-col items-center overflow-hidden">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-black">
              <img
                className="w-full h-full object-cover opacity-60"
                src="/sahumerios.png"
                alt=""
              />
            </div>
            <div className="w-[70%] py-4 bg-white -translate-y-[2rem] text-center rounded-xl shadow-lg">
              <p>Producto</p>
            </div>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col flex-wrap items-center justify-center gap-8 px-2 sm:px-0">
          <div className=" w-full relative h-[30rem] flex flex-col items-center overflow-hidden">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-black">
              <img
                className="w-full h-full object-cover opacity-60"
                src="/sahumerios.png"
                alt=""
              />
            </div>
            <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] py-4 text-5xl font-bold text-white">
              <p>SAHUMERIOS</p>
            </div>
          </div>
          <div className=" w-full relative h-[30rem] flex flex-col items-center overflow-hidden">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-black">
              <img
                className="w-full h-full object-cover opacity-60"
                src="/ahumadores.png"
                alt=""
              />
            </div>
            <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] py-4 text-5xl font-bold text-white">
              <p>AHUMADORES</p>
            </div>
          </div>
          <div className=" w-full relative h-[30rem] flex flex-col items-center overflow-hidden">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-black">
              <img
                className="w-full h-full object-cover opacity-60"
                src="/yoga.png"
                alt=""
              />
            </div>
            <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] py-4 text-5xl font-bold text-white">
              <p>YOGA</p>
            </div>
          </div>
        </div>
        {/* <div className="w-full h-[40rem] bg-green-400 relative">
          <img className="object-cover w-full h-full" src="/fh2.jpeg" alt="" />
          <div className="h-[100%] w-[100%] py-4  absolute top-0 left-0 flex items-center justify-center ">
            <div className="w-[90%] md:w-[60%] md:min-w-[40rem] h-[100%] bg-btn rounded-sm text-black flex flex-col items-center justify-between py-[4rem]">
              <div className="text-center flex gap-4 flex-col px-2 md:px-8">
                <h4 className="text-[50px] md:text-[75px]">SUMATE A LA MODA CIRCULAR</h4>
                <p className="text-2xl md:text-3xl">¡Vestirte con onda es posible!</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl">VENTA ONLINE</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="w-full h-fit py-8 flex items-center justify-center px-2 md:px-0">
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center text-white">
            <i className="bx bxl-instagram text-[80px] md:text-[100px]"></i>
            <div className="flex flex-col items-center md:items-start md:justify-center">
              <p className="text-2xl font-semibold ">
                Seguinos en nuestras redes
              </p>
              <p className="text-xl">@gayatrydecoybienestar</p>
            </div>
          </div>
        </div>
        <div className="w-full h-fit md:h-[18rem] flex flex-col md:flex-row mb-8 text-white px-2">
          <div className="w-full md:w-1/3 h-full flex flex-col  py-4 items-center justify-center gap-2 px-6 border-b md:border-r md:border-b-0 border-white">
            <i className="bx bxs-truck text-[60px] md:text-[80px]"></i>
            <div className="flex flex-col gap-1 text-xl text-center">
              <p className="font-semibold">Retiras por nuestras direcciones</p>
              <p>Luján de Cuyo</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-full flex flex-col py-4 items-center justify-center gap-2 px-6 border-b md:border-r md:border-b-0 border-white">
            <i className="bx bxs-credit-card text-[60px] md:text-[80px]"></i>
            <div className="flex flex-col gap-1 text-xl items-center justify-center text-center">
              <p className="font-semibold">Pagá como quieras</p>
              <p>
                Tarjetas de débito y crédito, mercado pago, transferencia
                bancaria o efectivo
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-full py-4 flex flex-col items-center justify-center gap-2 px-6">
            <i className="bx bxs-lock-alt text-[60px] md:text-[80px]"></i>
            <div className="flex flex-col gap-1 text-xl items-center justify-center text-center">
              <p className="font-semibold">Compra con seguridad</p>
              <p>Tus datos siempre protegidos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

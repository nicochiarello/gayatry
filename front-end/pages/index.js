import Head from "next/head";
import Cart from "../components/cart/Cart";
import { useSelector } from "react-redux";

export default function Home() {
  const cartStatus = useSelector((state) => state.cart.value.status);
  return (
    <>
      <Head>
        <title>Feria Hermana</title>
        <meta name="description" content="Feria hermana store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full flex-col gap-12 pt-4 relative">
      {cartStatus && <Cart />}
        <div className="w-full h-[40rem] h- md:h-[38rem] rounded-sm overflow-hidden flex flex-col md:flex-row">
          <div className="flex items-center justify-center h-[50%] md:h-[100%] md:w-[50%] bg-black text-btn relative">
            <img
              className="w-full h-full object-cover opacity-60 "
              src="/mainfh.jpg"
              alt=""
            />
            <h1 className="text-5xl font-semibold absolute top-[50%] -translate-y-[50%] shadow-lg">
              FERIA HERMANA
            </h1>
          </div>
          <div className="flex items-center justify-center basis-[50%] bg-btn">
            <div className="flex flex-col gap-3 w-fit items-center">
              <h1 className="text-5xl font-semibold">BIENVENIDAS</h1>
              <div className="bg-white px-2 py-2">
                <h1 className="text-2xl text-btn font-semibold">
                  BUENO-BONITO-BARATO
                </h1>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-center text-2xl">Destacados</h3>
        <div className="w-full h-fit flex flex-wrap items-center justify-center gap-4">
          <div className=" w-[20%] min-w-[18rem] h-[30rem] flex flex-col items-center overflow-hidden">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover "
                src="/pantalon.jpeg"
                alt=""
              />
            </div>
            <div className="w-[8rem] py-4 bg-white -translate-y-[2rem] text-center rounded-xl shadow-lg">
              <p>Pantalones</p>
            </div>
          </div>
          <div className="w-[20%] min-w-[18rem] h-[30rem] flex flex-col items-center overflow-hidden">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover "
                src="/campera.jpeg"
                alt=""
              />
            </div>
            <div className="w-[8rem] py-4 bg-white -translate-y-[2rem] text-center rounded-xl shadow-lg">
              <p>Camperas</p>
            </div>
          </div>
          <div className="w-[20%] min-w-[18rem] h-[30rem] flex flex-col items-center overflow-hidden">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover "
                src="/buzo.jpeg"
                alt=""
              />
            </div>
            <div className="w-[8rem] py-4 bg-white -translate-y-[2rem] text-center rounded-xl shadow-lg">
              <p>Sweaters</p>
            </div>
          </div>
          <div className="w-[20%] min-w-[18rem] h-[30rem] flex flex-col items-center overflow-hidden">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover "
                src="/remera.jpeg"
                alt=""
              />
            </div>
            <div className="w-[8rem] py-4 bg-white -translate-y-[2rem] text-center rounded-xl shadow-lg">
              <p>Remeras</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[40rem] bg-green-400 relative">
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
        </div>
        <div className="w-full h-fit py-8 flex items-center justify-center">
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center text-btn">
            <i className="bx bxl-instagram text-[80px] md:text-[100px]"></i>
            <div className="flex flex-col items-center md:items-start md:justify-center">
              <p className="text-2xl font-semibold ">
                Seguinos en nuestras redes
              </p>
              <p className="text-xl">@feriahermana</p>
            </div>
          </div>
        </div>
        <div className="w-full h-fit md:h-[18rem] flex flex-col md:flex-row mb-8">
          <div className="w-full md:w-1/3 h-full flex flex-col  py-4 items-center justify-center gap-2 px-6 border-b md:border-r md:border-b-0 border-black">
            <i className="bx bxs-truck text-[60px] md:text-[80px]"></i>
            <div className="flex flex-col gap-1 text-xl text-center">
              <p className="font-semibold">Retiras por nuestras direcciones </p>
              <p>Gran Mendoza</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-full flex flex-col py-4 items-center justify-center gap-2 px-6 border-b md:border-r md:border-b-0 border-black">
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

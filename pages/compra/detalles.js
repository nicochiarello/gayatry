import { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/process/cart/CartItem";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const ProcessDetails = () => {
  const cart = useSelector((state) => state.cart.value.cart);
  const cartPrice = useSelector((state) => state.cart.value.price);
  const router = useRouter();

  useEffect(() => {
    if (!cart.length) {
      router.push("/productos");
    }
  }, [cart]);

  return (
    <div className="w-full h-[calc(100vh-5rem)]  px-4 flex items-center justify-center gap-6 ">
      <Head>
        <title>Detalles</title>
        <meta name="description" content="Feria hermana store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-[85%] px-2 sm:p-5 flex flex-col justify-between shadow-2xl bg-white rounded-xl ">
        <div className="flex w-full h-[4rem] justify-center sm:justify-between items-center">
          <h3 className="text-xl">Detalles de compra</h3>
        </div>
        <div className="w-full h-[calc(100%-9rem)] overflow-y-scroll">
          {cart.length && (
            <table className="w-full text-sm text-left text-gray-400 rounded h-fit">
              <thead className="border-b ">
                <th scope="col" className="py-3 px-2"></th>
                <th scope="col" className="py-3 px-2">
                  Nombre
                </th>
                <th scope="col" className="py-3 px-2">
                  Talle
                </th>
                <th scope="col" className="py-3 px-2">
                  Precio
                </th>
              </thead>
              <tbody>
                {cart.map((item) => {
                  return <CartItem key={item._id} item={item} />;
                })}
              </tbody>
            </table>
          )}
        </div>
        <div className="flex w-full h-[4rem] justify-between items-center border-t">
          <div className="flex gap-3">
            <p>Total: ${cartPrice}</p>
          </div>
          <Link
            href="procesamiento"
            className="px-10 py-2 rounded-xl bg-btn text-white flex items-center justify-center"
          >
            <p>Confirmar</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProcessDetails;

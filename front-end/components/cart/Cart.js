import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { modifyStatus, close } from "../../slices/cart/cartSlice";
import { remove, emptyCart } from "../../slices/cart/cartSlice";
import { useRouter } from "next/router";

const Cart = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart.value.cart);
  const dispatch = useDispatch();
  const cartRef = useRef();

  const handleClick = (e) => {
    if (e.target === cartRef.current) {
      dispatch(modifyStatus());
    }
  };

  useEffect(() => {
    let handleClose = () => {
      dispatch(close());
    };
    router.events.on("routeChangeComplete", handleClose);

    return () => {
      router.events.off("routeChangeComplete", handleClose);
    };
  }, [router]);

  return (
    <div
      onClick={handleClick}
      ref={cartRef}
      className="bg-black w-full h-full fixed top-0 left-0 flex justify-end bg-opacity z-50 overflow-y-scroll"
    >
      <div className="w-full h-full min-h-[40rem] max-w-[22rem] pb-12 sm:pb-4 sm:w-[28rem] bg-white py-3 px-2 ">
        <div className="flex items-center justify-between sm:justify-center">
          <h4 className="text-lg">Productos seleccionados</h4>
          <div
            onClick={() => dispatch(modifyStatus())}
            className="sm:hidden flex items-center cursor-pointer"
          >
            <i className=" bx bx-x text-3xl"></i>
          </div>
        </div>
        <div className="flex flex-col my-2 h-[calc(100%-14rem)] scrollbar-hide">
          {cart.map((i, key) => (
            <div
              className="w-full border-b py-3 h-[6.5rem] flex px-1 justify-between"
              key={key}
            >
              <div className="flex gap-4">
                <div className="w-[5rem] h-full rounded-xl overflow-hidden">
                  {i.images && (
                    <img
                      className="w-full h-full object-cover"
                      src={
                        process.env.NEXT_PUBLIC_IMAGE_URL +
                        "/" +
                        i.images[0].secureUrl
                      }
                      alt=""
                    />
                  )}
                </div>
                <div className="flex flex-col h-full justify-between py-1">
                  <p>{i.name}</p>
                  <p>${i.price}</p>
                </div>
              </div>
              <div
                onClick={() => dispatch(remove(i))}
                className="flex items-center h-full px-2 cursor-pointer"
              >
                <i className="bx bx-trash text-2xl"></i>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-[12rem] flex flex-col items-center justify-between py-2">
          <div className="flex justify-between items-center w-full px-2 py-4">
            <p>Vaciar carrito</p>
            <i
              onClick={() => dispatch(emptyCart())}
              className="bx bx-trash text-2xl cursor-pointer"
            ></i>
          </div>
          <div className="flex justify-between items-center border-y  w-full px-2 py-4">
            <p>Total:</p>
            <p>
              $
              {cart.reduce((acc, i) => {
                return i.price + acc;
              }, 0)}
            </p>
          </div>
          <button
            onClick={() => {
              if (cart.length) {
                let text = `Hola!%20Quiero%20consultar%20por%20los%20siguientes%20productos:${
                  cart.length &&
                  cart.map((i) => {
                    let aux = `%0A-%20${i.name}`
                    return aux
                  })
                }`;
                window.location.href(
                  `https://wa.me/5492613642922?text=${text}`
                );
              }
            }}
            className="px-6 py-2 bg-btn text-white w-full rounded-xl"
          >
            <p>Consultar</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

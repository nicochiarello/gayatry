import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { emptyCart } from "../../slices/cart/cartSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import Head from "next/head";
import { toast } from "react-hot-toast";

const Procesamiento = () => {
  const router = useRouter();
  const price = useSelector((state) => state.cart.value.price);
  const cart = useSelector((state) => state.cart.value.cart);
  const [form, setForm] = useState({ total: price });
  const [deliveryDetails, setDeliveryDetails] = useState(false);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!cart.length) {
      router.push("/productos");
    }
  }, [cart]);

  const submitForm = () => {
    setLoader(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/api/orders/create`, {
        ...form,
        products: cart.map((i) => i._id),
      })
      .then((res) => {
        setLoader(false);
        router.push(res.data.mp);
      })
      .catch((err) => {
        if (err.response.data.stock) {
          dispatch(emptyCart());
          toast.error("Error de stock");
          router.push("/productos");
        } else {
          setErrors(err.response.data);
          setLoader(false);
        }
      });
  };

  useEffect(() => {
    setForm({ ...form, price });
  }, [price]);

  useEffect(() => {
    if (form.shipping_type === 2) {
      setDeliveryDetails(true);
    } else {
      setDeliveryDetails(false);
      setForm({ ...form, direction: null, zip: null });
    }
  }, [form.shipping_type]);

  return (
    <div className="w-full min-h-[calc(100vh-7rem)] px-2 sm:px-4 flex items-center justify-center my-4">
      <Head>
        <title>Procesamiento</title>
        <meta name="description" content="Feria hermana store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full min-h-[85%] py-5 px-6 flex flex-col justify-center items-center shadow-2xl rounded-xl bg-white">
        <div className="flex items-start w-full font-semibold border-b py-4 text-lg">
          <p>Detalles personales</p>
        </div>
        <div className=" w-full h-fit gap-5 grid grid-cols-1 sm:grid-cols-2 py-4 overflow-hidden text-md overflow-y-scroll border-b">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Nombre y apellido</label>
            <input
              className={`rounded-lg border ${
                errors.name && "border-red-500"
              } px-2 py-2`}
              type="text"
              placeholder="Nombre y apellido"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && (
              <span className="text-red-600 text-sm px-1">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Email</label>
            <input
              className={`rounded-lg border ${
                errors.email && "border-red-500"
              } px-2 py-2`}
              type="text"
              placeholder="Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && (
              <span className="text-red-600 text-sm px-1">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Celular</label>
            <input
              className={`rounded-lg border ${
                errors.phone && "border-red-500"
              } px-2 py-2`}
              type="number"
              placeholder="Celular"
              onChange={(e) => setForm({ ...form, phone: +e.target.value })}
            />
            {errors.phone && (
              <span className="text-red-600 text-sm px-1">
                {errors.phone.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Dni</label>
            <input
              className={`rounded-lg border ${
                errors.dni && "border-red-500"
              } px-2 py-2`}
              type="number"
              placeholder="Dni"
              onChange={(e) => setForm({ ...form, dni: +e.target.value })}
            />
            {errors.dni && (
              <span className="text-red-600 text-sm px-1">
                {errors.dni.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Lugar de retiro</label>
            <select
              onChange={(e) =>
                setForm({ ...form, shipping_type: +e.target.value })
              }
              className={`rounded-lg border ${
                errors.shipping_type && "border-red-500"
              } px-2 py-2`}
            >
              <option selected disabled value={null}>
                Elija una opcion
              </option>
              <option value="0">Godoy cruz</option>
              <option value="1">Centro</option>
              {/* <option value="2">Domicilio</option> */}
            </select>
            {errors.shipping_type && (
              <span className="text-red-600 text-sm px-1">
                {errors.shipping_type.message}
              </span>
            )}
          </div>

          {/* This part of the code is for delivery options if needed */}

          {/* {deliveryDetails && (
            <>
              {" "}
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="">Dirección</label>
                <input
                  className="rounded-lg border px-2 py-2"
                  type="text"
                  placeholder="Dirección"
                  onChange={(e) =>
                    setForm({ ...form, direction: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="">Codigo postal</label>
                <input
                  className="rounded-lg border px-2 py-2"
                  type="text"
                  placeholder="Codigo postal"
                  onChange={(e) => setForm({ ...form, zip: e.target.value })}
                />
              </div>
            </>
          )} */}
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="py-4 w-full flex flex-col gap-1 rounded-md col-span-2 border-b">
            <p>
              Lugar de retiro:{" "}
              {(form.shipping_type === 0 && "Godoy cruz") ||
                (form.shipping_type === 1 && "Centro")}
            </p>
            {/* <p>Envio: $</p> */}
            <p>Total: ${price}</p>
          </div>
          <div className="w-full flex items-center justify-end  py-1 rounded-md col-span-2">
            <button
              onClick={submitForm}
              disabled={loader}
              className="w-[10rem] h-[3rem] buttony-2 py-2 rounded-xl bg-btn text-white flex items-center justify-center"
            >
              {loader ? <ClipLoader size={20} color={20} /> : "Comprar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procesamiento;

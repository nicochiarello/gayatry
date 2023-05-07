import axios from "axios";
import { useState, useEffect } from "react";
import Cart from "../components/cart/Cart";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import Head from "next/head";

const Retiros = () => {
  const [withdrawals, setWithdrawals] = useState([]);
  const cartStatus = useSelector((state) => state.cart.value.status);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/api/withdrawals`).then((res) => {
      setWithdrawals(res.data.withdrawals);
      setLoader(false);
    });
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-5rem)] px-2 flex items-center justify-center">
      <Head>
        <title>Retiros</title>
        <meta name="description" content="Feria hermana retiros" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {cartStatus && <Cart />}
      <div className="w-[900px] h-[500px] relative rounded-xl bg-white shadow-2xl flex items-center justify-center">
        <div className="absolute top-[0] px-12 py-2 bg-main rounded-2xl text-white -translate-y-[1rem] ">
          <h3>Retiros</h3>
        </div>
        <div className="w-full h-full pt-12 pb-2 overflow-y-scroll">
          {loader ? (
            <div className="w-full h-full flex items-center justify-center">
              {" "}
              <ClipLoader size={120} />
            </div>
          ) : (
            withdrawals.map((i) => {
              return (
                <div
                  key={i._id}
                  className="w-full py-3 flex items-center justify-between text-2xl px-4 border-y flex-wrap"
                >
                  <p>{i.day} </p>
                  <p>{i.description}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Retiros;

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import VerifierHandler from "../../components/OrderVerify/VerifierHandler";
import Head from "next/head";

const OrderVerify = () => {
  const [loader, setLoader] = useState(true);
  const [order, setOrder] = useState({});
  const router = useRouter();
  const id = router.query.order;

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/api/orders/${id}/info`)
        .then((res) => {
          setOrder(res.data);
          setLoader(false);
        })
        .catch((err) => console.log(err.response));
    }
  }, [id]);

  return (
    <div>
      <Head>
        <title>Orden</title>
        <meta name="description" content="Feria hermana store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loader ? (
        <div className="w-full h-[calc(100vh-5rem)] flex items-center justify-center">
          {" "}
          <ClipLoader size={150} />{" "}
        </div>
      ) : (
        <div className="w-full">
          <VerifierHandler status={order.payment_status} order={order} />
        </div>
      )}
    </div>
  );
};

export default OrderVerify;

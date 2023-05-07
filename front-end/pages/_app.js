import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Navbar from "../components/navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "../stores/store";
import Cart from "../components/cart/Cart";
import { Toaster } from "react-hot-toast";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      <Provider store={store}>
        <Toaster />
        <div className="w-full h-fit flex flex-col items-center relative font-oswald bg-bg overflow-hidden text-text overflow-x-hidden">
          <Navbar />
          <div className="w-full max-w-[1200px]">
            {/* {cartStatus && <Cart />} */}

            <Component {...pageProps} />
          </div>
          <Footer/>
        </div>
      </Provider>
    </>
  );
}

export default MyApp;

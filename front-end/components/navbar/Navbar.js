import { useEffect, useState } from "react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { modifyStatus } from "../../slices/cart/cartSlice";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [userOptions, setUserOptions] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const cart = useSelector((state) => state.cart.value.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setMobileNavbar(false);
  }, [router]);

  return (
    <div className="bg-stone-900 text-white w-screen h-[5rem] flex justify-center items-center">
      <div className="flex justify-between items-center w-[1200px] px-2">
        {mobileNavbar && (
          <MobileNavbar onClose={() => setMobileNavbar(false)} />
        )}
        <div
          onClick={() => setMobileNavbar((prev) => !prev)}
          className="md:hidden"
        >
          <i className="bx bx-menu-alt-left text-3xl "></i>
        </div>
        <Link href={"/"} className="flex gap-3 items-center">
          <div className="hidden md:flex w-[3rem] h-[3rem] text-xl font-medium items-center justify-center bg-transparent rounded-full text-yellow">
            <img src="logo.png" alt="" />
          </div>
          <p className="font-semibold text-xl">GAYATRY</p>
        </Link>
        <div className="hidden h-full md:flex items-center gap-6 text-xl pr-2 font-light">
          <Link href={"/"}>Inicio</Link>
          <Link href={"/productos?page=1"}>Productos</Link>
          {/* <Link href={"/retiros"}>Retiros</Link> */}
          <a href={"https://wa.me/5492613642922"}>Contacto</a>
          <div
            onClick={() => dispatch(modifyStatus())}
            href={"#"}
            className="relative cursor-pointer"
          >
            <i className="bx bx-cart "></i>
            <span className="absolute -top-2 text-xs bg-yellow-400 rounded-full px-1 text-secondarybg">
              {cart.length}
            </span>
          </div>
        </div>
        <div onClick={() => dispatch(modifyStatus())} className="relative md:hidden ">
          <i className="bx bx-cart text-3xl "></i>
          <span className="absolute -top-2 text-xs bg-yellow-400 rounded-full pr-2 text-secondarybg">
              {cart.length}
            </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

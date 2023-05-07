import ProductList from "../components/products/product-list/ProductList";
import ProductsSidebar from "../components/products/ProductsSidebar";
import { useSelector } from "react-redux";
import Cart from "../components/cart/Cart";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const Productos = () => {
  const cartStatus = useSelector((state) => state.cart.value.status);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    sort: "-createdAt",
    category: null,
  });

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/api/categories`)
      .then((res) => setCategories(res.data.categories));
  }, []);

  return (
    <div className="w-full h-fit flex py-2">
      <Head>
        <title>Productos</title>
        <meta name="description" content="Feria hermana productos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster/>
      {cartStatus && <Cart />}
      <ProductsSidebar
        categories={categories}
        filters={filters}
        setFilters={setFilters}
      />
      <ProductList
        categories={categories}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
};

export default Productos;

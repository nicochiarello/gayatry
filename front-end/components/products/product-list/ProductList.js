import { useState, useEffect } from "react";
import ProductItem from "../product-item/ProductItem";
import ProductsFetcher from "../products-fetcher/ProductsFetcher";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import MobileFilter from "../mobile-filter/MobileFilter";

const ProductList = ({ categories, filters, setFilters }) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [nbPages, setNbPages] = useState(1);
  const [loader, setLoader] = useState(true);

  const [page, setPage] = useState(1);
  const cart = useSelector((state) => state.cart.value.cart);
  const [mobileFilter, setMobileFilter] = useState(false);

  useEffect(() => {
    if (router.query.page) {
      setPage(+router.query.page);
    }
  }, [router.query]);

  return (
    <div className="h-fit w-full md:w-[calc(100%-15rem)] px-3 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      {loader && (
        <div className="w-screen h-full absolute top-0 left-0 bg-opacity col-span-3 flex items-center justify-center">
          <ClipLoader color="white" size={60} />
        </div>
      )}

      {mobileFilter && (
        <MobileFilter
          filters={filters}
          setFilters={setFilters}
          categories={categories}
          onClose={() => setMobileFilter(false)}
        />
      )}

      <ProductsFetcher
        page={page}
        setData={setProducts}
        setLoader={setLoader}
        setNbPages={setNbPages}
        query={filters}
      />

      <div className="w-full col-span-full py-4 bg-white flex justify-end items-center px-4 rounded-xl">
        {/* <div
          onClick={() => setMobileFilter(true)}
          className="md:hidden w-[2rem] h-[2rem] rounded-full bg-btn flex items-center justify-center cursor-pointer"
        >
          <i className="bx bx-filter text-xl text-white"></i>
        </div> */}
        <div className="flex gap-4 items-center">
          <i className="bx bx-chevron-left"></i>
          <div className="flex gap-2">
            {Array.from({ length: nbPages }, (i, key) => (
              <p
                onClick={() =>
                  router.push({
                    pathname: router.pathname,
                    query: { ...router.query, page: key + 1 },
                  })
                }
                className={`${page === key + 1 && "text-btn"} cursor-pointer`}
                key={key}
              >
                {key + 1}
              </p>
            ))}
          </div>
          <i className="bx bx-chevron-right"></i>
        </div>
      </div>
      {!loader && products.length ? products.map((i) => {
        return <ProductItem cart={cart} key={i._id} item={i} />;
      }) : <div className="col-span-full h-full">Estamos trabajando para traerte los mejores productos!</div>  }
      {}
    </div>
  );
};

export default ProductList;

import { useEffect } from "react";
import axios from "axios";

const ProductsFetcher = ({ setData, query, setLoader, setNbPages, page }) => {
  useEffect(() => {
    let queryAux = "";
    if (query.sort) {
      queryAux += `&sort=${query.sort}`;
    }
    if (query.category) {
      queryAux += `&category=${query.category}`;
    }
    let source = axios.CancelToken.source();
    const fetchProducts = async () => {
      setLoader(true);
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API}/api/products?reserved=false&page=${page}${
            queryAux && queryAux
          }`,
          {
            cancelToken: source.token,
          }
        )
        .then((res) => {
          if (setNbPages) {
            setNbPages(res.data.nbPages);
          }
          setLoader(false);
          setData(res.data.products);
        })
        .catch((err) => {});
    };

    fetchProducts();

    return () => {
      source.cancel();
    };
  }, [query, page]);
};

export default ProductsFetcher;

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../slices/cart/cartSlice";
import { toast } from "react-hot-toast";
import Cart from "../../components/cart/Cart";
import { ClipLoader } from "react-spinners";
import Head from "next/head";

const ProductDetails = () => {
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState({});
  const [images, setImages] = useState({});
  const [selectedImage, setSelectedImage] = useState(0);
  const [selected, setSelected] = useState(false);
  const router = useRouter();
  let { id } = router.query;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.value.cart);
  const cartStatus = useSelector((state) => state.cart.value.status);

  const handleAddToCart = () => {
    if (!selected) {
      dispatch(add(product));
      router.push("/productos");
      return toast.success("Producto Agregado!");
    }
  };

  const handleShop = () => {
    if (!selected) {
      dispatch(add(product));
    }
    router.push("/compra/detalles");
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/api/product/${id}`)
        .then((res) => {
          setProduct(res.data.product);
          let imagesAux = {};
          for (let img of Object.entries(res.data.product.images)) {
            let imgUrl =
              process.env.NEXT_PUBLIC_IMAGE_URL + "/" + img[1].secureUrl;
            imagesAux[img[0]] = imgUrl;
          }

          setImages(imagesAux);

          let isSelected = cart.find((i) => i._id === res.data.product._id);
          if (isSelected) {
            setSelected(true);
          } else {
            setSelected(false);
          }
          setLoader(false);
        })
        .catch();
    }
  }, [id]);

  useEffect(() => {
    let isSelected = cart.find((i) => i._id === product._id);
    if (isSelected) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [cart]);

  const handleImagesBtn = (type) => {
    let imagesLenght = Object.keys(images).length;
    if (type === 0) {
      // Left arrow
      if (selectedImage === 0) {
        setSelectedImage(imagesLenght - 1);
      } else {
        setSelectedImage(selectedImage - 1);
      }
    }
    if (type === 1) {
      // Right arrow
      if (selectedImage === imagesLenght - 1) {
        setSelectedImage(0);
      } else {
        setSelectedImage(selectedImage + 1);
      }
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-5rem)]  px-2 flex items-center justify-center gap-6 ">
      <Head>
        <title>Producto info</title>
        <meta name="description" content="Feria hermana store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {cartStatus && <Cart />}
      <div className="w-full sm:px-12 max-w-[50rem] my-4 py-4 lg:max-w-full md:w-full h-fit xl:h-[38rem] lg:p-8 flex flex-col gap-4 lg:flex-row shadow-2xl bg-white rounded-2xl justify-between">
        {loader ? (
          <div className="w-full h-full flex items-center justify-center">
            <ClipLoader size={120} />
          </div>
        ) : (
          <>
            {" "}
            <div className="w-full h-[100%] lg:basis-[55%]  flex flex-col justify-between gap-4 lg:gap-8 lg:border px-1 lg:p-6 rounded-md">
              <div className="w-full h-[24rem] shadow-2xl relative overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-contain"
                  src={images[selectedImage]}
                  alt=""
                />

                <div className="w-full flex justify-between absolute top-[50%] -translate-y-[50%]">
                  <div
                    onClick={() => handleImagesBtn(0)}
                    className="w-[2rem] h-[2rem] rounded-full bg-btn flex items-center justify-center"
                  >
                    <i className="bx bx-chevron-left text-3xl cursor-pointer text-white"></i>
                  </div>
                  <div
                    onClick={() => handleImagesBtn(1)}
                    className="w-[2rem] h-[2rem] rounded-full bg-btn flex items-center justify-center"
                  >
                    <i className="bx bx-chevron-right text-3xl cursor-pointer text-white"></i>
                  </div>
                </div>
              </div>
              <div className="w-full h-fit lg:h-[8rem] grid grid-cols-3 lg:grid-cols-4 gap-2">
                {Object.entries(images).map((i, key) => {
                  return (
                    <div
                      key={key}
                      onClick={() => setSelectedImage(+i[0])}
                      className={`w-full h-[8rem] border overflow-hidden cursor-pointer ${
                        selectedImage === +i[0] && " border-2 border-btn"
                      } rounded-md `}
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={i[1]}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:basis-[45%] min-h-[18rem]  flex flex-col justify-between px-2 lg:px-6 pt-2">
              <div className="flex flex-col gap-3">
                <p className="text-3xl font-normal">{product.name}</p>
                <p>Talle: {product.size}</p>
                <p>{product.description}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>${product.price}</p>
                <div
                  onClick={handleAddToCart}
                  className="py-2 px-4 border border-btn rounded-lg cursor-pointer flex items-end justify-center "
                >
                  {selected ? "Agregado" : "Agregar al carrito"}
                </div>
                <div
                  onClick={handleShop}
                  className="py-2 px-4 bg-btn text-white rounded-lg flex items-end justify-center cursor-pointer"
                >
                  <p>Comprar</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

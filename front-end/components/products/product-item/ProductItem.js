import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../../../slices/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ item, cart }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    let isSelected = cart.find((i) => i._id === item._id);

    if (isSelected) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [cart]);

  const handleCartAction = (e) => {
    e.preventDefault();
    if (!cart.includes(item)) {
      dispatch(add(item));
    } else {
      dispatch(remove(item));
    }
  };

  const imageIndex = () => {
    let images = item.images;

    let index = Object.entries(images)[0][0];
    return index;
  };

  imageIndex();
  return (
    <Link
      href={`/productos/${item._id}`}
      className="w-full h-[22rem] bg-white rounded-xl overflow-hidden shadow-xl font-light max-w-[25rem]"
    >
      <div className="w-full h-[14rem]">
        {item.images && (
          <img
            className="w-full h-full object-cover"
            src={
              process.env.NEXT_PUBLIC_IMAGE_URL +
              "/" +
              item.images[imageIndex()].secureUrl
            }
            alt={item.name}
          />
        )}
      </div>
      <div className="px-2 py-2 text-md flex flex-col h-[8rem] justify-between">
        <div>
          <h5 className="font-normal">{item.name}</h5>
          <p>Talle {item.size}</p>
        </div>
        <div className="flex w-full justify-between items-center">
          <h5 className="font-light">
            <span className="font-normal">$</span>
            {item.price}
          </h5>
          <div
            onClick={handleCartAction}
            className="px-8 py-1 rounded-md bg-btn cursor-pointer text-white"
          >
            <p>{selected ? "Agregado" : "Agregar"}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;

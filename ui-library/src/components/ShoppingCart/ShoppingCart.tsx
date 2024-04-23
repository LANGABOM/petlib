import { FC, useState } from "react";
import { IShoppingCartProps } from "./ShoppingCart.d";
import { useShoppingCartHook } from "./utils/hooks/useShoppingCart";
import { FaOpencart } from "react-icons/fa6";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import TrashIcon from "@heroicons/react/24/outline/esm/TrashIcon";
export const ShoppingCart: FC<IShoppingCartProps> = ({ option, item }) => {
  const { addToCart, cart, removeFromCart } = useShoppingCartHook();
  const [btnSwitch, setBtnSwitch] = useState(true);

  return (
    <div className="">
      {option === "ICON" ? (
        <button
          type="button"
          className="relative  inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <FaOpencart className="w-5 h-5" />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {cart.length}
          </div>
        </button>
      ) : (
        <>
          {btnSwitch ? (
            <>
              {" "}
              <div className="flex space-x-6">
                <button
                  className="bg-[#F97316] w-full flex space-x-2  text-white p-3 rounded-md"
                  onClick={() => {
                    addToCart(item);
                    setBtnSwitch(!btnSwitch);
                  }}
                >
                 <div className="w-6"><ShoppingCartIcon/></div> <span>Add to cart</span>
                </button>
              </div>{" "}
            </>
          ) : (
            <>
              {" "}
              <div className="flex space-x-6">
                <button
                  className="bg-[#F97316] flex space-x-2 w-full text-white p-3 rounded-md"
                  onClick={() => {
                    removeFromCart(item);
                    setBtnSwitch(!btnSwitch);
                  }}
                >
              <div className="w-6"><TrashIcon/></div> <span className="text-gray-300">Remove from cart</span>
                </button>
              </div>{" "}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ShoppingCart;

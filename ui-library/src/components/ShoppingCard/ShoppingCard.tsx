import { FC } from "react";
import { ShoppingCart } from "../ShoppingCart";
import { ICartItems } from "../ShoppingCart/ShoppingCart.d";
import { Stars } from "../Stars";
import React from "react";

export const ShoppingCard: FC<{ item: ICartItems }> = ({ item }) => {
  const [rating, setRating] = React.useState(0);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={item.url}>
        <img
          className="p-8 rounded-t-lg"
          src={item.image}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <div>
          <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {item.name}
          </h5>
        </div>
        <div>
          <p className="text-sm text-gray-400 w-[22rem] ">{item.description}</p>
        </div>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <div>
            <Stars
              count={5}
              value={rating}
              edit={true}
              onChange={(value) => setRating(value)}
            />
            
          </div>
          </div>
         
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
          {rating} stars
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {item.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
          <ShoppingCart option="BUTTON" item={item} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;

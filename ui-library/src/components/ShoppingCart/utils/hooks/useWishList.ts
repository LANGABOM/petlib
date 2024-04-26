import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IWhishListprop } from "./useShoppingcart.d";
import { ICartItems } from "../../ShoppingCart.d";

export const usWishlistHook = create(persist<IWhishListprop>((set)=>({
    wishList: [],
    addToWishList: (item: ICartItems) =>set((state) => ({ wishList: [...state.wishList, item] })),
   
     
})
,

{
    name: "Wishlist",
    getStorage: () => sessionStorage
}

))
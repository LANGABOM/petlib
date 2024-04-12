import { create } from 'zustand'
import { ICartItems } from '../../ShoppingCart.d'
import { IUseShoppingCartProps } from './useShoppingcart.d'
import { persist } from 'zustand/middleware'

export const useShoppingCartHook = create(persist<IUseShoppingCartProps>((set) => ({
    cart: [],
    addToCart: (item: ICartItems) => set((state) => ({ cart: [...state.cart, item] })),
    clearCart: () => set(({ cart: [] })),
    removeFromCart: (item: ICartItems) => ({ cart: [item] }), // remove a specific item in the array
    totalItems: { totalItems: 0, totalAmount: 0 },
}
),
    {
        name: "shoppingCart",
        getStorage: () => sessionStorage
    }
)
)

// ASSIGNMENT
// create a hook  that adds the items to a wishlist : useWishlistHook
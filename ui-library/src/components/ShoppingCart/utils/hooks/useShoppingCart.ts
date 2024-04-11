/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'
import { IUseShoppingCartProps } from './useShoppingcart.d'
export const useShoppingCart= create<IUseShoppingCartProps>((set)=>({
    cart:[],
    addToCart:(item:any)=>({cart: [item]}),
    removeFromCart:(item:any)=>({cart: [item]}), // remove a specific item in the array
    clearCart:()=>set(),
    totalItems:{totalItems:0,totalAmount:0}
}))
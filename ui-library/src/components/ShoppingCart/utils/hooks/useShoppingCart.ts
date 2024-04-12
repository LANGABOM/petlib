/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'
import { IUseShoppingCartProps } from './useShoppingcart.d'
export const useShoppingCart= create<IUseShoppingCartProps>((set)=>({
    cart:[],
    addToCart:(item:any)=>set((state)=>({cart:[...state.cart,item]})),
    clearCart:()=>set(({cart:[]})),
    removeFromCart:(item:any)=>({cart: [item]}), // remove a specific item in the array
    totalItems:{totalItems:0,totalAmount:0}
}))

// 
const names = ["n1", "n2","n8",0,7]
names.length=0
console.log(names) // []
// {id: 1, name: "n1",description:"", price:40,image:""}
import { create } from 'zustand'
import { ICartItems } from '../../ShoppingCart.d'
import { IUseShoppingCartProps } from './useShoppingcart.d'
export const useShoppingCart= create<IUseShoppingCartProps>((set)=>({
    cart:[],
    addToCart:(item:ICartItems)=>set((state)=>({cart:[...state.cart,item]})),
    clearCart:()=>set(({cart:[]})),
    removeFromCart:(item:ICartItems)=>({cart: [item]}), // remove a specific item in the array
    totalItems:{totalItems:0,totalAmount:0},
}))

// 
const names = ["n1", "n2","n8",0,7]
names.length=0
console.log(names) // []
// {id: 1, name: "n1",description:"", price:40,image:""}
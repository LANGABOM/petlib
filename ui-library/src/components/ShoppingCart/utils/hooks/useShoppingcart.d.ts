/* eslint-disable @typescript-eslint/no-explicit-any */
export declare interface IUseShoppingCartProps {
    cart:any[],
    addToCart:(item:any)=>void,
    removeFromCart:(item:any)=>void
    clearCart:()=>void
    totalItems:ITotalItems
}

export declare interface ITotalItems {
    totalItems:number
    totalAmount:number
}
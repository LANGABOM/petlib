export declare interface IUseShoppingCartProps {
    cart:ICartItems[],
    addToCart:(item:ICartItems)=>void,
    removeFromCart:(item:ICartItems)=>void
    clearCart:()=>void
    totalItems:ITotalItems
}

export declare interface ITotalItems {
    totalItems:number
    totalAmount:number
}
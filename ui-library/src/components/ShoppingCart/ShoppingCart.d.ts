export interface IShoppingCartProps {
    option: "ICON"|"BUTTON"
}

export interface ICartItems {
    id: number
    name: string
    description: string
    price: number
    image: string
}
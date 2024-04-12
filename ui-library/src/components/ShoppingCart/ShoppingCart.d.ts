export interface IShoppingCartProps {
    option: "ICON"|"BUTTON",
    item?: ICartItems
}

export interface ICartItems {
    id: number
    name: string
    description: string
    price: number
    image: string
    url?: string
}
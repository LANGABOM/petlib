export interface IShoppingCartProps {
    option: "ICON"|"BUTTON",
    buttonType?: TButtonType 
    item?: ICartItems
}

export declare type  TButtonType = "ADD"|"REMOVE"

export interface ICartItems {
    id: number
    name: string
    description: string
    price: number
    image: string
    url?: string
}
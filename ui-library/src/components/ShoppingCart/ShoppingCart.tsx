import { FC } from 'react'
import { IShoppingCartProps } from './ShoppingCart.d'
import { useShoppingCartHook } from './utils/hooks/useShoppingCart'
import { FaOpencart } from "react-icons/fa6";
export const ShoppingCart: FC<IShoppingCartProps> = ({ option, item }) => {
  const { addToCart, cart } = useShoppingCartHook()
  return (
    <div className=''>
      {option === "ICON" ?
        <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <FaOpencart className="w-5 h-5" />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{cart.length}</div>
        </button>
        :
        <div className='flex space-x-6'>
          <button className='bg-red-500 text-white px-3 py-2 rounded-md' onClick={() => addToCart(item)}>Add to cart</button>
        </div>
      }
    </div>
  )
}

export default ShoppingCart
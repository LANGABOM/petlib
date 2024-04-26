import ShoppingBagIcon from "@heroicons/react/24/outline/esm/ShoppingBagIcon"

export const WishListIcon: React.FC<any> = ()=>{
    return (
        <>
        <div>
        <button
          type="button"
          className="relative  inline-flex items-center p-3 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          <ShoppingBagIcon title="Cart Item" className="w-8 text-[#F97316]  h-5" />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
          
          </div>
        </button>
        </div>
        
        </>
    )
}
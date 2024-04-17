import './App.css'
import { ShoppingCart, ICartItems, ShoppingCard, NavBar, NAVBAR_STATIC_DATA } from './components'


function App() {
  const itemsList: ICartItems[] = [
    { id: 1, name: "n1", description: `a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email`, price: 40, image: "https://flowbite.com/docs/images/products/apple-watch.png" },
    { id: 2, name: "The second item", description: `a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email`, price: 40, image: "https://flowbite.com/docs/images/products/apple-watch.png" },
    { id: 3, name: "The shopping cart", description: `a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email`, price: 40, image: "https://flowbite.com/docs/images/products/apple-watch.png" },
  ]
  return (
    <>
    <div>
      <div>
        <NavBar {...NAVBAR_STATIC_DATA}/>
      </div>
    <div className='mx-auto space-y-6 max-w-7xl my-8'>
     
      <div className="flex space-x-4 flex-wrap">
        {
          itemsList.map(item => <div key={item.id}>
            <ShoppingCard item={item} />
          </div>)
        }
      </div>

    </div>

    </div>
   
    </>
    
  )
}

export default App

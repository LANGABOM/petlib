import './App.css'
import { ShoppingCart, ICartItems, ShoppingCard, NavBar } from './components'


function App() {
  const itemsList: ICartItems[] = [
    { id: 1, name: "n1", description: "The description", price: 40, image: "https://flowbite.com/docs/images/products/apple-watch.png" },
    { id: 2, name: "The second item", description: "The description", price: 40, image: "https://flowbite.com/docs/images/products/apple-watch.png" },
    { id: 3, name: "The shopping cart", description: "The description", price: 40, image: "https://flowbite.com/docs/images/products/apple-watch.png" },
  ]
  return (
    <>
    <div>
      <div>
        <NavBar/>
      </div>
    <div className='mx-auto space-y-6 max-w-7xl my-8'>
      <ShoppingCart option="ICON" />
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

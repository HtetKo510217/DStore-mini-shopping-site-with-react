import { BrowserRouter,Routes,Route } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"
import HomePage from './components/home/HomePage'
import ItemDetail from "./components/itemDetail/ItemDetail"
import Cart from "./components/cart/Cart"
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <header>
          <NavBar/>
        </header>
        <Routes>
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route exact path="/" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

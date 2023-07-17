import { BrowserRouter,Routes,Route } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"
import HomePage from './components/home/HomePage'
import ItemDetail from "./components/itemDetail/ItemDetail"
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <header>
          <NavBar/>
        </header>
        <Routes>
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route exact path="/" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

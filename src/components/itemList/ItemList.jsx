import Item from "../item/Item"
import { Link } from "react-router-dom"
import './ItemList.css'
export default function ItemList({items}) {
  return (
    <div className="item-list">
        {items.map((item)=>(
            <Link to={`/item/${item.id}`} key={item.id}>
            <Item
              name={item.name}
              rating={item.rating}
              price={item.price}
              saleDiscount={item.saleDiscount}
              image={item.image}
              brand={item.brand}
            />
          </Link>
        ))}
    </div>
  )
}

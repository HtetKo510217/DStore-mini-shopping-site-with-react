import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Cart.css";
import { Link } from "react-router-dom";
export default function Cart() {
    const {cart} = useContext(GlobalContext);
    console.log(cart);
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {!cart.length ? (
      <p>No Item Added! Please add something to your cart</p>):
      (<>
        <div className="cart-list">
            {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                <img src={item.image} alt={"Item image"} width="100%" />
                <div className="item-price">${item.price}</div>
                <div className="item-name">{item.name}</div>
                <div className="item-expectedDelivery">
                  (Expected Delivery 3 - 6 days)
                </div>
              </div>
            ))}
        </div>
        <Link to="/checkout">
            <button className="item-btn">Next</button>
        </Link>
      </>
      )}
    </div>
  )
}

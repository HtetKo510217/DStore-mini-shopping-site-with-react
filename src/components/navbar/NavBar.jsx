import { Link } from "react-router-dom"
import "./NavBar.css"
export default function NavBar() {
  return (
    <div className="navbar">
    <Link to="/">
      <h2>DStroe</h2>
    </Link>
    <ul className="navbar-ul">
      <li>Womens</li>
      <li>Mens</li>
      <li>Clothing</li>
      <li>Brands</li>
      <Link to="/cart">
        <li>
          &#128722;{" "}
          <span className="card-count" style={{ color: "red" }}>
            (0)
          </span>
        </li>
      </Link>
      <Link to="/orders">
        <li>Orders</li>
      </Link>
      <button className="nav-btn">Hi, John</button>
    </ul>
  </div>
  )
}

import './Item.css'
export default function Item({ name, rating, price, saleDiscount, image, brand }) {
  return (
    <div className="item-card">
      <img src={image} alt={"Item image"} width="100%" />
      <div className="item-brand">{brand}</div>
      <div className="item-name">{name}</div>
      <div className="item-info">
        <div>
            <div className="item-price">Normal Price - ${price}</div>
            <div className="item-discount">Discount - ${saleDiscount}</div>
        </div>
        <div className="item-rating">{rating}&#9733;</div>
      </div>
    </div>
  )
}

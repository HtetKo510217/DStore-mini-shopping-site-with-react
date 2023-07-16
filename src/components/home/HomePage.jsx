import ItemList from "../itemList/ItemList";

export default function HomePage() {
  const items = [
    {
      "id": 1,
      "name": "curabitur",
      "brand": "Osinski Inc",
      "size": "XS",
      "occasion": "mattis",
      "color": "#6cb58f",
      "saleDiscount": 22,
      "price": 27.33,
      "rating": 3,
      "image": "/assets/caio-coelho-xFmXLq_KJxg-unsplash.jpg"
    },
    {
      "id": 2,
      "name": "nonummy maecenas",
      "brand": "Sporer and Sons",
      "size": "S",
      "occasion": "odio",
      "color": "#af294b",
      "saleDiscount": 28,
      "price": 20.96,
      "rating": 1,
      "image": "/assets/chris-lynch-pRdi2no2fvs-unsplash.jpg"
    },
    {
      "id": 3,
      "name": "praesent id",
      "brand": "Feeney-Bogisich",
      "size": "XL",
      "occasion": "bibendum",
      "color": "#c8a971",
      "saleDiscount": 22,
      "price": 13.82,
      "rating": 2,
      "image": "/assets/benjamin-rascoe-KF-q_SGqswg-unsplash.jpg"
    },
  ];

  return (
    <section>
      <ItemList items={items} />
    </section>
  )
}

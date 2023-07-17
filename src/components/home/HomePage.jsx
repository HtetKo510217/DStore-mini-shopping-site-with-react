import ItemList from "../itemList/ItemList";
import items from "../../mockData/items.json";
export default function HomePage() {
  return (
    <section>
      <ItemList items={items} />
    </section>
  )
}

import { useState } from "react";
const {
  ItemStyled,
  ItemImage,
  ItemDescription,
  Badge,
} = require("../../styles/ItemsStyled");
const Item = ({ item, cookies, setItems, items }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <ItemStyled
      enabled={true}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        console.log("Old item:", item);
        let newItem = { ...item, quantity: item.quantity + 1 };
        console.log("new item:", newItem);
        let newItems = items.map((f) => {
          return f.name === item.name ? newItem : f;
        });
        setItems(newItems);
      }}
    >
      <ItemImage src={item.img} />
      <ItemDescription hovered={hovered}>
        <h3>Grandma</h3>
        <p> She makes cookie!</p>
      </ItemDescription>
      <Badge>{item.quantity}</Badge>
    </ItemStyled>
  );
};
export default Item;

import { useState } from "react";
const {
  ItemStyled,
  ItemImage,
  ItemDescription,
} = require("../../styles/ItemsStyled");
const Item = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <ItemStyled
      enabled={item.enabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ItemImage src={item.img} />
      <ItemDescription hovered={hovered}>
        <h3>Grandma</h3>
        <p> She makes cookie!</p>
      </ItemDescription>
    </ItemStyled>
  );
};
export default Item;

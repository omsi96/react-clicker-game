const { ItemsListStyled } = require("../../styles/ItemsStyled");
const { default: Item } = require("./Item");

const ItemsList = ({ items, cookies, setItems }) => (
  <ItemsListStyled>
    {items.map((item) => (
      <Item item={item} cookies={cookies} items={items} setItems={setItems} />
    ))}
  </ItemsListStyled>
);

export default ItemsList;

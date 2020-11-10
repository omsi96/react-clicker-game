const { ItemsListStyled } = require("../../styles/ItemsStyled");
const { default: Item } = require("./Item");

const ItemsList = ({ items }) => (
  <ItemsListStyled>
    {items.map((item) => (
      <Item item={item} />
    ))}
  </ItemsListStyled>
);

export default ItemsList;

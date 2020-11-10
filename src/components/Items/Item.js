const { ItemStyled, ItemImage } = require("../../styles/ItemsStyled");

const Item = ({ item }) => (
  <ItemStyled enabled={true}>
    <ItemImage src={item.img} />
  </ItemStyled>
);
export default Item;

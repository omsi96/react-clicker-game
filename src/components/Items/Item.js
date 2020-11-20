import { useEffect, useState } from "react";
import svgs from "../../assets/svgs";
const {
  ItemStyled,
  ItemImage,
  ItemDescription,
  Badge,
} = require("../../styles/ItemsStyled");
const Item = ({ item, cookies, setItems, items, setCookiesPS, setCookies }) => {
  const [hovered, setHovered] = useState(false);

  const incrementCookiesPS = () => {
    const price = itemPrice();
    console.log("Price", price, "Cookies", cookies);
    if (itemAvailable) {
      // You can't use this way
      console.log("Old item:", item);
      let newItem = { ...item, quantity: item.quantity + 1 };
      console.log("new item:", newItem);
      let newItems = items.map((f) => {
        return f.name === item.name ? newItem : f;
      });
      setItems(newItems);
      setCookiesPS((cps) => cps + item.quantity + 1 * item.cps);
      setCookies((cookies) => cookies - itemPrice());
    }
  };

  const itemPrice = () => {
    const price =
      item.initial_price *
      (item.quantity > 0 ? item.quantity * item.multiplier : 1);
    console.log("item price is", item, price);
    return price;
  };
  const itemAvailable = cookies > itemPrice();

  useEffect(() => {
    // incrementCookiesPS();
    return () => {
      // setItems([...items]);
    };
  }, [item]);

  return (
    <ItemStyled
      enabled={itemAvailable}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={incrementCookiesPS}
    >
      <ItemImage src={item.img} />
      <ItemDescription hovered={hovered}>
        <h3>{item.enabled()}</h3>
        <p>{`${item.name} is providing ${Math.floor(
          item.quantity * item.cps
        )} cps`}</p>
        <p style={{ position: "relative" }}>
          {`Next ${item.name} price: ${itemPrice()}`}
          <img
            src={svgs.cookie}
            style={{ height: 17, margin: 3, position: "absolute", top: -2 }}
            alt="cookie"
          />
        </p>
        {/* <p> {item.description}</p> */}
      </ItemDescription>
      {item.quantity > 0 && <Badge>{item.quantity}</Badge>}
    </ItemStyled>
  );
};
export default Item;

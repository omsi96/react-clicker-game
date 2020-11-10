import "./App.css";
import { useEffect, useState } from "react";
import { Body, CenterSection, EdgeSection, Img } from "./styles/themes";
import CookieClick from "./components/CookieClick";
import itemsData from "./data/Items.json";
import ItemsList from "./components/Items/ItemsList";
import svgs from "./assets/svgs";
import initItems from "./controllers/ItemsController";

const App = () => {
  const [cookie, setCookie] = useState(0);
  const [items, setItems] = useState(initItems(itemsData));
  const [cookiesPS, setCookiesPS] = useState(0);

  // There is an issue here with the timer. For each click, the timer resets.
  useEffect(() => {
    const currentCPS = items.reduce((acc, val) => {
      return acc.quantity + val.quantity;
    }, 0);
    console.log("CURRENT CPS", currentCPS);

    let timeRate = 1000;
    const timer = setInterval(() => {
      console.log("Hello, we have ", cookie, " # of cookies");
      const newCookies = cookie + (cookiesPS * timeRate) / 1000;
      setCookie(newCookies);
    }, timeRate);
    console.log("You orderd ", cookie, " number of cookies");

    return () => clearTimeout(timer);
  });

  return (
    <Body>
      <CookieClick setCookie={setCookie} cookie={cookie} />
      {/* <span
        onClick={() => setCookie(cookie + 1)}
        style={{ textAlign: 'center', fontSize: '33px' }}> */}
      <Img
        onClick={() => setCookie(cookie + 1)}
        src={svgs.cookie}
        alt="a cookie chip"
        className="cookieHover"
      />

      {/* passing items here will be temporary, 
      later on we'll pass the state that keeps track of the active items */}
      <ItemsList items={items} cookies={cookie} setItems={setItems} />
    </Body>
  );
};

export default App;

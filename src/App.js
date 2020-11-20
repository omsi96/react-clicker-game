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
  const [cookiesPS, setCookiesPS] = useState(1);

  useEffect(() => {
    const INTERVAL = 2000;
    const cookiesPerMS = cookiesPS / 1000;
    const cookiesPerInterval = cookiesPerMS * INTERVAL;
    const timer = setInterval(() => {
      setCookie((cookies) => cookies + cookiesPerInterval);
    }, INTERVAL);
    return () => clearTimeout(timer);
  }, [cookiesPS]);

  return (
    <Body>
      <CookieClick cps={cookiesPS} cookie={cookie} />
      {/* <span
        onClick={() => setCookie(cookie + 1)}
        style={{ textAlign: 'center', fontSize: '33px' }}> */}
      <Img
        onClick={() => setCookie(cookie + 1)}
        src={svgs.cookie}
        alt="a cookie chip"
        className="cookieHover"
        draggable={false}
      />

      {/* Items list ig getting item and set items so it can update the items if you click on one of them and try to increment number of items. */}
      <ItemsList
        items={items}
        cookies={cookie}
        setItems={setItems}
        setCookiesPS={setCookiesPS}
        setCookies={setCookie}
      />
    </Body>
  );
};

export default App;

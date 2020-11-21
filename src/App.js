import "./App.css";

import { useCallback, useEffect, useRef, useState } from "react";
import { Body, Img } from "./styles/themes";

import CookieClick from "./components/CookieClick";
import itemsData from "./data/Items.json";
import ItemsList from "./components/Items/ItemsList";
import svgs from "./assets/svgs";
import initItems from "./controllers/ItemsController";

const INTERVAL = 1000;

const App = () => {
  const [cookie, setCookie] = useState(0);
  const [items, setItems] = useState(initItems(itemsData));
  const [cookiesPS, setCookiesPS] = useState(1);

  const ref = useRef(null); //now you can pass timer to another component

  useEffect(() => {
    const timer = setInterval(() => ref.current(), INTERVAL);
    return () => {
      clearTimeout(timer);
      console.log("I AM RESETTING THE TIMER!!");
    };
  }, []);

  // This will attach the ref to increment CookiesPerInterval, which has
  useEffect(() => {
    let incrementCookiesPerInterval = () => {
      const cookiesPerMS = cookiesPS / 1000;
      const cookiesPerInterval = cookiesPerMS * INTERVAL;
      setCookie((cookies) => cookies + cookiesPerInterval);
    };
    ref.current = incrementCookiesPerInterval;
  });
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

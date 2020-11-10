import { Button } from "../styles/cookieClicks";
const CookieClick = ({ setCookie, cookie }) => {
  return (
    <div>
      <Button onClick={() => setCookie(cookie + 1)}>
        <img src="../assets/cookie.svg" alt="" />
        {/* <p> */}
        {cookie}
        {/* </p> */}
      </Button>
    </div>
  );
};

export default CookieClick;

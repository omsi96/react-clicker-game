import { Button } from "../styles/cookieClicks";
import svgs from "../assets/svgs";
const CookieClick = ({ cookie, cps }) => {
  return (
    <div>
      <Button>
        <img src={svgs.cookie} alt="" />
        <label> {Math.floor(Math.floor(cookie))}</label>
      </Button>
      <label> Generating {Math.floor(cps)} cookies per second</label>
    </div>
  );
};

export default CookieClick;

import { Button } from '../styles/cookieClicks'
import svgs from '../assets/svgs'
const CookieClick = ({ setCookie, cookie }) => {
  return (
    <div>
      <Button>
        <img src={svgs.cookie} alt='' />
        <label> {cookie}</label>
      </Button>
    </div>
  )
}

export default CookieClick

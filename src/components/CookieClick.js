import { Button } from '../styles/cookieClicks'
import svgs from '../assets/svgs'
const CookieClick = ({ setCookie, cookie }) => {
  return (
    <div>
      <Button onClick={() => setCookie(cookie + 1)}>
        <img src='svgs.cookie' alt='' />
        {/* <p> */}
        {cookie}
        {/* </p> */}
      </Button>
    </div>
  )
}

export default CookieClick

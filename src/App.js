import './App.css'
import { useState } from 'react'
import { Body, CenterSection, EdgeSection } from './styles/themes'
import CookieClick from './components/CookieClick'
import itemsData from './data/Items.json'
import ItemsList from './components/Items/ItemsList'
import svgs from './assets/svgs'
import initItems from './controllers/ItemsController'

function App() {
  const [cookie, setCookie] = useState(0)
  const [items, setItems] = useState(itemsData)
  const [cookiesPS, setCookiesPS] = useState(0)
  return (
    <Body>
      <CookieClick setCookie={setCookie} cookie={cookie} />
      <p
        onClick={() => setCookie(cookie + 1)}
        style={{ textAlign: 'center', fontSize: '33px' }}>
        <img
          src={svgs.cookie}
          alt='a cookie chip'
          width='300px'
          height='300px'
        />
      </p>

      {/* passing items here will be temporary, 
      later on we'll pass the state that keeps track of the active items */}
      <ItemsList items={items} />
    </Body>
  )
}

export default App

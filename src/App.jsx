import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
import LearnMore from './motionPages/LearnMore'
import Me from './pages/Me'
import Delivery from './pages/Delivery'
import Cart from './motionPages/Cart'
import Pickup from './pages/Pickup'
import Checkout from './motionPages/Checkout'
import TipAmount from './motionPages/TipAmount'
import { apiKey } from './jsFile/apiKey'
import { LoadScript } from '@react-google-maps/api'
import FormAddress from './motionPages/FormAddress'
import CardPay from './motionPages/CardPay'
import PickupSelect from './pages/PickupSelect'
import { ThemeProvider } from './components/ThemeContext'

const GOOGLE_MAPS_API_KEY = apiKey

function App() {

  return (
    <ThemeProvider>
      <LoadScript
        googleMapsApiKey={GOOGLE_MAPS_API_KEY}
        libraries={['places']}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page/0' element={<Home />} />
          <Route path='/page/1' element={<Order />} />
          <Route path='/order' element={<Order />} />
          <Route path='/page/2' element={<Me />} />
          <Route path='/learnMore/:id' element={<LearnMore />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pickup' element={<Pickup />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/tipAmount' element={<TipAmount/>} />
          <Route path='/formAddress' element={<FormAddress />} />
          <Route path='/cardPay' element={<CardPay />} />
          <Route path='/location/:id' element={<PickupSelect />} />
          <Route path='/pick/:prefId/:storeId' element={<Delivery />} />
        </Routes>
      </LoadScript>
    </ThemeProvider>
  )
}

export default App

import { useLocation, useNavigate, useParams } from "react-router-dom"
import leftArrow from '../assets/icons/left-arrow.png'
import CartIcon from "../components/CartIcon"
import Selections from "../components/Selections"
import { title } from "../jsFile/List"
import Cart from '../motionPages/Cart';
import { useState } from 'react';


const Delivery = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { prefId, storeId } = useParams()
  const storeIndex = parseInt(storeId)
  const [showCart, setShowCart] = useState(false)

  const getModeId = () => {
    if (location.pathname.includes("/pick/0/")) return 1;
    if (location.pathname.includes("/pick/1/")) return 2;
    return parseInt(prefId) || 0;
  };
  
  const modeId = getModeId();  

  const handleBack= () => {
      if ((modeId === 1 || modeId === 2) && !isNaN(storeIndex)) {
        navigate(`/location/${storeIndex}`)
      } else {
        navigate('/order')
      }
  }

  return (
    <div className="headDel">
          <div className="delTitles">
            <h1 className="titles gap-3">
              <div onClick={handleBack}
              >
                  <img src={leftArrow} className="arrow" />
              </div>
              <span className="headDelP">{title[modeId]?.name || 'Delivery'}</span>     
            </h1>
            <CartIcon onClick={() => setShowCart(true)}/>
          </div>
          <Selections />
          {showCart && <Cart onClose={() => setShowCart(false)} />}
    </div>
  )
}

export default Delivery
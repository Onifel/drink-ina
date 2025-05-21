import Foot from '../components/Foot'
import CartIcon from '../components/CartIcon'
import { orderList } from '../jsFile/List';
import { useNavigate } from 'react-router-dom';
import Cart from '../motionPages/Cart';
import { useState } from 'react';

const Order = () => {
  const navigate = useNavigate()
  const [showCart, setShowCart] = useState(false)

  const handleOrder = (id) => {
    if (id === 0) {
      navigate('/delivery')
    }else if (id === 1) {
      navigate('/pickup')
    }
  }

  return (
    <>
      <div className="order pageBg">
        <div className='d-flex orderHead'>
          <h1 className='titleOrder'>Start an Order</h1>
          <CartIcon onClick={() => setShowCart(true)}/>
        </div>
        <div className='contOrder container'>
            <div className="orderSelect gap-2">
              {
                orderList.map((order, index) => (
                  <div  key={index} className="sectionOrder" onClick={() => handleOrder(index)}>
                    <img src={order.img} className='delivery' />
                    <p className='deliv'>{order.name}</p>
                  </div>
                ))
              }
            </div>
        </div>
        <div className='empty'></div>
      </div>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      <Foot />
    </>
  )
}

export default Order
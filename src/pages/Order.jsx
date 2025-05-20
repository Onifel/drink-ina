import Foot from '../components/Foot'
import CartIcon from '../components/CartIcon'
import { orderList } from '../jsFile/List';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const navigate = useNavigate()

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
          <CartIcon />
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
      <Foot />
    </>
  )
}

export default Order
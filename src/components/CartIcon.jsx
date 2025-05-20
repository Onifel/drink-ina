import { useSelector } from 'react-redux'
import cart from '../assets/icons/shopping-cart.png'
import { useState } from 'react'
import Cart from '../motionPages/Cart'
import { useLocation, matchPath } from 'react-router-dom'

const CartIcon = () => {
    const cartNumber = useSelector(state => state.cart)
    const [showSlide, setShowSlide] = useState(false)
    const location = useLocation()

    const cssChange = [
        '/delivery',
        '/pickup',
        '/location/:id',
        'pick/0/:id',
        'pick/1/:id'
    ].some(path => matchPath(path, location.pathname))

    const handleInCart = () => {
        setShowSlide(true)
    }

  return (
    <div className='divCartIcon'>
        <button 
            className='btnCart modeDark'
            onClick={handleInCart}
        >
            <img src={cart} className='cartImg' />
            {cartNumber.length > 0 && 
                <span 
                    className={`${cssChange ? 'numbCart darkMode' : 'numb darkMode'}`}
                >
                        {cartNumber.length}
                </span>
            }
        </button>

        {showSlide && (
            <Cart onClose={()=>setShowSlide(false)} />
        )}
    </div>
  )
}

export default CartIcon
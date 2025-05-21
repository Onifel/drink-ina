import { useSelector } from 'react-redux'
import cart from '../assets/icons/shopping-cart.png'
import { useLocation, matchPath } from 'react-router-dom'

const CartIcon = ({onClick}) => {
    const cartNumber = useSelector(state => state.cart)
    const location = useLocation()

    const cssChange = [
        '/delivery',
        '/pickup',
        '/location/:id',
        'pick/0/:id',
        'pick/1/:id'
    ].some(path => matchPath(path, location.pathname))

  return (
    <div className='divCartIcon'>
        <button 
            className='btnCart modeDark'
            onClick={onClick}
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
    </div>
  )
}

export default CartIcon
import { useNavigate, useParams } from 'react-router-dom'
import CartIcon from '../components/CartIcon'
import leftArrow from '../assets/icons/left-arrow.png'
import { pickPref, stores } from '../jsFile/List';
import Cart from '../motionPages/Cart';
import { useState } from 'react';

const PickupSelect = () => {
    const {id} = useParams()
    const store = stores[parseInt(id)]
    const nameStore = store?.name
    const navigate = useNavigate()
    const [showCart, setShowCart] = useState(false)

    const handleSelPick = (prefId) => {
        navigate(`/pick/${prefId}/${id}`)
    }

    const handleBack = () => {
        navigate('/pickup')
    }

  return (
    <div className='pageBg pickSel'>
            <div className="d-flex checkTitles">
                <h1 className="titles gap-3">
                <div 
                    onClick={handleBack}
                >
                    <img src={leftArrow} className="arrow" />
                </div>
                    {
                        store && <span className='headDelP'>{nameStore}</span>
                    }      
                </h1>
                <CartIcon onClick={() => setShowCart(true)}/>
            {showCart && <Cart onClose={() => setShowCart(false)} />}
            </div>
            <h4 className='titlePick'>Pickup Preference</h4>
            <div className='container'>
                {
                    pickPref.map((pick, index) => {
                        return(
                            <div 
                                key={index}
                                className="asideOrder"
                                onClick={() => handleSelPick(index)}
                            >
                                <img src={pick.icon} className='cater'/>
                                <p className="catering">  {pick.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="empty"></div>
    </div>
  )
}

export default PickupSelect
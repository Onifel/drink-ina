import { useState } from 'react'
import { AnimatePresence, motion, } from "framer-motion"
import rightA from '../assets/icons/right-arrow.png'
import OrderUpdate from './orderUpdate'
import StoreOffers from './StoreOffers'

const Notifications = ({onClose}) => {
    const [isVisible, setIsVisible] = useState(true)
    const [showSlide, setShowSlide] = useState(false)
    const [indexStore, setIndexStore] = useState(null)
    const [notifSett, setNotifSett] = useState({
        push: "Off",
        sms:"Off"
    })
    const getTitleForId = (index) => {
        switch (index) {
          case 1: return "Store Offers";
          case 2: return "Drink'ina Offers";
          case 3: return "Recommendations";
          case 4: return "Reminders";
          case 5: return "Product Updtes & News";
          default: return "";
        }
    }     

    const setParaForId = (index) => {
        switch (index) {
            case 1: return "Receive notifications about offers you can use on orders from specific stores.";
            case 2: return "Receive notifications about exclusive promotions and offers that can be applied to multiple stores.";
            case 3: return "Receive personalized recommendations for stores and items we think you'll love";
            case 4: return "Receive timely reminders about actions you've taken on Drink'ina including items you have in your cart and recent orders.";
            case 5: return "Receive notifications about new Drink'ina products, features, and news.";
            default: return "";
        }
    }
    
    const handleClick = (id) => {
        setShowSlide(true)
        setIndexStore(id)
    }

    const slideVariants = {
        hidden: { x: "100vh", opacity: 0 },
        visible: { x: "0", opacity: 1 },
        exit: { x: "100vh", opacity: 0 },
    }

    const handleNotifChange = (newSett) => {
        setNotifSett(newSett)
    }

  return (
    <AnimatePresence>
        {isVisible && (
            <motion.div
            className="slideAdSett pageBg"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4 }}
            >
                <button
                    onClick={() => {
                        setIsVisible(false)
                        setTimeout(() => {
                            onClose()
                          }, 400)
                    }}
                    className="closeArrow modeDark"
                >
                    &larr;
                </button>
                <h1 className='pmtTitle'>Notifications</h1>
                <div className="container">
                    <div
                        className="asideNotif"
                        onClick={() => handleClick(0)}
                    >
                        <div className='nameDetails'>
                            <p className="settName">Order Updates</p>
                            <p className='paraSett'>Push: {notifSett.push}</p>
                            <p className='paraSett'>SMS: {notifSett.sms}</p>
                        </div>
                        <div className='modeD'>
                            <img src={rightA} className="arrowLoc" />
                        </div>
                    </div>
                    <div
                        className="asideNotif"
                        onClick={() => handleClick(1)}
                    >
                        <div className='nameDetails'>
                            <p className="settName">Store Offers</p>
                            <p className='paraSett'>Push: {notifSett.push}</p>
                        </div>
                        <div className='modeD'>
                            <img src={rightA} className="arrowLoc" />
                        </div>
                    </div>
                    <div
                        className="asideNotif"
                        onClick={() => handleClick(2)}
                    >
                        <div className='nameDetails'>
                            <p className="settName">Drink'ina Offers</p>
                            <p className='paraSett'>Push: {notifSett.push}</p>
                        </div>
                        <div className='modeD'>
                            <img src={rightA} className="arrowLoc" />
                        </div>
                    </div>
                    <div
                        className="asideNotif"
                        onClick={() => handleClick(3)}
                    >
                        <div className='nameDetails'>
                            <p className="settName">Recommendations</p>
                            <p className='paraSett'>Push: {notifSett.push}</p>
                        </div>
                        <div className='modeD'>
                            <img src={rightA} className="arrowLoc" />
                        </div>
                    </div>
                    <div
                        className="asideNotif"
                        onClick={() => handleClick(4)}
                    >
                        <div className='nameDetails'>
                            <p className="settName">Reminders</p>
                            <p className='paraSett'>Push: {notifSett.push}</p>
                        </div>
                        <div className='modeD'>
                            <img src={rightA} className="arrowLoc" />
                        </div>
                    </div> 
                    <div
                        className="asideNotif"
                        onClick={() => handleClick(5)}
                    >
                        <div className='nameDetails'>
                            <p className="settName">Product Updates & News</p>
                            <p className='paraSett'>Push: {notifSett.push}</p>
                        </div>
                        <div className='modeD'>
                            <img src={rightA} className="arrowLoc" />
                        </div>
                    </div> 
                </div>

                {showSlide &&
                    (indexStore === 0 && (
                        <>
                            <div
                                className="overlay"
                                onClick={() => {
                                    setShowSlide(false)
                                    setIndexStore(null)
                                }}
                            ></div>
                            <OrderUpdate 
                                onClose={() => {
                                    setShowSlide(false)
                                    setIndexStore(null)
                                }}
                                onChange={handleNotifChange}
                            />
                        </>    
                    )) ||
                    (indexStore >= 1 && indexStore <= 5 && (
                        <>
                            <div 
                                className="overlay" 
                                onClick={() => {
                                    setShowSlide(false)
                                    setIndexStore(null)
                                }}
                            ></div>
                            <StoreOffers 
                                onClose={() => {
                                    setShowSlide(false)
                                    setIndexStore(null)
                                }}
                                onChange={handleNotifChange}
                                title={getTitleForId(indexStore)}
                                para={setParaForId(indexStore)}
                            />
                        </>    
                    ))
                }
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Notifications
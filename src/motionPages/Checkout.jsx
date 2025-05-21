import leftArrow from '../assets/icons/left-arrow.png'
import { useDispatch, useSelector } from "react-redux"
import { selectSubtotal } from "../jsFile/cartSlice"
import rightArrow from '../assets/icons/right-arrow.png'
import { selectTip } from "../jsFile/checkoutSlice"
import Address from "../components/Address"
import { setTip } from "../jsFile/checkoutSlice"
import { useState } from "react"
import CardPay from "./CardPay"
import { AnimatePresence, motion } from "framer-motion"
import TipAmount from "./TipAmount"

const Checkout = () => {
    const [isVisible, setIsVisible] = useState(true)
    const subtotal = useSelector(selectSubtotal)
    const tax = subtotal * 0.06
    const deliveryFee = 5
    const tip = useSelector(selectTip)
    const total = subtotal + tax + deliveryFee + tip
    const dispatch = useDispatch()
    const [showSlide, setShowSlide] = useState(false)
    const [showCardPay, setShowCardPay] = useState(false)

    const slideVariants = {
        hidden: { x: "100vh", opacity: 0 },
        visible: { x: "0", opacity: 1 },
        exit: { x: "100vh", opacity: 0 },
      }

    const handleTip = () => {
        setShowSlide(true)
    }

    const handleBack = () => {
        if (showSlide) {
           setShowSlide(false)
        }else{
            setIsVisible(false)
        }
    }

    const handlePay = () => {
        
    }

  return (
    <AnimatePresence>
        {isVisible && (
            <motion.div
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="slideCheck pageBg"
            >
                <div className={`checkTitles checkoutContent ${showCardPay ? 'blurred' : ''}`}>
                    <h1 className="titles gap-3">
                    <div onClick={handleBack}
                    >
                        <img src={leftArrow} className="arrow" />
                    </div>
                    <span className="headDelP">Checkout</span>     
                    </h1>
                </div>

                <div className="checkContainer">
                    <h2 className="titleCheck">Order Details</h2>
                    <div className="d-flex mt-4">
                        <h5 className="subtotal">Subtotal</h5>
                        <p className="paraDollar">${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="d-flex">
                        <h5 className="subtotal">Sales Tax (6.00%)</h5>
                        <p className="paraDollar">${tax.toFixed(2)}</p>
                    </div>
                    <div className="d-flex">
                        <h5 className="subtotal">Delivery Fee</h5>
                        <p className="paraDollar">${deliveryFee.toFixed(2)}</p>
                    </div>
                    <div className="d-flex">
                        <h5 className="subtotal">Tip</h5>
                        <p className="paraDollar">${tip.toFixed(2)}</p>
                    </div>
                    <div className="btnTip">
                        <button 
                            className="btnNumbTip"
                            onClick={() => dispatch(setTip(2))}
                        >
                            $2
                        </button>
                        <button 
                            className="btnNumbTip"
                            onClick={() => dispatch(setTip(3))}
                        >
                            $3
                        </button>
                        <button 
                            className="btnNumbTip"
                            onClick={() => dispatch(setTip(5))}
                        >
                            $5
                        </button>
                        <button 
                            className="btnNumbTip"
                            onClick={handleTip}
                        >
                            Other
                        </button>
                    </div>
                    <div>
                        <p className="paraTip">100% of tips go to the drivers</p>
                    </div>

                    {showSlide && (
                        <TipAmount onClose={() => setShowSlide(false)}/>
                    )}

                    <div className="d-flex mb-2">
                        <h4 className="total">Total</h4>
                        <h5>${total.toFixed(2)}</h5>
                    </div>
                </div>

                <Address />

                <div className="contPay">
                    <h2 className="textPay">Payment</h2>
                    <button 
                        className="btnPay"
                        onClick={() => setShowCardPay(true)}
                    >
                        <img 
                            src={rightArrow} 
                            className="arrow" 
                        />
                    </button>
                    {showCardPay && (
                        <>
                            <div
                                className="overlay"
                                onClick={() => setShowCardPay(false)}
                            ></div>
                            <CardPay onClose={() => setShowCardPay(false)} />
                        </>
                    )}
                </div>
                <div className="btnDiv">
                    <button className='btnHero' onClick={handlePay}>Place Order</button>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Checkout
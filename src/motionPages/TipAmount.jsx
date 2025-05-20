import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import driver from '../assets/icons/fast-delivery.png'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTip } from "../jsFile/checkoutSlice";

const TipAmount = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [amount, setAmount] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClose = () => {
        setIsVisible(false);
    }
    
    const slideVariants = {
        hidden: { y: "100vh", opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: "100vh", opacity: 0 },
    }

    const handleTipAmount = () => {
        const tipValue = parseFloat(amount) || 0
        dispatch(setTip(tipValue))
        navigate('/checkout')
    }

  return (
    <AnimatePresence onExitComplete={() => navigate('/checkout')}>
      {isVisible && (
        <motion.div
          className="divM pageBg"
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
            <button
                onClick={handleClose}
                style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "transparent",
                    border: "none",
                    fontSize: "1.5rem",
                    cursor: "pointer"
                }}
            >
                &times;
            </button>
            <div className="imageD">
                <img src={driver} className="imgDriver" />
            </div>
            <h3>Enter a tip amount</h3>
            <p>Tips are appreciated, and 100% of your tip will go to our hard-</p>
            <p className="paraA">working drivers.</p>
            <input 
                type="text" 
                className="inputAddress" 
                placeholder='$0.00' 
                onChange={(e) => setAmount(e.target.value)}
            />
            <div className="divBtn">
                <button className='btnHero' onClick={handleTipAmount}>Done</button>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TipAmount
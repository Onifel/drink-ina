import { useNavigate, useParams } from "react-router-dom"
import { drinkList } from "../jsFile/List"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


const LearnMore = () => {
    const {id} = useParams();
    const drinkToShow = drinkList.filter((_, index) => index.toString() === id )
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    }

    const slideVariants = {
        hidden: { y: "100vh", opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: "100vh", opacity: 0 },
    }

    const handleOrder = () => {
        navigate('/order')
    }

  return (
    <AnimatePresence onExitComplete={() => navigate('/')}>
      {isVisible && (
        <motion.div
          className="learnM pageBg"
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.2 }}
        >
            <button
                onClick={handleClose}
                className="closeBtn modeDark"
            >
                &times;
            </button>
            {
                drinkToShow.map((drink, index) => (
                    <div key={index} className="moreLearn">
                        <div>
                            <h4 className="para">{drink.name}</h4>
                            <p className="desc">{drink.desc}</p>
                        </div>
                        <img src={drink.img} className="drink"/>
                    </div>
                ))
            }
            <div>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave-top">
                    <path d="M0.00,49.98 C150.00,150.00 349.13,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" />
                </svg>
            </div>
            <div className='emptyW'></div>
            <div className="divBtn d-flex justify-content-center align-items-center">
                <button 
                    className='btnHero'
                    onClick={handleOrder}
                >
                    Order Now
                </button>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LearnMore
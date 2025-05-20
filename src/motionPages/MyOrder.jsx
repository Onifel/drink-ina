import { useState } from 'react'
import { AnimatePresence, motion, } from "framer-motion";
import icedcl from '../assets/cups/a.png'
import cheese from '../assets/menu/cheese.png'
import caesar from '../assets/menu/caesar.png'
import blanco from '../assets/peckish/blanco.png'
import classic from '../assets/menu/classic.png'
import icedmgt from '../assets/cups/icedtea.png'

const MyOrder = ({onClose}) => {
    const [isVisible, setIsVisible] = useState(true)

    const slideVariants = {
        hidden: { x: "100vh", opacity: 0 },
        visible: { x: "0", opacity: 1 },
        exit: { x: "100vh", opacity: 0 },
    }

  return (
    <AnimatePresence>
        {isVisible && (
            <motion.div
            className="slideMe pageBg"
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
                <h1 className='pmtTitle'>My Orders</h1>
                <div>
                    <div className="item">
                        <img src={caesar} className="kaly" />
                        <h5 className="titleDel">Caesar</h5>
                        <p className="desc">Romaine lettuce, grilled chicken, croutons, parmesan, Caesar dressing</p>
                        <p className='price'>Date placed: January 9, 2025</p>
                    </div>
                    <div className="item">
                        <img src={cheese} className="kaly" />
                        <h5 className="titleDel">Love Cheese</h5>
                        <p className="desc">Steak of beef, cheddar, letuce, tomato, sauce</p>
                        <p className='price'>Date placed: January 2, 2025</p>
                    </div>
                    <div className="item">
                        <img src={icedcl} className="kaly" />
                        <h5 className="titleDel">Iced Caramel Latte</h5>
                        <p className="desc">Chilled espresso, creamy milk, sweet caramel, and ice. Refreshingly smooth.</p>
                        <p className='price'>Date placed: December 7, 2024</p>
                    </div>
                    <div className="item">
                        <img src={blanco} className="kaly" />
                        <h5 className="titleDel">The Blanco</h5>
                        <p className="desc">White chocolate chip cookie</p>
                        <p className='price'>Date placed: December 1, 2024</p>
                    </div>
                    <div className="item">
                        <img src={classic} className="kaly" />
                        <h5 className="titleDel">The Classic</h5>
                        <p className="desc">Steak of beef, letuce, tomato, sauce</p>
                        <p className='price'>Date placed: November 4, 2024</p>
                    </div>
                    <div className="item">
                        <img src={icedmgt} className="kaly" />
                        <h5 className="titleDel">Iced Tea</h5>
                        <p className="desc">Black tea, ice, sugar</p>
                        <p className='price'>Date placed: September 16, 2024</p>
                    </div>
                    <div className="item">
                        <img src={icedcl} className="kaly" />
                        <h5 className="titleDel">Iced Caramel Latte</h5>
                        <p className="desc">Chilled espresso, creamy milk, sweet caramel, and ice. Refreshingly smooth.</p>
                        <p className='price'>Date placed: September 10, 2024</p>
                    </div>
                    <div className="item">
                        <img src={blanco} className="kaly" />
                        <h5 className="titleDel">The Blanco</h5>
                        <p className="desc">White chocolate chip cookie</p>
                        <p className='price'>Date placed: August 3, 2024</p>
                    </div>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default MyOrder
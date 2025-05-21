import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart, selectSubtotal } from '../jsFile/cartSlice'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Checkout from './Checkout'

const Cart = ({onClose}) => {
    const foods = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [isVisible, setIsVisible] = useState(true)
    const [showSlide, setShowSlide] = useState(false)
    const cartNumb = useSelector(state => state.cart)
    const isEmpty = !foods || foods.length === 0
    const subtotal = useSelector(selectSubtotal)
    
    const slideVariants = {
        hidden: { y: "100vh", opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: "100vh", opacity: 0 },
    }

    const handleDelete = (id) => {
        dispatch(removeCart(id))
    }

    const handleCheck = () => {
        setShowSlide(true)
    }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="divCart pageBg"
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
                className='closeBtn modeDark'
            >
                &times;
            </button>

            <h1 className='cartTitle'>My Cart</h1>

            <div className='contCart'>
            {
              cartNumb.length > 0 ? (
                <>
                    {
                        foods.map((food, index) => (
                            <div key={index} className="contItem">
                                <div className="item">
                                    <img src={food.img} className="kaly" />
                                    <h5>{food.name}</h5>
                                    <p className='desc'>{food.desc}</p>
                                    <p className='price'><span>{food.dollar}</span>{food.price}</p>
                                </div>
                                <button 
                                    className="btnDelete"
                                    onClick={() => handleDelete(index)}
                                >
                                    -        
                                </button>
                            </div>
                        ))
                    }
                    {
                        foods.map((food, index) => {
                            const items = Object.values(food).find(value => Array.isArray(value))
                            return (
                                <div key={index} className="mt-5 mb-3">
                                    {
                                        Array.isArray(items) && items.map((item, index) => (
                                            <div key={index} className="contItem">
                                                <div className="item">
                                                    <img src={item.img} className="kaly" />
                                                    <h5>{item.name}</h5>
                                                    <p className='desc'>{item.desc}</p>
                                                    <p className='price'><span>{item.dollar}</span>{item.price}</p>
                                                </div>
                                                <button 
                                                    className="btnDel"
                                                    onClick={() => handleDelete(index)}
                                                >
                                                    -        
                                                </button>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        })
                    }
                </>
                
                ) : (
                    <h4>Your Cart is Empty!</h4>
                )
            }

                <div className='d-flex mb-5'>
                    {
                        isEmpty ? (
                            <p>{""}</p>
                        ) : (
                            <>
                                <p className='subtotal'>Subtotal</p>
                                <p>${(subtotal || 0).toFixed(2)}</p>
                            </>  
                        )
                    }
                
                </div>
            </div>

            <div className="divBtn">
                <button className='btnHero' onClick={handleCheck}>Checkout</button>
            </div>

            {showSlide && (
                <Checkout onClose={() => {
                    setShowSlide(false)
                    setIsVisible(true)
                }}/>
            )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Cart
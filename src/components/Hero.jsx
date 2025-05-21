import React from 'react'
import CartIcon from './CartIcon'
import { useState, useEffect } from 'react';
import Cart from '../motionPages/Cart'

const Hero = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    setIsFixed(true)
  }, []);

  return (
    <div className={`hero ${isFixed ? 'fixed' : ''}`}>
      <CartIcon onClick={() => setShowCart(true)}/>
      <div className="curve">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,100 C480,0 960,0 1440,100 L1440,0 L0,0 Z" fill="#deb8aa" />
        </svg>
      </div>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </div>
  )
}

export default Hero
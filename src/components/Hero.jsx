import React from 'react'
import CartIcon from './CartIcon'
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    setIsFixed(true)
  }, []);

  return (
    <div className={`hero ${isFixed ? 'fixed' : ''}`}>
      <CartIcon />
      <div className="curve">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,100 C480,0 960,0 1440,100 L1440,0 L0,0 Z" fill="#deb8aa" />
        </svg>
      </div>
    </div>
  )
}

export default Hero
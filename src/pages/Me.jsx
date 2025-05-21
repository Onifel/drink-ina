import Foot from "../components/Foot"
import { myAccount } from "../jsFile/List"
import rightA from '../assets/icons/right-arrow.png'
import { useState } from "react"
import MyOrder from "../motionPages/MyOrder"
import Settings from "../motionPages/Settings"
import Profile from "../motionPages/Profile"
import Rewards from "../motionPages/Rewards"

const Me = () => {
  const [showSlide, setShowSlide] = useState(false)
  const [indexStore, setIndexStore] = useState(null)
  
  const handleClick = (id) => {
    setShowSlide(true)
    switch (id) {
      case 0:
        setIndexStore(0)
        break;
      case 1:
        setIndexStore(1)
        break;
      case 2:
        setIndexStore(2)
        break;
      case 3:
        setIndexStore(3)
        break;
      default:
        break;
    }
  }

  return (
    <div className="contMe pageBg">
      <h3 className="headMe">Your name</h3>
      <div className="containerMe container">
        {
          myAccount.map((acc, index) => (
            <div 
              key={index}
              className="asideMe"
              onClick={() => handleClick(index)}
            >
              <img src={acc.icon} className='cater'/>
              <p className="nameMe">{acc.title}</p>
              <div className="modeD">
                <img src={rightA} className="arrowLoc" />
              </div>
            </div>
          ))
        }   
      </div>
      <Foot />
      {
        showSlide &&
          (indexStore === 0 && (
            <>
               <MyOrder onClose={() => setShowSlide(false)}/>
            </>
          )) ||
          (indexStore === 1 && (
            <>
              <Settings onClose={() => setShowSlide(false)}/>
            </>
          )) ||
          (indexStore === 2 && (
            <>
              <Profile onClose={() => setShowSlide(false)}/>
            </>
          )) ||
          (indexStore === 3 && (
            <>
              <Rewards onClose={() => setShowSlide(false)}/>
            </>
          ))
      }
    </div>
  )
}

export default Me
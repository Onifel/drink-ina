import { useState } from 'react'
import { AnimatePresence, motion, } from "framer-motion";
import arrowR from '../assets/icons/top.png'

const ManageAcc = ({onClose}) => {
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
            className="slideAcc pageBg"
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
                <form className='formAcc'>
                    <button className='saveBtn'>Save</button>
                    <div className='d-flex gap-2'>
                        <div className='nameInfo'>
                            <h6>First Name</h6>
                            <input 
                                type="text" 
                                name="fristname" 
                                id="firstname"  
                                placeholder='Sandra'
                            />
                        </div>
                        <div className='nameInfo'>
                            <h6 htmlFor="firstname">Last Name</h6>
                            <input 
                                type="text" 
                                name="lastname" 
                                id="lastname"  
                                placeholder='Biennel'
                            />
                        </div>
                    </div>
                    <div className='d-flex mt-4'>
                        <div className='countryAcc'>
                            <h6 htmlFor="country">Country</h6>
                            <select 
                                name="country" 
                                id="country"
                            >
                                <option value="+1">+1</option>
                                <option value="+33">+33</option>
                            </select>
                        </div>
                        <div className='phoneAcc'>
                            <h6 htmlFor="phone">Phone Number</h6>
                            <input 
                                type="text" 
                                name="phine" 
                                id="phone"  
                                placeholder='(000) 000-0000'
                            />
                        </div>
                    </div>
                    <div className='emailAcc'>
                        <h6 htmlFor="email">Email</h6>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"  
                            placeholder='b.sandra@gmail.com'
                        />
                        <button className='btnChangePwd'>Change your password</button>
                    </div>
                </form>
                <div className='manageAcc'>
                    <h6>Manage Account</h6>
                    <p className='descAcc'>Request an archive of your personal data or delete your account</p>
                    <button className='btnChangePwd'>Manage Account <img src={arrowR} className='imgArrow'/></button>
                </div>
                <div className='Acc'>
                    <button className='switchAcc'>Switch Account</button>
                    <button className='btnLogout'>Log Out</button>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default ManageAcc
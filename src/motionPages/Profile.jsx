import { useState } from 'react'
import { AnimatePresence, motion, } from "framer-motion";

const Profile = ({onClose}) => {
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
            className="slideProf pageBg"
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
                </form>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Profile
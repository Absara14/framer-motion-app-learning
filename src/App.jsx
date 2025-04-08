import React ,{useState}  from 'react';
import{motion,AnimatePresence} from 'framer-motion';
import './App.css'

function App() {
 const [isModalOpen,setIsModalOpen]=useState(false);

 const toggleModal=()=>{  
   setIsModalOpen(!isModalOpen);
 }

  return (
   <div className="App">  

      <motion.h1
      initial={{y:-250}}
      animate={{y:0}} 
      transition={{type:'spring',stiffness:120}}
      >Framer Motion Animations
      </motion.h1>

      <motion.button
      className='animated-btn'   
      whileHover={{scale:1.1}}
      whileTap={{scale:0.9}}
      onClick={toggleModal}
      >Open Modal</motion.button>

      <AnimatePresence>
        {isModalOpen &&(
          <motion.div 
           className="modal-backdrop"
           initial={{opacity:0}}
           animate={{opacity:1}}
           exit={{opacity:0}}

          >
            <motion.div
            className="modal-content"
            initial={{y:"-100vh"}}
            animate={{y:0}}
            exit={{y:-"50vh"}}
            transition={{type:'spring',stiffness:100}}>
             <h2>Modal Window</h2>
             <p>This is a example modal window</p>

              <motion.button 
              className='animated-btn'   
              whileHover={{scale:1.1}}  
              whileTap={{scale:0.9}}
              onClick={toggleModal}
              >Close Modal
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="page-transition"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 70 }}
      >
        <p>This is a sample page transition animation.</p>
      </motion.div>

   </div>
  )
}

export default App

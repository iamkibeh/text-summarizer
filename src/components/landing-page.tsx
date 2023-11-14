import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-4xl font-bold text-center mb-8'
      >
        AI Text Summarizer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-lg text-center mb-8'
      >
        Summarize long articles and documents in seconds with our AI-powered
        text summarizer.
      </motion.p>

      <NavLink to='summarize'>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
        >
          Get Started
        </motion.button>
      </NavLink>
      
    </div>
  )
}

export default LandingPage

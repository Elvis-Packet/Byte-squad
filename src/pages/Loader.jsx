// src/components/Loader.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const textVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 5}
  },
};

function Loader({ setLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 50);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div 
      className="loader-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <motion.h1 
        className="loader-text"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        Welcome to Byte Squad Software Engineers
      </motion.h1>
    </motion.div>
  );
}

export default Loader;

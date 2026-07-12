import React from 'react';
import { motion } from 'framer-motion';
import { useInfinityMode } from '../context/InfinityModeContext';

const animations = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -20 },
};

const AnimatedPage = ({ children, className = '' }) => {
  const { isInfinityMode } = useInfinityMode();

  // In infinity mode: plain div, no framer-motion, no height overrides
  // Sections flow at their natural height inside the single-page scroll container
  if (isInfinityMode) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;

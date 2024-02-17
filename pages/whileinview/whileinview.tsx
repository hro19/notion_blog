import React from 'react';
import { motion } from 'framer-motion';

const keyframes = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const framerkeyframe = () => {
  return (
    <div>
      <h2 className='text-xl mb-3'>framer keyframe</h2>
      <motion.div variants={keyframes} initial='initial' animate='animate'>
        <a className='bg-cyan-500 p-4 my-2 ml-2'>Hello, world!</a>
      </motion.div>
    </div>
  );
};

export default framerkeyframe;

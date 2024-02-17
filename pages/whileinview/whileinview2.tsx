import React from 'react';
import { motion } from 'framer-motion';

const keyframes = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 0.8, 0.3, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1,
      // `easings` プロパティで各段階のイージング関数を設定
      easings: ['linear', 'easeInQuad', 'easeOutQuad', 'linear'],
    },
  },
};

const framerkeyframe = () => {
  return (
    <div>
      <h2 className='text-xl mb-3'>framer keyframe</h2>
      <motion.div variants={keyframes} initial='initial' animate='animate'>
        <a className='bg-purple-500 p-4 my-2 ml-4'>Hello, world!</a>
      </motion.div>
    </div>
  );
};

export default framerkeyframe;

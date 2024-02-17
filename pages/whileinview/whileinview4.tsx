import React from 'react';
import { delay, motion } from 'framer-motion';

const keyframes = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 0.8, 0.3, 1],
    transition: {
      duration: 2,
      // repeat: Infinity,
      delay: 0.5,
      easings: ['linear', 'easeInQuad', 'easeOutQuad', 'linear'],
    },
  },
};

const framerkeyframe = () => {
  return (
    <div>
      <h2 className='text-xl mb-3'>視界に入ったときに数秒遅れて発火して↓</h2>
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <motion.div variants={keyframes} initial='initial' whileInView='animate'>
        <a className=' bg-blue-500 ml-4 p-4 my-2'>Hello, world!</a>
      </motion.div>
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
    </div>
  );
};

export default framerkeyframe;

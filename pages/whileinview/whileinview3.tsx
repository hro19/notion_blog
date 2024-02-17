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
      // repeat: Infinity,
      // repeatDelay: 1,
      easings: ['linear', 'easeInQuad', 'easeOutQuad', 'linear'],
    },
  },
};

const framerkeyframe = () => {
  return (
    <div>
      <h2 className='text-xl mb-3'>視界に入ったときに一度だけ発火↓</h2>
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
        <a className=' bg-rose-500 p-4 my-2 ml-4'>Hello, world!</a>
      </motion.div>
    </div>
  );
};

export default framerkeyframe;

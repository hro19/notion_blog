import React from 'react';
import { delay, easeIn, motion } from 'framer-motion';

const keyframes = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
      easeIn,
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
        <a className=' bg-orange-500 p-4 my-2 ml-8'>Hello, world!</a>
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

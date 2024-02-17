import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const framer = () => {
  return (
    <>
      <Link
        href='/animatecss'
        className='underline mb-3 text-lg text-green-700'
      >
        animate.css
      </Link>
      <h2 className='font-bold from-neutral-900 text-2xl underline'>
        springお試し
      </h2>
      <motion.button
        initial={{ x: '-50px', opacity: '0' }}
        animate={{ x: 0, opacity: '1' }}
        transition={{ type: 'spring', stiffness: 140 }}
        className='text-xl text-zinc-50 bg-blue-500 p-4 ml-2'
      >
        springお試し
      </motion.button>

      <h2 className='font-bold from-neutral-900 text-2xl underline'>
        オンhover
      </h2>
      <motion.button
        whileHover={{
          scale: 1.1,
          textShadow: '0px 0px 8px rgb(255,255,255)',
          boxShadow: '0px 0px 8px rgb(255,255,255)',
        }}
        className='text-xl text-zinc-50 bg-orange-500 rounded-lg p-4 ml-2'
      >
        ホバー
      </motion.button>
    </>
  );
};

export default framer;

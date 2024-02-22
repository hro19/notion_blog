import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const framer = () => {
  return (
    <>
      <p>
        <Link
          href='/animatecss'
          className='underline mb-3 text-lg text-green-700'
        >
          animate.css
        </Link>
      </p>
      <h2 className='inline-block mr-4'>whileInViewの試作</h2>
      <Link
        href='/whileinview/whileinview'
        className='underline mb-3 mr-3 text-lg text-green-700'
      >
        その1
      </Link>
      <Link
        href='/whileinview/whileinview2'
        className='underline mb-3 mr-3 text-lg text-green-700'
      >
        その2
      </Link>
      <Link
        href='/whileinview/whileinview3'
        className='underline mb-3 mr-3 text-lg text-green-700'
      >
        その3
      </Link>
      <Link
        href='/whileinview/whileinview4'
        className='underline mb-3 mr-3 text-lg text-green-700'
      >
        その4
      </Link>
      <Link
        href='/whileinview/whileinview5'
        className='underline mb-3 mr-3 text-lg text-green-700'
      >
        その5
      </Link>
      <h2 className='inline-block mr-4'>awesomerevealの試作</h2>
      <Link
        href='/awesomereveal/awesomereveal'
        className='underline mb-3 mr-3 text-lg text-cyan-700'
      >
        その1
      </Link>
      <Link
        href='/awesomereveal/awesomereveal2'
        className='underline mb-3 mr-3 text-lg text-cyan-700'
      >
        その2(【react-awesome-reveal】と【framer-motion】を組み合わせるが、発火位置調整（rootMargin）がうまくいっていない)
      </Link>
      <h2 className='inline-block mr-4'>intersectionとanimate.cssの試作</h2>
      <Link
        href='/intersection/intersection'
        className='underline mb-3 mr-3 text-lg text-orange-700'
      >
        その1
      </Link>
      <Link
        href='/intersection/intersection2'
        className='underline mb-3 mr-3 text-lg text-orange-700'
      >
        その2
      </Link>
      <Link
        href='/intersection/intersection3'
        className='underline mb-3 mr-3 text-lg text-orange-700'
      >
        その3(【react-intersection-observer】と【framer-motion】を組み合わせることで発火位置を調整)
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

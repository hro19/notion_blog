import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Intersection3 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, //  要素がビューポートに入ったら、再度のトリガーを防ぐ
    rootMargin: '0px 0px -250px',
  });

  const animation = useAnimation();

  //  要素がビューに入ったときにアニメーションを開始
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [inView, animation]);

  return (
    <>
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
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }} //  初期状態
        animate={animation}
        className=' bg-rose-500 p-4 my-2 ml-4 inline-block text-white'
      >
        ハロハロはろ
      </motion.div>
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
    </>
  );
};

export default Intersection3;

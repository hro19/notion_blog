import React from 'react';
import { motion } from 'framer-motion';

const animatecss = () => {
  return (
    <>
      <div>
        <div>
          <h2 className='text-sky-400'>アニメ―トcss</h2>
          <section className='mb-16'>
            <a
              href='https://animate.style'
              target='_blank'
              rel='noopener noreferrer'
              className='underline text-lg text-green-700 mb-3'
            >
              参考サイト
            </a>
            <hr />
            ①npm install animate.css
            --saveをする。②_app.tsxにグローバルcssを設置する（importでanimate.css;）③https://animate.styleを参考に実装する
          </section>
          <p className='animate__animated animate__bounce animate__infinite bg-amber-500 p-4 inline-block'>
            An animated element
          </p>
          <hr />
          <p className='animate__animated animate__rubberBand animate__infinite bg-amber-500 p-4 inline-block'>
            An animated element
          </p>
          <hr />
          <p className='animate__animated animate__backInRight animate__infinite bg-amber-500 p-4 inline-block my-3'>
            An animated element
          </p>
          <hr />
          <p className='animate__animated animate__bounceIn animate__infinite bg-amber-500 p-4 inline-block my-3'>
            An animated element
          </p>
          <hr />
          <p className='animate__animated animate__bounceIn animate__infinite bg-amber-500 p-4 inline-block my-3'>
            An animated element
          </p>
          <hr />
          <p className='animate__animated animate__fadeInUp animate__infinite bg-amber-500 p-4 inline-block my-3'>
            An animated element
          </p>
          <hr />
          <p className='animate__animated animate__flipInX animate__infinite bg-amber-500 p-4 inline-block my-3'>
            An animated element
          </p>
          <hr />
          <p className='animate__animated animate__slideInUp animate__infinite bg-amber-500 p-4 inline-block my-3'>
            An animated element
          </p>
          <hr />
          <p className='animate__animated animate__zoomIn animate__infinite bg-amber-500 p-4 inline-block my-3'>
            An animated element
          </p>
          <hr />
          <p className='animate__animated animate__rollIn animate__infinite bg-amber-500 p-4 inline-block my-3'>
            An animated element
          </p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 2 }}
        className='bg-pink-500 p-4'
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0, duration: 2 }}
        className='animate__animated animate__bounceIn animate__repeat-2'
      >
        <p className='bg-orange-700 p-4 inline-block my-3'>
          animatecssとframer motionの組み合わせ
        </p>
        <p>framer motionとanimate.cssの組み合わせはうまくいかない↑</p>
      </motion.div>
    </>
  );
};

export default animatecss;

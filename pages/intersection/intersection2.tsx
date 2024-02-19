import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Intersection = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: '0px 0px -250px',
  });

  useEffect(() => {
    if (inView) {
      console.log(inView);
    }
  }, [inView]);

  return (
    <>
      <hr className='mb-16' />
      <hr className='mb-16' />
      <hr className='mb-16' />
      <p className='animate__animated animate__bounceIn animate__repeat-2 bg-amber-500 p-4 inline-block my-3'>
        An animated element
      </p>
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
      <div ref={ref}>
        <p
          className={`${
            inView
              ? 'animate_animated animate__fadeInRight animate__infinite bg-cyan-500 p-4 inline-block my-3;'
              : ''
          }`}
        >
          An animated element
        </p>
        <h2>inViewでclassをふよしてもアニメーションは発動しない</h2>
      </div>
      <hr className='mb-16' />
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

export default Intersection;

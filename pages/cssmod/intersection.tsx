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
      <div ref={ref}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
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

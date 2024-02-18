import { Fade } from 'react-awesome-reveal';
import { useInView } from 'react-intersection-observer';

const Awesomereveal2 = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    rootMargin: '0px 0px 0px',
  });

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
      <div ref={ref}>
        <Fade
          direction='up'
          fraction={inView ? 1 : 0}
          className='bg-red-600 text-white p-8 text-2xl inline-block'
        >
          <p>I am an animated text</p>
        </Fade>
      </div>
      <hr className='mb-16' />
      <hr className='mb-16' />
      <p>rootMarginでの調整が正しく効いていない模様</p>
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

export default Awesomereveal2;

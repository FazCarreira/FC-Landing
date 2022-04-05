import { FunctionComponent, useEffect, useState } from 'react';
import Swipe from 'react-easy-swipe';
import useInterval from '../../App/components/UseInterval';

interface CarouselProps {
  array: Array<Slide>;
}

interface Slide {
  image: string;
  href: string;
  text: string;
  button: string;
}

const Carousel: FunctionComponent<CarouselProps> = ({ array }) => {
  const [carousel, setCarousel] = useState<number>(0);
  //   const [paused, setPaused] = useState<boolean>(false);

  const nextSlide = () =>
    setCarousel((c) => (c === array.length - 1 ? 0 : c + 1));

  const prevSlide = () => {
    let newSlide = carousel === 0 ? array.length - 1 : carousel - 1;
    setCarousel(newSlide);
  };

  const [start, stop] = useInterval(nextSlide, 3000);
  useEffect(start, [start]);

  return (
    <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
      {array.map((slide, index) => (
        <div
          key={index}
          onPointerEnter={stop}
          onPointerLeave={start}
          className={`relative ${carousel !== index && 'hidden'}`}>
          <div className='lg:h-[30rem] h-36  overflow-hidden'>
            <img className='w-full object-cover' src={slide.image} alt='' />
          </div>
          <div className='flex flex-col md:flex-row items-center md:absolute bg-white/70 bottom-5 w-full h-24'>
            <h1 className='text-primary font-bold md:text-4xl text-xl m-auto'>
              {slide.text}
            </h1>
            <a
              href={slide.href}
              className='bg-primary font-main md:text-xl text-white px-3 py-2 rounded-lg hover:bg-primary/80 m-auto'>
              {slide.button}
            </a>
          </div>
          <div
            className='absolute left-0 top-1/2 cursor-pointer text-gray-500 text-opacity-50 hover:text-opacity-100 hidden md:block'
            onClick={prevSlide}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-24 w-24'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </div>
          <div
            className='absolute right-0 top-1/2 cursor-pointer text-gray-500 text-opacity-50 hover:text-opacity-100 hidden md:block'
            onClick={nextSlide}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-24 w-24'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </div>
        </div>
      ))}
    </Swipe>
  );
};

export default Carousel;

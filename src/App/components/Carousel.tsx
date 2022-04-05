import {
  Children,
  cloneElement,
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
import Swipe from 'react-easy-swipe';
import useInterval from '../../App/components/UseInterval';

interface CarouselProps {
  children: React.ReactElement;
}

const Carousel: FunctionComponent<CarouselProps> = ({ children }) => {
  const [carousel, setCarousel] = useState<number>(0);
  const [length, setLength] = useState(0);

  const nextSlide = () => setCarousel((c) => (c === length ? 0 : c + 1));

  const prevSlide = () => {
    let newSlide = carousel === 0 ? length : carousel - 1;
    setCarousel(newSlide);
  };

  const [start, stop] = useInterval(nextSlide, 3000);
  useEffect(start, [start]);

  return (
    <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
      {/* {Children.map(children, (child, i) => {
        setLength(i);
        return cloneElement(child, {
          onPointerEnter: stop,
          onPointerLeave: start,
          style: { display: carousel? 'none' },
        });
      })} */}
      {/* {map((slide, index) => (
        <div
          key={index}
          onPointerEnter={stop}
          onPointerLeave={start}
          className={`relative ${
            carousel !== index && 'hidden'
          } md:h-[30rem] overflow-hidden`}>
          <img className='w-full md:object-cover' src={slide.image} alt='' />
          <div className='flex flex-col md:flex-row items-center absolute bg-white/70 bottom-5 w-full h-24'>
            <h1 className='text-primary md:text-4xl text-xl m-auto'>
              {slide.text}
            </h1>
            <button className='bg-primary font-main md:text-xl text-white px-3 py-2 rounded-lg hover:bg-primary/80 m-auto'>
              {slide.button}
            </button>
          </div>
          <div
            className='absolute left-0 top-1/2 cursor-pointer hidden md:block'
            onClick={prevSlide}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
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
            className='absolute right-0 top-1/2 cursor-pointer hidden md:block'
            onClick={nextSlide}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
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
      ))} */}
    </Swipe>
  );
};

export default Carousel;

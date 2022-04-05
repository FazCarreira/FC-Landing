import { FunctionComponent, useEffect, useState } from 'react';
import Swipe from 'react-easy-swipe';
import useInterval from '../../App/components/UseInterval';

interface CarouselProps {
  array: Array<Slide>;
}

interface Slide {
  nome: string;
  desc: string;
  file: {
    src: string;
  };
}

const CarouselO: FunctionComponent<CarouselProps> = ({ array }) => {
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
    <Swipe
      className='bg-info h-[28rem] py-8 md:h-72'
      onSwipeLeft={nextSlide}
      onSwipeRight={prevSlide}>
      {array.map((slide, index) => (
        <div
          key={index}
          onPointerEnter={stop}
          onPointerLeave={start}
          className={`relative ${carousel !== index && 'hidden'}`}>
          <div className='mx-8 md:mx-32 items-center md:items-start flex flex-col-reverse md:flex-row justify-end md:justify-between'>
            <h3 className='text-lg md:text-4xl text-white text-center md:text-left md:w-2/3 self-center my-auto'>
              {slide.desc}
            </h3>
            <div className='flex flex-col items-center justify-center md:w-1/3'>
              <img
                className='object-cover rounded-full w-40 h-w-40'
                src={
                  slide.file?.src ||
                  'https://via.placeholder.com/500/?text=Aluno'
                }
                alt='Foto Aluno'
              />
              <h3 className='text-2xl text-white text-center md:text-left my-3 md:my-2'>
                {slide.nome}
              </h3>
            </div>
          </div>
          <div
            className='absolute left-0 top-1/3 text-gray-500 text-opacity-50 hover:text-opacity-100 cursor-pointer hidden md:block'
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
            className='absolute right-0 top-1/3 text-gray-500 text-opacity-50 hover:text-opacity-100 cursor-pointer hidden md:block'
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

export default CarouselO;

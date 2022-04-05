import { FunctionComponent, useState } from 'react';
import { openLink } from '../../function';

interface TopNavProps {
  cursos: Array<String>;
  path: string;
}

const TopNav: FunctionComponent<TopNavProps> = ({ cursos, path }) => {
  const [open, setOpen] = useState<Boolean>(false);
  const toggleOpen = () => setOpen(!open);
  const [dropdown, setDropdown] = useState<Boolean>(false);
  const sortedCursos = cursos?.sort((a, b) => a?.localeCompare(b as string));
  return (
    <nav
      className={`font-main px-4 md:flex md:justify-between items-center bg-white h-16 mt-6 lg:mx-20 xl:mx-40 md:mt-12 md:mb-0 ${
        open && (dropdown ? 'mb-56' : 'mb-44')
      } z-10`}>
      <div className='flex items-center justify-between'>
        <div className='px-4 cursor-pointer md:hidden' onClick={toggleOpen}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <ul className='flex items-center'>
          <li className='h-11'>
            <a href='/'>
              <img
                className='h-full w-auto mx-auto'
                src='/images/Logo.png'
                alt='Faz Carreira'
              />
            </a>
          </li>
        </ul>
      </div>
      <ul
        className={`md:flex items-center mt-4 origin-top-left transition delay-100 ease-out ${
          open ? 'scale-100' : 'scale-0'
        } md:scale-100`}>
        <li className='text-gray-500 sm:text-sm md:text-base px-2 py-1  hover:underline'>
          <a
            className={
              path === '/institucional' ? 'text-lg text-primary underline' : ''
            }
            href='/institucional'>
            <span>Quem Somos</span>
          </a>
        </li>
        <li
          onMouseOver={() => setDropdown(true)}
          onMouseOut={() => setDropdown(false)}
          onClick={() => setDropdown(!dropdown)}
          className={`text-gray-500 sm:text-sm md:text-base px-2 py-1 ${
            dropdown && 'mb-12'
          } md:mb-0 hover:underline relative`}>
          <div
            className={`flex items-center cursor-pointer ${
              path.includes('cursos') && 'text-lg text-primary underline'
            }`}>
            <span>Nossas Trilhas</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div
            style={{ width: '256px' }}
            className={`${
              dropdown ? 'block' : 'hidden'
            } md:pt-5 absolute bg-white shadow-md flex flex-col left-10 md:left-0`}>
            {sortedCursos?.map((n, i) => (
              <div key={i} className='hover:underline md:py-2 md:px-4 hover:bg-gray-300 hover:text-primary'>
                <a href={`/cursos/${i}`}>
                  {n}
                </a>
              </div>
            ))}
          </div>
        </li>
        <li className='text-gray-500 sm:text-sm md:text-base px-2 py-1  hover:underline'>
          <a
            className={
              path === '/apoio' ? 'text-lg text-primary underline' : ''
            }
            href='/apoio'>
            <span>Como apoiar</span>
          </a>
        </li>
        <li className='text-gray-500 sm:text-sm md:text-base px-2 py-1  hover:underline'>
          <a
            className={
              path === '/empresas' ? 'text-lg text-primary underline' : ''
            }
            href='/empresas'>
            <span>Para empresas</span>
          </a>
        </li>
        <li className='text-gray-500 sm:text-sm md:text-base px-2 py-1  hover:underline'>
          <a
            className={`${
              path.includes('blog') && 'text-lg text-primary underline'
            }`}
            href='/blog'>
            <span>Blog</span>
          </a>
        </li>
        <li className='text-gray-500 sm:text-sm md:text-base px-2 py-1  hover:underline'>
          <button
            onClick={openLink('https://app.fazcarreira.com/')}
            className='bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary/80'>
            ENTRAR
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;

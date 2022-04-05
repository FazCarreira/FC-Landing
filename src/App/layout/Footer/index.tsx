import { Fragment, FunctionComponent } from 'react';
import { openMail } from '../../function';

import LOGO from './whiteLogo.png'

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <Fragment>
      <div className='bg-primary pt-3'>
        <div className='flex flex-col md:flex-row lg:mx-40 md:justify-between text-white'>
          <div className='w-56  grow-0 hidden md:block'>
            <img src={LOGO} alt='Logo Faz Carreira' />
          </div>
          <div className='flex flex-col mx-4'>
            <div>
              <h2 className='font-main text-xl'>FALE COM A GENTE:</h2>
            </div>
            <ul className='my-auto flex flex-col pb-4'>
              <li>
                <div className='flex items-center my-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-10 w-10 mr-2'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                  <h3>
                    <a
                      onClick={openMail}
                      target='_top'
                      href={`mailto:contato@fazcarreira.com`}
                      className='text-white font-weight-bold'>
                      contato@fazcarreira.com
                    </a>
                  </h3>
                </div>
              </li>
              <li>
                <div className='flex items-center my-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-10 w-10 mr-2'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                  </svg>
                  <h3>
                    <a href='tel:+558598881-0354'>(85) 98881-0354</a>
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          <div className='flex flex-col mx-4 grow-2'>
            <div>
              <h2 className='font-main text-xl'>NAVEGAÇÃO:</h2>
            </div>
            <hr />
            <ul className='my-auto flex flex-col pb-4'>
              <li className='hover:underline'>
                <a href='/'>Inicio</a>
              </li>
              <li className='hover:underline'>
                <a href='/institucional'>Quem somos</a>
              </li>
              <li className='hover:underline'>
                <a href='/cursos/0'>Nossas Trilhas</a>
              </li>
              <li className='hover:underline'>
                <a href='/apoio'>
                  <span>Como apoiar</span>
                </a>
              </li>
              <li className='hover:underline'>
                <a href='/empresas'>
                  <span>Para empresas</span>
                </a>
              </li>
            </ul>
          </div>
          <div className='hidden md:flex flex-col mx-4 my-auto items-center'>
            <h2 className='text-xl'>Não encontrou o que procura?</h2>
            <h2 className='text-xl'>Deixe uma sugestão</h2>
            <button onClick={openMail} className='bg-primary font-main px-3 py-2 rounded-lg border hover:bg-primary/80'>
              ENVIAR SUGESTÃO
            </button>
          </div>
        </div>
      </div>
      <div className='bg-secondary flex'>
        <p className='text-primary mx-auto md:ml-auto md:mr-5 my-auto'>
          © Faz Carreira - Todos os direitos reservados
        </p>
      </div>
      <div className='bg-info h-2' />
    </Fragment>
  );
};

export default Footer;

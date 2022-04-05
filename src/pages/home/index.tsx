import { FunctionComponent } from 'react';
import Carousel from './Carousel';
import CarouselO from './Carousel Opinions';
import Youtube from '../../App/components/Youtube';
import { openLink } from '../../App/function';
import moment from 'moment';

const HomeCarousel = [
  {
    image: '/images/home/carousel1.jpeg',
    href: '/apoio',
    text: 'Faça a diferença na vida de um jovem',
    button: 'Patrocine',
  },
  {
    image: '/images/home/carousel2.jpeg',
    href: 'https://app.fazcarreira.com/',
    text: 'A startup que mudou a vida de 700 jovens',
    button: 'Inscreva-se',
  },
  {
    image: '/images/home/carousel3.jpeg',
    href: '/cursos/0',
    text: 'Conheça nossa trilha de aprendizado',
    button: 'Saiba mais',
  },
];

interface HomePageProps {
  data: {
    video: string;
    opinioes: Array<any>;
    parceiros: Array<any>;
  };
  posts: [
    {
      _id: string;
      title: string;
      html: string;
      image: string;
      created: Date;
    }
  ];
}
const HomePage: FunctionComponent<HomePageProps> = ({ data, posts }) => {
  return (
    <div className='my-5'>
      <Carousel array={HomeCarousel} />
      {data?.video && (
        <div className='bg-primary py-8 px-4 md:px-32 flex flex-col md:flex-row items-center'>
          <h1 className='text-4xl text-white text-center md:text-left my-5 md:my-0'>
            A Faz Carreira ajuda você a desenvolver as habilidades mais
            procuradas pelas grandes empresas.
          </h1>
          <Youtube className='hidden md:relative' url={data?.video} />
        </div>
      )}
      {posts?.length > 0 && (
        <div className='bg-secondary flex flex-col md:flex-row justify-between items-center h-[32rem]'>
          <img
            className='h-full my-1'
            src={posts[0].image}
            alt={posts[0].title}
          />
          <div className='mx-2 my-1 flex flex-col justify-between bg-white rounded-lg border border-gray-400 py-5 px-4'>
            <div>
              <h4 className='font-bold mb-3'>{posts[0].title}</h4>
              <div className='text-gray-800 text-sm post line-clamp-3'>
                <div dangerouslySetInnerHTML={{ __html: posts[0].html }} />
              </div>
            </div>
            <div className='mt-3'>
              <div className='flex items-center justify-between text-gray-800'>
                <p className='text-sm'>
                  {moment(posts[0].created).format('DD/MM/YYYY')}
                </p>
                <a
                  href={`/blog/${posts[0]._id}`}
                  className='hover:underline text-gray-400 hover:text-gray-600'>
                  Continuar Lendo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {data?.opinioes && <CarouselO array={data?.opinioes} />}
      <div className='my-8'>
        <div className='flex justify-center mb-8'>
          <h1 className='text-4xl font-bold text-secondary text-center my-5 md:my-0'>
            Faça carreira com a gente!
          </h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center md:mx-32'>
          <div className='mt-12 md:mx-5 flex flex-col items-center'>
            <img
              className='object-cover rounded-full h-80 md:mb-5 bg-info'
              src={'/images/home/dir1.jpeg'}
              alt='Foto Aluno'
            />
            <a
              href='/cursos/0'
              className='bg-white text-primary font-main px-3 py-2 rounded-lg hover:bg-primary hover:text-white'>
              Participe da trilha
            </a>
          </div>
          <div className='mt-12 md:mx-5 flex flex-col items-center'>
            <img
              className='object-cover rounded-full h-80 md:mb-5'
              src={'/images/home/dir3.jpeg'}
              alt='Foto Apoie'
            />
            <a
              href='/apoio/pagamento'
              className='bg-white text-primary font-main px-3 py-2 rounded-lg hover:bg-primary hover:text-white'>
              Apoie mais jovens
            </a>
          </div>
          <div className='mt-12 md:mx-5 flex flex-col items-center'>
            <img
              className='object-cover rounded-full h-80 md:mb-5'
              src={'/images/home/dir2.jpeg'}
              alt='Foto Empresas'
            />
            <a
              href='/empresas'
              className='bg-white text-primary font-main px-3 py-2 rounded-lg hover:bg-primary hover:text-white'>
              Contrate nossos jovens
            </a>
          </div>
        </div>
      </div>
      {data?.parceiros && (
        <div className='my-8'>
          <div className='flex justify-center'>
            <h1 className='text-4xl font-bold text-center my-5 md:my-0'>
              Nossos Apoiadores
            </h1>
          </div>
          <div className='lg:mx-40 flex flex-col md:flex-row items-center justify-center'>
            {data?.parceiros?.map((parceiro) => (
              <button key={parceiro._id} onClick={openLink(parceiro.link)}>
                <img src={parceiro.file?.src} alt={parceiro.name} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

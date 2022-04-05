import { FunctionComponent } from 'react';
import Youtube from '../../App/components/Youtube';
import { openLink } from '../../App/function';

interface AboutPageProps {
  data: {
    trilhas: any;
    apoiadores: Array<any>;
    about: {
      video: string;
      video2: string;
      time: [
        {
          _id: string;
          nome: string;
          desc: string;
          src: string;
          link: string;
        }
      ];
      feitos: {
        jovens: string;
        turmas: string;
        estados: string;
        empresas: string;
        insercoes: string;
        impactados: string;
      };
      text1: string;
      text2: string;
      bginfo: string;
    };
  };
}

const AboutPage: FunctionComponent<AboutPageProps> = ({ data }) => {
  const alcancado = [
    [data?.about?.feitos?.jovens, 'Jovens capacitados'],
    [data?.about?.feitos?.turmas, 'Turmas realizadas'],
    [data?.about?.feitos?.estados, 'Estados do Nordeste'],
    [data?.about?.feitos?.empresas, 'Empresas parcerias'],
    [data?.about?.feitos?.insercoes, 'Jovens inseridos no mercado'],
    [data?.about?.feitos?.impactados, 'Pessoas impactadas indiretamente'],
  ];

  return (
    <div className='my-16'>
      <div className='mx-4 lg:mx-40 w-32 md:w-60'>
        <img src='/images/logos.png' alt='Logo' />
      </div>
      <div className='mx-4 lg:mx-40'>
        <h1 className='text-4xl font-bold md:text-6xl text-primary my-5 md:my-0'>
          A Faz Carreira
        </h1>
      </div>
      <div className='flex flex-col md:flex-row items-center mx-4 lg:mx-40 mt-8'>
        <p className='text-justify md:text-lg md:mr-8 w-full my-5 md:my-0'>
          {data?.about?.text1}
        </p>
        <Youtube className='w-full hidden md:block' url={data?.about?.video} />
      </div>
      <div className='flex flex-col md:flex-row mx-4 lg:mx-40 mt-8'>
        <p className='text-justify md:text-lg'>{data?.about?.text2}</p>
      </div>
      <div className='bg-info py-8 px-4 lg:px-40 mt-8 text-white'>
        <h1 className='text-4xl font-bold md:text-left my-5 md:my-0'>
          E é assim que a gente Faz Carreira
        </h1>
        <div className='flex flex-col md:flex-row items-center my-5'>
          <Youtube className='md:w-1/12 md:static' url={data?.about?.video2} />
          <p className='w-full md:text-lg my-5 ml-5 md:my-0 xxl:-ml-96'>
            {data?.about?.bginfo}
          </p>
        </div>
      </div>
      <div className='mt-8'>
        <div className='flex justify-center mx-4 lg:mx-40'>
          <h1 className='text-4xl font-bold md:text-6xl text-primary my-5 md:my-0'>
            Nosso compromisso com a Agenda 2030
          </h1>
        </div>
        <div className='flex'>
          <div className='bg-red-600 py-8 w-1/2 px-4 md:px-32 mt-8 text-white'>
            <div className='flex flex-col md:flex-row justify-between items-center my-5'>
              <div>
                <h1 className='font-bold text-lg md:text-xl my-5 md:my-0 md:ml-5'>
                  ODS 4 – Educação de Qualidade
                </h1>
                <p className='md:text-lg my-5 md:my-0 md:ml-5'>
                  Contribuímos com o desenvolvimento das soft skills também
                  conhecidas como habilidades socioemocionais.
                </p>
              </div>
              <img
                className='h-32 md:ml-5'
                src={'/images/about/ods4.png'}
                alt='ODS4'
              />
            </div>
          </div>
          <div className='bg-rose-800 py-8 w-1/2 px-4 md:px-32 mt-8 text-white'>
            <div className='flex flex-col md:flex-row justify-between items-center my-5'>
              <div>
                <h1 className='font-bold text-lg md:text-xl my-5 md:my-0 md:ml-5'>
                  ODS 8 – Trabalho Decente e Crescimento Econômico
                </h1>
                <p className='md:text-lg my-5 md:my-0 md:ml-5'>
                  Conectamos jovens a empresas que querem gerar impacto social.
                </p>
              </div>
              <img
                className='h-32 md:ml-5'
                src={'/images/about/ods8.png'}
                alt='ODS8'
              />
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <div className='flex mx-4 lg:mx-40  my-5 md:my-0'>
            <h1 className='font-bold text-4xl md:text-6xl text-primary'>
              Conheça nosso time
            </h1>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mx-4 lg:mx-40 mt-16'>
            {data?.about?.time?.map((m) => (
              <button
                onClick={openLink(m.link)}
                className='bg-white rounded overflow-hidden relative'
                key={m._id}>
                <img
                  className='object-cover rounded-full md:mb-5 h-40 w-40 mx-auto'
                  src={m.src}
                  alt={m.nome}
                />
                <h3 className='text-lg md:text-xl text-center'>{m.nome}</h3>
                <h4 className='text-center'>{m.desc}</h4>
              </button>
            ))}
          </div>
        </div>
        {data?.trilhas?.[1]?.facilitadores?.length > 0 && (
          <div className='bg-sky-100 my-24'>
            <div className='flex mx-4 lg:mx-40 py-8 md:my-0 justify-center'>
              <h1 className='text-primary text-4xl font-bold'>Facilitação</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mx-4 lg:mx-40 mt-4'>
              {data?.trilhas?.[1]?.facilitadores?.map((p: any, i: number) => (
                <div className='relative flex flex-col items-center' key={i}>
                  <div className='rounded overflow-hidden'>
                    <img
                      alt={p?.name}
                      className='object-cover rounded-full md:mb-5 h-40 w-40'
                      src={
                        p?.img || 'https://via.placeholder.com/500/?text=Image'
                      }
                    />
                  </div>
                  <h3 className='text-lg md:text-xl text-center font-bold'>
                    {p?.name}
                  </h3>
                  <h4 className='text-center'>{p?.desc}</h4>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className='bg-info py-8 px-4 lg:px-40 mt-8 text-white'>
          <div className='flex justify-center'>
            <h1 className='font-bold text-4xl md:text-left my-5 md:my-0'>
              O que já alcançamos!
            </h1>
          </div>
          <div className='grid grid-cols-3 gap-10 my-5'>
            {alcancado.map((a) => (
              <div className='flex flex-col items-center' key={a[1]}>
                <h5 className='text-4xl md:text-5xl font-bold'>{a[0]}</h5>
                <h6 className='text-lg text-center md:text-xl font-bold'>
                  {a[1]}
                </h6>
              </div>
            ))}
          </div>
        </div>
        {data?.apoiadores && (
          <div className='mt-8'>
            <div className='flex justify-center'>
              <h1 className='font-bold text-4xl text-center my-5 md:my-0'>
                Fizeram carreira conosco
              </h1>
            </div>
            <div className='lg:mx-40 flex flex-col md:flex-row items-center justify-center'>
              {data?.apoiadores?.map((apoiador) => (
                <button key={apoiador._id} onClick={openLink(apoiador.link)}>
                  <img src={apoiador.file?.src} alt={apoiador.name} />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;

import moment from 'moment';
import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import Animacao from '../../App/components/Animacoes/Curso1';
import { openLink, openMail } from '../../App/function';

interface CoursePageProps {
  data: {
    trilhas: [
      {
        animacao: string;
        name: string;
        chamada: string;
        desc: string;
        inicio: Date;
        fim: Date;
        inscricoes: Date;
        investimento: string;
        horas: string;
        facilitadores: [
          {
            img: string;
            name: string;
            desc: string;
            link: string;
          }
        ];
        modulos: [
          {
            name: string;
            desc: string;
            about: string;
          }
        ];
      }
    ];
  };
}

type CourseParams = {
  readonly index?: string;
};

const CoursePage: FunctionComponent<CoursePageProps> = ({ data }) => {
  const params = useParams<CourseParams>();
  const index = parseInt(params.index as string);
  const trilhas = data?.trilhas?.sort((a, b) => a.name?.localeCompare(b.name));

  const handleAnimacao = (key: string) => {
    switch (key) {
      case 'Animação Acelerando Talentos':
        return <Animacao className='hidden md:block' />;
      case 'Animação Mulheres Provedoras':
        return <Animacao className='hidden md:block' animation={1} />;
      default:
        break;
    }
  };

  return (
    <div className='my-5'>
      {handleAnimacao(trilhas?.[index]?.animacao)}
      <div className='md:hidden'>
        <h1 className='font-bold text-4xl text-center text-primary my-5 md:my-0'>
          {trilhas?.[index]?.name}
        </h1>
        <img
          src={`/images/courses/${trilhas?.[index]?.name}.png`}
          alt={trilhas?.[index]?.name}
        />
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center mx-4 lg:mx-40 mt-8'>
        <div className='md:w-1/2'>
          <h1 className='text-4xl text-primary my-5 md:my-0 font-bold'>
            {trilhas?.[index]?.chamada}
          </h1>
          <p className='text-justify md:text-lg my-5 md:my-0'>
            {trilhas?.[index]?.desc}
          </p>
        </div>
        <div className='md:w-1/2 bg-secondary md:ml-5 rounded-lg py-2 px-5'>
          {moment().diff(moment(trilhas?.[index]?.inscricoes)) < 0 ? (
            <>
              <div className='my-2'>
                <h1 className='text-2xl mb-4 font-bold'>Próxima Turma</h1>
                <h2 className='text-lg'>
                  Inicio:{' '}
                  <span className='text-base font-normal text-gray-600'>
                    {moment(trilhas?.[index]?.inicio).format('DD/MM/YYYY')}
                  </span>
                </h2>
                <h2 className='text-lg'>
                  Fim:{' '}
                  <span className='text-base font-normal text-gray-600'>
                    {moment(trilhas?.[index]?.fim).format('DD/MM/YYYY')}
                  </span>
                </h2>
                <h2 className='text-lg'>
                  Encerramento das Inscrições:{' '}
                  <span className='text-base font-normal text-gray-600'>
                    {moment(trilhas?.[index]?.inscricoes).format('DD/MM/YYYY')}
                  </span>
                </h2>
                <h3 className='text-xs xl:text-base text-white italic'>
                  Sujeito a alteração sem prévio aviso, em função do número de
                  vagas. <strong>Vagas limitadas</strong>
                </h3>
              </div>
              <div className='my-2'>
                <h1 className='text-2xl mb-4 font-bold'>Investimento</h1>
                <h2 className='text-lg'>
                  <strong>{trilhas?.[index]?.investimento}</strong> (Em até 10x
                  no cartão de crédito)
                </h2>
                <h3 className='text-xs xl:text-base text-white italic'>
                  Consulte valores promocionais para empresas ou personalize sua
                  trilha. <button onClick={openMail}>Fale com a gente</button>
                </h3>
                <button
                  onClick={openLink('https://app.fazcarreira.com/')}
                  className='mt-8 bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary/80'>
                  Inscreva-se
                </button>
              </div>
            </>
          ) : (
            <>
              <div className='my-2'>
                <h2 className='text-2xl mb-4 font-bold'>Aguarde!</h2>
                <h1 className='text-4xl mb-4 font-bold text-primary'>
                  Nova turma em breve!
                </h1>
                <h3 className='text-xs xl:text-base text-white italic'>
                  Não quer esperar? Consulte como iniciar uma turma com as
                  mulheres de sua organização.{' '}
                  <button className='underline' onClick={openMail}>Fale com a gente</button>.
                </h3>
              </div>
            </>
          )}
        </div>
      </div>
      <div className='bg-sky-100 py-8 px-4 lg:px-40 mt-8'>
        <div className='grid grid-cols-3 gap-10 my-5'>
          <div className='flex flex-col items-center text-primary'>
            <h5 className='text-4xl md:text-5xl font-bold'>
              {trilhas?.[index]?.modulos?.length}
            </h5>
            <h6 className='text-lg md:text-xl font-bold'>módulos</h6>
          </div>
          <div className='flex flex-col items-center text-secondary'>
            <h5 className='text-4xl md:text-5xl font-bold'>
              {trilhas?.[index]?.horas}
            </h5>
            <h6 className='text-lg md:text-xl font-bold'>horas</h6>
          </div>
          <div className='flex flex-col items-center text-info'>
            <h5 className='text-4xl md:text-5xl font-bold'>100%</h5>
            <h6 className='text-lg md:text-xl font-bold'>online</h6>
          </div>
        </div>
      </div>
      <div className='mt-24 mx-4 lg:mx-40'>
        <div className='flex justify-center'>
          <h1 className='text-primary text-4xl text-center'>
            Desenvolva as soft skills mais valorizadas na atualidade!
          </h1>
        </div>
        <div className='flex mt-8 justify-evenly flex-wrap'>
          <div className='flex flex-col items-center justify-center max-w-xs my-4 md:py-4'>
            <img
              className='h-20'
              alt='Soft Skill'
              src={'/images/courses/Inteligencia_emocional.png'}
            />
            <h3 className='text-primary font-bold text-xl md:text-xl text-center'>
              Inteligência Emocional
            </h3>
            <h4 className='text-center'>
              Conheça as suas principais habilidades emocionais e como
              desenvolvê-las
            </h4>
          </div>
          <div className='flex flex-col items-center justify-center max-w-xs my-4 md:py-4'>
            <img
              className='h-20'
              alt='Soft Skill'
              src={'/images/courses/Comunicacao_eficaz.png'}
            />
            <h3 className='text-primary font-bold text-xl md:text-xl text-center'>
              Comunicação Eficaz
            </h3>
            <h4 className='text-center'>
              Enriqueça seu repertório com os elementos eficazes de comunicação
              para utilizar em qualquer ocasião.
            </h4>
          </div>
          <div className='flex flex-col items-center justify-center max-w-xs my-4 md:py-4'>
            <img
              className='h-20'
              alt='Soft Skill'
              src={'/images/courses/Negociacao.png'}
            />
            <h3 className='text-primary font-bold text-xl md:text-xl text-center'>
              Negociação
            </h3>
            <h4 className='text-center'>
              Saiba como adotar uma postura colaborativa e aplicar soluções
              criativas para prevenir, abrandar e resolver conflitos.
            </h4>
          </div>
          <div className='flex flex-col items-center justify-center max-w-xs my-4 md:py-4'>
            <img
              className='h-20'
              alt='Soft Skill'
              src={'/images/courses/Resiliencia.png'}
            />
            <h3 className='text-primary font-bold text-xl md:text-xl text-center'>
              Resiliência
            </h3>
            <h4 className='text-center'>
              Lide com mais facilidade com as mudanças e desafios do mercado de
              trabalho no mundo BANI
            </h4>
          </div>
          <div className='flex flex-col items-center justify-center max-w-xs my-4 md:py-4'>
            <img
              className='h-20'
              alt='Soft Skill'
              src={'/images/courses/Resolucao_de_problemas.png'}
            />
            <h3 className='text-primary font-bold text-xl md:text-xl text-center'>
              Resolução de Problemas
            </h3>
            <h4 className='text-center'>
              Desenvolva os pilares cognitivo, emocional e comportamental que
              ajudarão a ter uma tomada de decisão autônoma e assertiva
            </h4>
          </div>
        </div>
      </div>
      {trilhas?.[index]?.modulos?.length && (
        <div className='my-24 mx-4 lg:mx-40'>
          <div className='flex'>
            <h1 className='text-primary text-4xl font-bold'>
              O que você vai aprender?
            </h1>
          </div>
          {trilhas?.[index]?.modulos?.map((c, i) => (
            <div className='mt-8' key={i}>
              <div className='bg-sky-100 flex items-center'>
                <div className='w-10 bg-secondary text-secondary mr-3'>.</div>
                <h1 className='text-primary text-xl'>
                  Módulo {i + 1} - {c?.name}
                </h1>
              </div>
              <p>{c?.desc}</p>
              {c?.about && (
                <p>
                  <strong>Tópicos Abordados:</strong> {c?.about}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursePage;

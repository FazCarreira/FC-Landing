import { FunctionComponent } from 'react';
import { openMail } from '../../App/function';

const BusinessPage: FunctionComponent = () => {
  return (
    <div className='my-5'>
      <div className='relative'>
        <img
          className='w-full md:object-cover'
          src='images/business/FC_Empresas_Banner1.jpeg'
          alt='Banner empresa'
        />
        <div className='hidden md:flex flex-col md:flex-row items-center absolute bg-white/70 md:bottom-32 w-full h-24'>
          <h1 className='font-bold text-primary md:text-4xl text-xl m-auto'>
            Leve a Faz Carreira para a sua empresa!
          </h1>
          <a
            href='/empresas/trilha'
            className='bg-primary font-main md:text-xl text-white px-3 py-2 rounded-lg hover:bg-primary/80 m-auto'>
            Fale conosco
          </a>
        </div>
      </div>
      <div className='md:hidden mx-4'>
        <h1 className='font-bold text-xl text-primary my-5 text-center'>
          Leve a Faz Carreira para a sua empresa!
        </h1>
        <div className='flex justify-center'>
          <button className='bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary/80'>
            Fale Conosco
          </button>
        </div>
      </div>
      <div className='my-8 mx-4 lg:mx-40'>
        <h1 className='font-bold text-2xl md:text-4xl text-primary my-5 md:my-0'>
          Se a sua empresa acredita na força da juventude para inovar e mudar o
          mundo, vem fazer carreira com a gente.
        </h1>
        <h3 className='text-xl my-2'>
          A Faz Carreira disponibiliza uma trilha de desenvolvimento das soft
          skills mais requisitas pelo mercado de trabalho atual.
        </h3>
      </div>
      <div className='my-8 mx-4 lg:mx-40 flex flex-col md:flex-row-reverse items-center'>
        <img
          src='images/business/FC_Empresa_Topics.jpeg'
          alt='perfil dos jovens'
          className='rounded-3xl md:max-w-md md:ml-8'
        />
        <div className='flex flex-col justify-center'>
          <h1 className='font-bold text-primary text-2xl md:text-4xl text-center md:text-left'>
            Ao formar uma turma de 30 jovens a organização terá:
          </h1>
          <p className='text-lg md:text-xl md:ml-10 mt-10 md:text-left'>
            Capacitação de 25h com certificado e tutoria especializada
          </p>
          <p className='text-lg md:text-xl md:ml-10 mt-4 md:text-left'>
            Espaço para ofertar vagas na Plataforma Faz Carreira
          </p>
          <p className='text-lg md:text-xl md:ml-10 mt-4 md:text-left'>
            Banner institucional na Plataforma Faz Carreira
          </p>
          <p className='text-lg md:text-xl md:ml-10 mt-4 md:text-left'>
            Acesso aos CVs dos jovens e mulheres que já passaram pela trilha
          </p>
          <p className='text-lg md:text-xl md:ml-10 mt-4 md:text-left'>
            Contribuir com conteúdo do blog e divulgar seu impacto social e/ou
            ambiental positivo
          </p>
          <p className='text-lg md:text-xl md:ml-10 mt-4 md:text-left'>
            Utilizar nosso Selo de Impacto Social em seus materiais de
            divulgação.
          </p>
          <a
            href='/empresas/trilha'
            className='bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary/80 mt-10 text-center font-main font-bold'>
            Forme sua turma agora!
          </a>
        </div>
      </div>
      <div className='bg-sky-100 py-8 px-4 md:px-52 mt-8'>
        <h1 className='text-2xl md:text-4xl font-bold text-primary my-5 md:my-0 text-center'>
          Pra fazer carreira é muito simples!
        </h1>
        <div className='grid grid-cols-3 mt-8'>
          <div className='flex flex-col items-center'>
            <img src='/images/logo1.png' className='my-4 w-1/2' alt='Logo' />
            <h6 className='text-primary text-lg md:text-xl text-center'>
              Selecione o tipo de trilha.
            </h6>
          </div>
          <div className='flex flex-col items-center'>
            <img src='/images/logo2.png' className='my-4 w-1/2' alt='Logo' />
            <h6 className='text-secondary text-lg md:text-xl text-center'>
              Personalize sua trilha entre as opções disponíveis.
            </h6>
          </div>
          <div className='flex flex-col items-center'>
            <img src='/images/logo3.png' className='my-4 w-1/2' alt='Logo' />
            <h6 className='text-info text-lg md:text-xl text-center'>
              Feche seu incrível pacote e faça carreira!
            </h6>
          </div>
        </div>
      </div>
      <div className='mt-8 mx-4 lg:mx-40'>
        <div className='flex my-5 md:my-0'>
          <h1 className='font-bold text-xl md:text-4xl text-primary'>
            Turbine a trilha com ferramentas poderosas!
          </h1>
        </div>
        <div className='flex mt-8'>
          <div className='w-6 md:w-12 rounded-full bg-primary text-primary mr-5'>
            .
          </div>
          <div className='pb-4 w-full'>
            <h1 className='text-xl md:text-2xl text-primary font-bold'>
              Soft Skills - Habilidades Comportamentais
            </h1>
            <p className='text-lg md:text-xl md:text-left'>
              Adicione módulos e desenvolva outras habilidades que são
              relevantes para a sua empresa, dentre elas:
            </p>
            <li className='text-lg ml-8 md:ml-10 md:text-xl md:text-left'>
              Orientação para Servir
            </li>
            <li className='text-lg ml-8 md:ml-10 md:text-xl md:text-left'>
              Flexibilidade Cognitiva
            </li>
            <li className='text-lg ml-8 md:ml-10 md:text-xl md:text-left'>
              Gestão de Pessoas
            </li>
            <li className='text-lg ml-8 md:ml-10 md:text-xl md:text-left'>
              Empatia
            </li>
            <li className='text-lg ml-8 md:ml-10 md:text-xl md:text-left'>
              Julgamento e Tomada de Decisão
            </li>
            <li className='text-lg ml-8 md:ml-10 md:text-xl md:text-left'>
              Criatividade
            </li>
            <li className='text-lg ml-8 md:ml-10 md:text-xl md:text-left'>
              Ética no Trabalho
            </li>
            <li className='text-lg ml-8 md:ml-10 md:text-xl md:text-left'>
              Coordenação com os Outros
            </li>
            <li className='text-lg ml-8 md:ml-10 md:text-xl md:text-left'>
              Pensamento Crítico
            </li>
          </div>
        </div>
        <div className='flex'>
          <div className='w-6 md:w-12 rounded-full bg-secondary text-secondary mr-5'>
            .
          </div>
          <div className='pb-4 w-full'>
            <h1 className='text-xl md:text-2xl text-secondary font-bold'>
              Hard Skills - Habilidades Técnicas
            </h1>
            <p className='text-lg md:text-xl md:text-left'>
              Insira dentro da trilha conhecimentos técnicos necessários para a
              execução das atividades que são próprias da sua empresa.
            </p>
          </div>
        </div>
        <div className='flex'>
          <div className='w-6 md:w-12 rounded-full bg-info text-info mr-5'>
            .
          </div>
          <div className='pb-4 w-full'>
            <h1 className='text-xl md:text-2xl text-info font-bold'>
              Perfil DISC
            </h1>
            <p className='text-lg md:text-xl md:text-left'>
              Use uma das trilhas no seu processo seletivo e adicione a
              Avaliação DISC, desenvolvida pelo psicólogo William Moulton
              Marston é um dos métodos mais utilizados no mundo para análise
              comportamental do candidato ideal para sua empresa. A avaliação é
              aplicada pela nossa equipe de especialistas em análise
              comportamental e entrega um relatório resumo ou completo. A sigla
              DISC significa: Dominância, Influência, Estabilidade e
              Conformidade.
            </p>
          </div>
        </div>
      </div>
      <div className='py-8 mx-4 lg:mx-40 mt-8'>
        <h1 className='font-bold text-2xl md:text-4xl text-primary my-5 md:my-0 text-center'>
          Vem fazer carreira com a gente!
        </h1>
        <div className='flex justify-center'>
          <a
            href='/empresas/trilha'
            className='mt-8 bg-primary text-white font-main px-3 py-2 rounded-lg border hover:bg-primary/80'>
            Fale Conosco
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;

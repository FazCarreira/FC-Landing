import { FunctionComponent } from 'react';

const SuportPage: FunctionComponent = () => {
  return (
    <div className='my-5'>
      <img
        className='w-full'
        src='/images/suport/FC_Apoio_Banner1.jpeg'
        alt='Imagem Geração'
      />
      <div className='my-10 mx-4 lg:mx-40'>
        <h1 className='font-bold text-4xl md:text-6xl text-primary my-5 md:my-0'>
          Mude uma vida e transforme o futuro de uma geração.
        </h1>
        <h3 className='text-2xl my-8'>
          Patrocine jovens moradores de áreas vulneráveis em uma de nossas
          trilhas e faça a diferença.
        </h3>
        <a
          href='/apoio/pagamento'
          className='bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary/80'>
          Torne-se um Patrocinador
        </a>
      </div>
      <div className='my-8 mx-4 lg:mx-40 flex flex-col md:flex-row items-center'>
        <img
          src='images/suport/FC_Apoio_perfil.jpeg'
          alt='perfil dos jovens'
          className='rounded-3xl md:max-w-md md:mr-8'
        />
        <div className='flex flex-col justify-center'>
          <h1 className='font-bold text-secondary text-2xl md:text-4xl text-center md:text-left'>
            ¼ dos jovens brasileiros
          </h1>
          <p className='md:text-lg my-2 md:my-0'>
            Jovens conhecidos como nem-nem (nem estuda e nem trabalha) são uma
            parcela significativa da população.
          </p>
        </div>
      </div>
      <div className='my-8 mx-4 lg:mx-40 flex flex-col md:flex-row-reverse items-center'>
        <img
          src='images/suport/FC_Apoio_nem_nem.jpeg'
          alt='perfil dos jovens'
          className='rounded-3xl md:max-w-md md:ml-8'
        />
        <div className='flex flex-col justify-center'>
          <h1 className='font-bold text-info text-2xl md:text-4xl text-center md:text-right'>
            Perfil dos nem-nem
          </h1>
          <p className='md:text-lg my-2 md:my-0 md:text-right'>
            Mulheres (31%), negros (31%) e jovens mais velhos (31%) e sem
            instrução (66%). A região Nordeste concentra a maior parcela de
            jovens 32%.
          </p>
        </div>
      </div>
      <div className='my-8 mx-4 lg:mx-40 flex flex-col md:flex-row items-center'>
        <img
          src='images/suport/FC_Apoio_Educacao.jpeg'
          alt='perfil dos jovens'
          className='rounded-3xl md:max-w-md md:mr-8'
        />
        <div className='flex flex-col justify-center'>
          <h1 className='font-bold text-primary text-2xl md:text-4xl text-center md:text-left'>
            Jovens de 15 a 29 anos
          </h1>
          <p className='md:text-lg my-2 md:my-0'>
            57% não frequentavam ou deixaram de frequentar a escola. 56% estão
            desempregados.
          </p>
        </div>
      </div>
      <div className='my-8 mx-4 lg:mx-40 flex flex-col md:flex-row items-center'>
        <p className='md:text-lg my-2 md:my-0 md:text-right'>
          Fonte: FGV Social com base na PnadC Trimestral/IBGE 4T de 2020
        </p>
      </div>
      <div className='bg-sky-100 py-8 px-4 md:px-52 mt-8'>
        <h1 className='font-bold text-2xl md:text-4xl text-info my-5 md:my-0 text-center'>
          Quem são os jovens patrocinados?
        </h1>
        <h3 className='text-xl my-2 text-center'>
          Contamos com a parceria de organizações sociais sérias, que apoiam
          jovens em comunidades vulneráveis na periferia de Fortaleza ou
          selecionamos jovens de comunidades que estão no entorno de empresas
          que querem contratar.
        </h3>
      </div>
      <div className='py-8 mx-4 lg:mx-40 mt-8'>
        <h1 className='font-bold text-2xl md:text-4xl text-primary my-5 md:my-0 text-center'>
          Quer patrocinar uma turma ou cadastrar sua organização social?
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

export default SuportPage;

import { FormEvent, Fragment, FunctionComponent, useState } from 'react';
import InputMask from 'react-input-mask';
import { openMail } from '../../App/function';

const PatrocinioPage: FunctionComponent = () => {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    phone: '',
    email: '',
    cpf: '',
    value: 1,
  });
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(false);
  const [termos, setTermos] = useState(false);

  const onChange = ({ target: { name = '', value = '' } }) =>
    setFormData((f) => ({ ...f, [name]: value }));

  const valueChange =
    (increase = false) =>
    () =>
      setFormData((f) => ({ ...f, value: f.value + (increase ? 1 : -1) }));

  const onInvalid = (e: any) => {
    e.target.setCustomValidity('');
    if (!e.target.validity.valid) {
      e.target.setCustomValidity('Por favor preencher todos os campos');
    }
  };

  const onInvalidCheckBox = (e: any) => {
    e.target.setCustomValidity('');
    if (!e.target.validity.valid) {
      e.target.setCustomValidity('Aceite os termos de uso se deseja continuar');
    }
  };

  const onSubmit = (e: FormEvent) => {
    if (e) e.preventDefault();
    console.log(formData);
    setDone(true);
  };

  return (
    <Fragment>
      <div className='my-5'>
        <div className='my-8 mx-4 lg:mx-24 xl:mx-44'>
          <h2 className='my-8 font-bold text-xl text-primary'>
            Patrocinando carreiras, mudando vidas!
          </h2>
          <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-8'>
            <form onSubmit={onSubmit} className='flex flex-col items-center'>
              <div className='md:grid md:grid-cols-2 gap-4 w-full'>
                <div className='floating-input mb-5 relative'>
                  <input
                    type='text'
                    id='first-name'
                    name='fName'
                    onChange={onChange}
                    value={formData.fName}
                    className='border border-gray-500 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full px-3 py-1 h-16'
                    placeholder=''
                    required
                    onInvalid={onInvalid}
                    autoComplete='off'
                  />
                  <label
                    htmlFor='first-name'
                    className='absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out '>
                    Primeiro nome
                  </label>
                </div>
                <div className='floating-input mb-5 relative'>
                  <input
                    type='text'
                    id='last-name'
                    name='lName'
                    onChange={onChange}
                    value={formData.lName}
                    className='border border-gray-500 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full px-3 py-1 h-16'
                    placeholder=''
                    required
                    onInvalid={onInvalid}
                    autoComplete='off'
                  />
                  <label
                    htmlFor='last-name'
                    className='absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out '>
                    Ultimo nome
                  </label>
                </div>
              </div>
              <div className='floating-input mb-5 relative w-full'>
                <InputMask
                  mask='(99) 99999-9999'
                  type='tel'
                  id='phone'
                  name='phone'
                  onChange={onChange}
                  value={formData.phone}
                  className='border border-gray-500 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full px-3 py-1 h-16'
                  placeholder=''
                  required
                  onInvalid={onInvalid}
                  autoComplete='off'
                />
                <label
                  htmlFor='phone'
                  className='absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out '>
                  Telefone
                </label>
              </div>
              <div className='floating-input mb-5 relative w-full'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  onChange={onChange}
                  value={formData.email}
                  className='border border-gray-500 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full px-3 py-1 h-16'
                  placeholder=''
                  required
                  onInvalid={onInvalid}
                  autoComplete='off'
                />
                <label
                  htmlFor='email'
                  className='absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out '>
                  Seu melhor email
                </label>
              </div>
              <div className='floating-input mb-5 relative w-full'>
                <InputMask
                  mask='999.999.999-99'
                  id='cpf'
                  name='cpf'
                  onChange={onChange}
                  value={formData.cpf}
                  className='border border-gray-500 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full px-3 py-1 h-16'
                  placeholder=''
                  required
                  onInvalid={onInvalid}
                  autoComplete='off'
                />
                <label
                  htmlFor='cpf'
                  className='absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out '>
                  CPF
                </label>
              </div>
              <div className='mb-5 mx-8'>
                <p className='text-xs text-primary'>
                  Todos os campos são obrigatórios.
                </p>
                <p className='text-xs text-primary'>
                  Seus dados estão protegidos e não serão compartilhados com
                  terceiros.
                </p>
              </div>
              <div className='mb-5'>
                <p className='text-lg'>Quantos jovens você quer patrocinar?</p>
              </div>
              <div className='grid grid-cols-2 gap-4 w-full items-end mb-5'>
                <div className='custom-number-input h-10 w-32'>
                  <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
                    <button
                      onClick={valueChange()}
                      className=' bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none'>
                      <span className='m-auto text-2xl font-thin'>-</span>
                    </button>
                    <input
                      type='number'
                      className='outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700'
                      name='custom-input-number'
                      value={formData.value}
                      onChange={onChange}
                    />
                    <button
                      onClick={valueChange(true)}
                      className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer'>
                      <span className='m-auto text-2xl font-thin'>+</span>
                    </button>
                  </div>
                </div>
                <div>
                  <p className='text-3xl'>R${formData.value * 350},00</p>
                </div>
              </div>
              <label className='inline-flex items-center mx-8 mb-5'>
                <input
                  type='checkbox'
                  required
                  className='form-checkbox h-5 w-5 text-primary'
                  checked={termos}
                  onInvalid={onInvalidCheckBox}
                  onChange={() => setTermos((t) => !t)}
                />
                <span className='ml-2 text-gray-700'>
                  Li e Aceito os{' '}
                  <button
                    type='button'
                    className='text-info hover:underline'
                    onClick={() => setOpen(true)}>
                    Termos de uso
                  </button>
                </span>
              </label>
              <button type='submit' className='w-full'>
                <div className='w-full bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary/80 text-center'>
                  Cadastrar Patrocínio
                </div>
              </button>
            </form>
            <div className='flex flex-col items-center'>
              <h3 className='text-center text-gray-600 mx-16 mb-5'>
                Realize uma transferência via PIX usando nossa chave ou QR Code!
              </h3>
              <img
                className='h-16'
                src='https://www.bcb.gov.br/content/estabilidadefinanceira/piximg/logo_pix.png'
                alt='Pix logo'
              />
              <img
                src='/images/suport/pix300.png'
                alt='R$ 300,00'
                className='h-56'
              />
              <div className='rounded-full text-white font-bold flex flex-col items-center bg-secondary px-4 py-2'>
                <p>Chave Pix</p>
                <p>contato@fazcarreira.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed ${
          !open && 'hidden'
        } inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20`}>
        <div className='relative top-20 mx-auto p-5 border w-1/2 h-4/5 shadow-lg rounded-md bg-white'>
          <div className='mt-3 text-center'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Termos de uso patrocínio
            </h3>
            <div className='mt-2 px-7 py-3'>
              <p className='text-sm text-gray-500'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                enim ut sem viverra aliquet eget sit. Nibh venenatis cras sed
                felis. Lobortis mattis aliquam faucibus purus in massa tempor
                nec feugiat. Nulla facilisi cras fermentum odio eu feugiat
                pretium nibh. Sapien eget mi proin sed libero. Neque laoreet
                suspendisse interdum consectetur libero id faucibus nisl
                tincidunt. Nisl suscipit adipiscing bibendum est ultricies
                integer quis auctor. Elementum curabitur vitae nunc sed. Feugiat
                in ante metus dictum at. Ipsum faucibus vitae aliquet nec
                ullamcorper sit amet. Dis parturient montes nascetur ridiculus
                mus mauris vitae ultricies. Rhoncus est pellentesque elit
                ullamcorper dignissim cras tincidunt. Nulla malesuada
                pellentesque elit eget. Mauris vitae ultricies leo integer.
                Donec enim diam vulputate ut. Vulputate sapien nec sagittis
                aliquam malesuada. Amet consectetur adipiscing elit ut. Dui
                accumsan sit amet nulla. Integer malesuada nunc vel risus
                commodo viverra maecenas accumsan. Aliquet nec ullamcorper sit
                amet. Ac feugiat sed lectus vestibulum mattis ullamcorper. Id
                donec ultrices tincidunt arcu non. Id venenatis a condimentum
                vitae sapien pellentesque. Sollicitudin ac orci phasellus
                egestas tellus rutrum. Vitae et leo duis ut diam quam nulla
                porttitor massa. Arcu cursus vitae congue mauris rhoncus. Cursus
                sit amet dictum sit amet justo donec enim diam. Aliquet sagittis
                id consectetur purus ut faucibus. Ante in nibh mauris cursus.
                Consequat mauris nunc congue nisi. At tellus at urna condimentum
                mattis pellentesque id. Fermentum et sollicitudin ac orci
                phasellus egestas tellus rutrum tellus. Magna sit amet purus
                gravida quis blandit turpis cursus in. Volutpat lacus laoreet
                non curabitur gravida arcu ac tortor dignissim. Mauris a diam
                maecenas sed enim ut sem viverra aliquet. Arcu dictum varius
                duis at consectetur lorem. Congue nisi vitae suscipit tellus
                mauris a diam maecenas sed. Sit amet consectetur adipiscing elit
                ut aliquam purus sit. Ut morbi tincidunt augue interdum velit
                euismod in pellentesque. Fermentum et sollicitudin ac orci
                phasellus egestas tellus rutrum tellus. Tellus mauris a diam
                maecenas sed enim ut sem. Morbi tincidunt augue interdum velit
                euismod in. Aliquam nulla facilisi cras fermentum odio eu. Nisi
                scelerisque eu ultrices vitae auctor eu augue ut. Proin libero
                nunc consequat interdum. In fermentum posuere urna nec
                tincidunt. Volutpat diam ut venenatis tellus in. Eget duis at
                tellus at urna condimentum. Suspendisse faucibus interdum
                posuere lorem ipsum. Rhoncus mattis rhoncus urna neque.
                Porttitor eget dolor morbi non arcu. Id semper risus in
                hendrerit gravida rutrum quisque. Ac auctor augue mauris augue
                neque. Magna ac placerat vestibulum lectus mauris. Neque
                convallis a cras semper auctor neque vitae. Facilisis mauris sit
                amet massa vitae tortor. At in tellus integer feugiat
                scelerisque varius morbi. Eget nunc lobortis mattis aliquam
                faucibus purus in massa. Sit amet tellus cras adipiscing enim eu
                turpis egestas pretium. Ac tortor vitae purus faucibus ornare
                suspendisse sed nisi lacus. Ac tincidunt vitae semper quis.
                Rhoncus aenean vel elit scelerisque mauris pellentesque. Proin
                sed libero enim sed faucibus. Quam vulputate dignissim
                suspendisse in est. Blandit aliquam etiam erat velit scelerisque
                in. Vitae ultricies leo integer malesuada nunc vel risus
                commodo. Quis commodo odio aenean sed adipiscing diam donec.
                Consequat nisl vel pretium lectus. Quis commodo odio aenean sed
                adipiscing diam donec adipiscing. Etiam dignissim diam quis
                enim. Blandit volutpat maecenas volutpat blandit aliquam etiam.
                Facilisis volutpat est velit egestas dui. Diam vel quam
                elementum pulvinar etiam non.
              </p>
            </div>
            <div className='items-center px-4 py-3'>
              <button
                id='ok-btn'
                onClick={() => setOpen(false)}
                className='px-4 py-2 bg-primary text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-info'>
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed ${
          !done && 'hidden'
        } inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20`}>
        <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
          <div className='mt-3 text-center'>
            <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100'>
              <svg
                className='h-6 w-6 text-green-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M5 13l4 4L19 7'></path>
              </svg>
            </div>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Sucesso!
            </h3>
            <div className='mt-2 px-7 py-3'>
              <p className='text-sm text-gray-500'>
                Seu patrocínio será aplicado para a inclusão de jovens e/ou
                mulheres das organizações sociais parceiras nas próximas turmas.
                Caso tenha alguma dúvida fale conosco pelo e-mail{' '}
                <span
                  onClick={openMail}
                  className='text-secondary underline cursor-pointer'>
                  contato@fazcarreira.com
                </span>
              </p>
            </div>
            <div className='items-center px-4 py-3'>
              <a
                href='/apoio'
                className='px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300'>
                OK
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PatrocinioPage;

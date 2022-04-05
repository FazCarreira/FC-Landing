import { FormEvent, Fragment, FunctionComponent, useState } from 'react';
import InputMask from 'react-input-mask';
import { openMail } from '../../App/function';

const EmpresaPage: FunctionComponent = () => {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    cnpj: '',
    phone: '',
    email: '',
    razao: '',
    organizacao: '',
    cargo: '',
    trilha: '',
    adicional: [] as string[],
  });
  const [done, setDone] = useState(false);

  const onChange = ({ target }: any) =>
    setFormData((f) => ({ ...f, [target.name]: target.value }));

  const onSelect = (v: string) => () => {
    const list = formData.adicional;
    let target = { name: '', value: [] };
    if (formData.adicional.includes(v))
      target = {
        name: 'adicional',
        value: list.filter((l) => l !== v) as never[],
      };
    else target = { name: 'adicional', value: [...list, v] as never[] };
    onChange({ target });
  };

  const onInvalid = (e: any) => {
    e.target.setCustomValidity('');
    if (!e.target.validity.valid) {
      e.target.setCustomValidity('Por favor preencher todos os campos');
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
          <h2 className='my-8 font-bold text-4xl text-primary'>
            Leve a Faz Carreira para sua organização!
          </h2>
          <form onSubmit={onSubmit} className='flex flex-col items-center'>
            <div className='flex flex-col md:grid md:grid-cols-2 md:gap-8 w-full'>
              <div className='flex-col flex'>
                <div className='md:grid md:grid-cols-2 md:gap-4'>
                  <div className='floating-input mb-5 relative'>
                    <input
                      type='text'
                      id='first-name'
                      name='fName'
                      onChange={onChange}
                      value={formData.fName}
                      className='border border-gray-500 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full px-3 py-1 h-16'
                      placeholder=''
                      // required
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
                      // required
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
                    // required
                    onInvalid={onInvalid}
                    autoComplete='off'
                  />
                  <label
                    htmlFor='phone'
                    className='absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out '>
                    Telefone para contato
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
                    // required
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
                  <input
                    type='text'
                    id='cargo'
                    name='cargo'
                    onChange={onChange}
                    value={formData.cargo}
                    className='border border-gray-500 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full px-3 py-1 h-16'
                    placeholder=''
                    // required
                    onInvalid={onInvalid}
                    autoComplete='off'
                  />
                  <label
                    htmlFor='cargo'
                    className='absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out '>
                    Cargo na Empresa
                  </label>
                </div>
                <div className='floating-input mb-5 relative'>
                  <InputMask
                    mask='99.999.999/9999-99'
                    type='text'
                    id='cnpj'
                    name='cnpj'
                    onChange={onChange}
                    value={formData.cnpj}
                    className='border border-gray-500 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full px-3 py-1 h-16'
                    placeholder=''
                    // required
                    onInvalid={onInvalid}
                    autoComplete='off'
                  />
                  <label
                    htmlFor='cnpj'
                    className='absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out '>
                    CNPJ
                  </label>
                </div>
              </div>
              <div className='flex-col flex'>
                <div className='floating-input mb-5 relative w-full'>
                  <input
                    type='text'
                    id='razao'
                    name='razao'
                    onChange={onChange}
                    value={formData.razao}
                    className='border border-gray-500 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full px-3 py-1 h-16'
                    placeholder=''
                    // required
                    onInvalid={onInvalid}
                    autoComplete='off'
                  />
                  <label
                    htmlFor='razao'
                    className='absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out '>
                    Razão Social
                  </label>
                </div>
                <div className='floating-input mb-5 relative w-full'>
                  <select
                    name='organizacao'
                    id='organizacao'
                    onChange={onChange}
                    value={formData.organizacao}
                    className='border border-gray-500 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full px-3 py-1 h-16'
                    // required
                    onInvalid={onInvalid}>
                    <option value=''>Escolha um tipo</option>
                    <option value='Empresa'>Empresa</option>
                    <option value='Organização Sem-fins lucrativos'>
                      Organização Sem-fins lucrativos
                    </option>
                  </select>
                  <label
                    htmlFor='organizacao'
                    className='absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out '>
                    Tipo de organização
                  </label>
                </div>
                <div className='floating-input mb-5 relative w-full'>
                  <select
                    name='trilha'
                    id='trilha'
                    onChange={onChange}
                    value={formData.trilha}
                    className='border border-gray-500 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full px-3 py-1 h-16'
                    // required
                    onInvalid={onInvalid}>
                    <option value=''>Escolha um tipo</option>
                    <option value='Acelerando Talentos'>
                      Acelerando Talentos
                    </option>
                    <option value='Mulheres Provedoras'>
                      Mulheres Provedoras
                    </option>
                  </select>
                  <label
                    htmlFor='trilha'
                    className='absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out '>
                    Tipo de Trilha
                  </label>
                </div>
                <div className='w-full my-4 flex flex-col'>
                  <p className='-mt-4 mb-4 ml-3'>Ferramentas adicionais:</p>
                  <div>
                    {['+ Nova Soft Skill', '+ Hard Skill', '+ Perfil DISC'].map(
                      (n) => (
                        <label
                          key={n}
                          className='inline-flex items-center mx-5'>
                          <input
                            type='checkbox'
                            className='form-checkbox h-5 w-5 text-primary'
                            checked={formData.adicional.includes(n as never)}
                            onChange={onSelect(n)}
                          />
                          <span className='ml-2 text-gray-700'>{n}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>
                <div className='flex items-center mb-5 w-full px-3 py-1 rounded-lg h-16 bg-primary hover:bg-primary/80 '>
                  <button
                    className='text-white text-center font-main font-bold w-full'
                    type='submit'>
                    Cadastrar interesse
                  </button>
                </div>
              </div>
            </div>
            <div className='mb-5 mx-8'>
              <p className='text-xs text-primary'>
                Seus dados estão protegidos e não serão compartilhados com
                terceiros.
              </p>
            </div>
          </form>
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
              <p className='text-gray-700'>
                Seu cadastro foi realizado e em breve entraremos em contato.
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
                href='/empresas'
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

export default EmpresaPage;

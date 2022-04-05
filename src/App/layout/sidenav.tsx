import { openMail } from '../function';

const Sidenav = () => {
  return (
    <nav className='hidden md:block fixed z-10 bottom-1/2'>
      <ul className='flex flex-col justify-center gap-5 border-r-2 pr-2 ml-5 border-black'>
        <li>
          <a
            target='_blank'
            href='https://www.facebook.com/fazcarreira.ce/'
            rel='noreferrer'>
            {/* <FaFacebookF /> */}
            <img
              src='/socialmedia/facebook.svg'
              className='h-4 w-4 hover:scale-150'
              alt='facebook'
            />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://twitter.com/fazcarreira_ce?s=21'
            rel='noreferrer'>
            {/* <FaTwitter /> */}
            <img
              src='/socialmedia/twitter.svg'
              className='h-4 w-4 hover:scale-150'
              alt='twitter'
            />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://instagram.com/fazcarreira.ce?utm_medium=copy_link'
            rel='noreferrer'>
            {/* <FaInstagram /> */}
            <img
              src='/socialmedia/instagram.svg'
              className='h-4 w-4 hover:scale-150'
              alt='instagram'
            />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://www.linkedin.com/company/faz-carreira'
            rel='noreferrer'>
            {/* <FaLinkedin /> */}
            <img
              src='/socialmedia/linkedin.svg'
              className='h-4 w-4 hover:scale-150'
              alt='linkedin'
            />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://www.youtube.com/channel/UCdKVJnNNJE20xEuJBst5LUA'
            rel='noreferrer'>
            {/* <FaYoutube /> */}
            <img
              src='/socialmedia/youtube.svg'
              className='h-4 w-4 hover:scale-150'
              alt='youtube'
            />
          </a>
        </li>
        <li>
          <a
            onClick={openMail}
            target='_top'
            href='mailto:contato@fazcarreira.com'>
            {/* <FaEnvelope /> */}
            <img
              src='/socialmedia/gmail.svg'
              className='h-4 w-4 hover:scale-150'
              alt='email'
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;

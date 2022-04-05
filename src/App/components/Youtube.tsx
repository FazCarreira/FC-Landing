import { FunctionComponent } from 'react';

interface YoutubeProps {
  url: string;
  className?: string;
}

const Youtube: FunctionComponent<YoutubeProps> = ({ url }) => {
  function youtube_parser(url: string) {
    var regExp =
      // eslint-disable-next-line
      /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
    var match = url?.match(regExp);
    return match && match[1].length === 11 ? match[1] : '';
  }

  return (
    <div className={'video-container'}>
      <iframe
        className='video'
        src={`https://www.youtube.com/embed/${youtube_parser(url)}`}
        allowFullScreen
      />
    </div>
  );
};

export default Youtube;

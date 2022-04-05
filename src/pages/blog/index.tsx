import moment from 'moment';
import { FunctionComponent, useEffect, useState } from 'react';

interface BlogPageProps {
  posts: [
    {
      _id: string;
      title: string;
      subtitle: string;
      html: string;
      image: string;
      tags: string[];
      created: Date;
    }
  ];
}

const BlogPage: FunctionComponent<BlogPageProps> = ({ posts }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const fetchSearch = () => {
    if (search !== '')
      return setResults(
        posts.filter(
          (post) =>
            post?.title?.includes(search) ||
            post?.subtitle?.includes(search) ||
            post?.html?.includes(search) ||
            post.tags.includes(search)
        )
      );
    else return setResults([]);
  };

  useEffect(fetchSearch, [search]);

  const tagsDestaque = () => {
    const tags =
      posts
        ?.map((p) => p.tags.join(','))
        .join(',')
        .split(',') || [];

    const counts: any = {};
    for (const num of tags) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    const uniqueTags = [...new Set(tags)];
    return uniqueTags.sort((a, b) => counts[b] - counts[a]).filter((e) => e);
  };

  console.log(tagsDestaque());

  return (
    <div className='my-5'>
      {posts?.length > 0 ? (
        <div className='flex flex-col mx-8 md:mx:40'>
          <div className='flex flex-col md:flex-row'>
            <div className='relative md:w-1/3 md:ml-8 my-5'>
              <div className='absolute md:top-4 bottom-2 mx-4'>
                <div className='bg-info text-white rounded-full px-2 py-1 xl:py-2 text-xs md:text-xxs xl:text-sm font-bold w-fit'>
                  <p>{moment(posts[0].created).format('DD/MM/YYYY')}</p>
                </div>
                <div className='bg-primary text-base md:text-xs xl:text-lg text-white rounded-full px-2 py-3 font-bold w-fit ml-4'>
                  <h2 className='text-center'>{posts[0].title}</h2>
                </div>
                <div className='bg-secondary text-white rounded-full px-2 py-1 xl:py-2 text-xs md:text-xxs xl:text-base font-bold w-fit ml-8'>
                  <h3>{posts[0].subtitle}</h3>
                </div>
              </div>
              <div className='absolute bottom-3 right-3 bg-primary text-xs md:text-xxs xl:text-sm text-white rounded-full px-2 py-3 font-bold w-fit hidden md:block'>
                  <a href={`/blog/${posts[0]._id}`} className='text-center'>Clique para ver</a>
                </div>
              <img
                className='w-full'
                src={posts[0].image}
                alt={posts[0].title}
              />
            </div>
            <div className='flex flex-col justify-center md:w-2/3 ml-5 mr-8 my-5'>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 mr-2 text-gray-600'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
                <input
                  type='text'
                  name='search'
                  placeholder='Procurar...'
                  value={search}
                  onChange={({ target }) => setSearch(target.value)}
                  className='py-2 border-b-2 border-gray-400 outline-none focus:border-primary w-full rounded-full'
                />
              </div>
              {results.length === 0 && search.length > 2 && (
                <p>Nenhum Resultado Encontrado</p>
              )}
              {search === '' && tagsDestaque().length > 0 && (
                <div className='flex-col items-center justify-center hidden md:flex'>
                  <h1 className='md:mx-6 text-4xl font-bold md:text-left mt-10 text-primary text-center'>
                    Temas em Destaque
                  </h1>
                  {tagsDestaque()?.map((tag, i) => {
                    if (i > 2 || !tag) return false;
                    return (
                      <button
                        key={i}
                        onClick={() => setSearch(tag)}
                        className='bg-primary text-center rounded-full w-fit px-4 py-2 text-white text-lg my-2'>
                        <h4>{tag}</h4>
                      </button>
                    );
                  })}
                </div>
              )}
              {search.length > 2 &&
                results?.map((post, i) => {
                  if (i > 1) return false;
                  return (
                    <div
                      key={post._id}
                      className='h-52 flex justify-between bg-white rounded-lg border border-gray-400 md:mx-6 overflow-hidden px-3 md:pr-4 my-2'>
                      <div className='w-1/3 hidden md:flex items-center overflow-hidden mr-5'>
                        <img
                          src={post.image}
                          alt={post.title}
                          className='object-fill'
                        />
                      </div>
                      <div className='flex flex-col md:w-2/3 justify-center'>
                        <div>
                          <h4 className='font-bold mb-3'>{post.title}</h4>
                          <div className='text-gray-800 text-sm post line-clamp-2'>
                            <div
                              dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                          </div>
                        </div>
                        <div className='mt-3'>
                          <div className='flex items-center justify-between text-gray-800'>
                            <p className='text-sm'>
                              {moment(post.created).format('DD/MM/YYYY')}
                            </p>
                            <a
                              href={`/blog/${post._id}`}
                              className='hover:underline text-gray-400 hover:text-gray-600'>
                              Continuar Lendo
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className={`my-5 md:block ${search !== '' && 'hidden'}`}>
            <h1 className='md:mx-6 text-4xl font-bold md:text-left my-5 md:my-0 italic text-primary'>
              Últimas
            </h1>
            {posts?.map((post, i) => {
              if (i === 0) return false;
              return (
                <div
                  key={post._id}
                  className='h-52 flex justify-between bg-white rounded-lg border border-gray-400 md:mx-6 overflow-hidden px-3 md:pr-4 my-2'>
                  <div className='w-1/3 hidden md:flex items-center overflow-hidden mr-5'>
                    <img
                      src={post.image}
                      alt={post.title}
                      className='object-fill'
                    />
                  </div>
                  <div className='flex flex-col md:w-2/3 justify-center'>
                    <div>
                      <h4 className='font-bold mb-3'>{post.title}</h4>
                      <div className='text-gray-800 text-sm post line-clamp-2'>
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                      </div>
                    </div>
                    <div className='mt-3'>
                      <div className='flex items-center justify-between text-gray-800'>
                        <p className='text-sm'>
                          {moment(post.created).format('DD/MM/YYYY')}
                        </p>
                        <a
                          href={`/blog/${post._id}`}
                          className='hover:underline text-gray-400 hover:text-gray-600'>
                          Continuar Lendo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        'Não Há Postagens'
      )}
    </div>
  );
};

export default BlogPage;

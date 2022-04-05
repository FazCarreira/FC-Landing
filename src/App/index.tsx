import { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';

import Layout from './layout';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import CoursePage from '../pages/cursos';
import SuportPage from '../pages/suport';
import PatrocinioPage from '../pages/suport/fund';
import BusinessPage from '../pages/business';
import EmpresaPage from '../pages/business/signup';
import BlogPage from '../pages/blog';
import PostPage from '../pages/blog/post';
import NotFound from '../pages/404';
import { openLink } from './function';

const App: FunctionComponent = () => {
  const [data, setData] = useState<any>();
  const [posts, setPosts] = useState<any>();

  const getData = () => {
    axios
      .get('https://api.fazcarreira.com/site')
      .then((res) => res.data)
      .then(setData)
      .catch(console.error);
  };
  useEffect(() => getData(), []);

  const getPosts = () => {
    axios
      .get('https://api.fazcarreira.com/post')
      .then((res) => res.data)
      .then((posts) => setPosts(posts.reverse()))
      .catch(console.error);
  };
  useEffect(() => getPosts(), []);

  return (
    <Router>
      <CookieConsent buttonText='Ok'>
        Nós usamos cookies! Eles são usados para aprimorar a sua experiência. Ao
        fechar este banner ou continuar na página, você concorda com o uso de
        cookies.{' '}
        <button
          onClick={openLink(
            'https://www.tecmundo.com.br/web/1069-o-que-sao-cookies-.htm'
          )}
          className='underline'>
          Saiba mais
        </button>
        .
      </CookieConsent>
      <Layout cursos={data?.trilhas?.map((t: { name: string }) => t.name)}>
        <Routes>
          <Route path='/' element={<HomePage data={data} posts={posts} />} />
          <Route path='/institucional' element={<AboutPage data={data} />} />
          <Route path='/cursos/:index' element={<CoursePage data={data} />} />
          <Route path='/apoio' element={<SuportPage />} />
          <Route path='/apoio/pagamento' element={<PatrocinioPage />} />
          <Route path='/empresas' element={<BusinessPage />} />
          <Route path='/empresas/trilha' element={<EmpresaPage />} />
          <Route path='/blog' element={<BlogPage posts={posts} />} />
          <Route path='/blog/:id' element={<PostPage posts={posts} />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

import { FunctionComponent, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import TopNav from './TopNav';
import Footer from './Footer';
import Sidenav from './sidenav';

interface LayoutProps {
  children: ReactNode;
  cursos: Array<String>;
}

const Layout: FunctionComponent<LayoutProps> = ({ children, cursos }) => {
  const { pathname } = useLocation();

  return (
    <div className='flex-1 flex flex-col'>
      <TopNav cursos={cursos} path={pathname} />
      <Sidenav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

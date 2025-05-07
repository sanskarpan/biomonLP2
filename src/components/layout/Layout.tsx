import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

const Layout = () => {
  // Update page title on route changes
  useEffect(() => {
    const defaultTitle = document.querySelector('title[data-default]');
    if (defaultTitle) {
      defaultTitle.textContent = 'Biomon | Personal Health Intelligence';
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Dashboard from '@/pages/Dashboard';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import Layout from '@/components/layout/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard-preview" element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
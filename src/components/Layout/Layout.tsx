import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';

export function Layout() {
  return (
    <>
      <Header />
      <Hero />
      <Outlet />
      <Footer />
    </>
  );
}

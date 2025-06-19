import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Navbar from '../components/navbar';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9E6]">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* Aquí se inyectarán las páginas hijas */}
      </main>
      <Footer />
    </div>
  );
}
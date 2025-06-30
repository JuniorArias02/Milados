import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import SidebarPedido from '../components/SidebarPedido';

export default function Layout() {
  const [mostrarSidebar, setMostrarSidebar] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9E6]">
      <Navbar abrirSidebar={() => setMostrarSidebar(true)} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <SidebarPedido abierto={mostrarSidebar} onClose={() => setMostrarSidebar(false)} />
    </div>
  );
}

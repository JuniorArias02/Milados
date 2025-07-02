import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Menu } from "lucide-react"; // Añadimos el ícono de menú
import { RUTAS } from "../../../router/route";
import { Link } from "react-router-dom";
import { usePedido } from "../../../store/PedidoContext";
import MobileSidebar from "./MobileSidebar"; // Asegúrate de crear este componente

export default function Navbar({ abrirSidebar }) {
  const { pedido } = usePedido();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full bg-[#FFF9E6] bg-opacity-80 backdrop-blur-md shadow-sm z-50"
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Botón de menú móvil (solo visible en md↓) */}
          <button
            className="md:hidden p-2 rounded-lg text-[#83CCDA] hover:bg-[#FF73D9] hover:bg-opacity-20 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Logo (centrado en móvil) */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="md:ml-0 mx-auto md:mx-0"
          >
            <Link to={RUTAS.INICIO}>
              <h1 className="text-3xl font-bold text-[#FF73D9] bubblegum-bold">Milados</h1>
            </Link>
          </motion.div>

          {/* Menú desktop (oculto en móviles) */}
          <div className="hidden md:flex space-x-6">
            <Link
              to={RUTAS.INICIO}
              className="relative px-3 py-2 quicksand-semibold text-[#83CCDA] group transition-all duration-300"
            >
              Inicio
              <span className="absolute bottom-0 left-0 h-0.5 bg-[#FF73D9] w-0 group-hover:w-full transition-all duration-300"></span>
              <span className="absolute inset-0 bg-[#FF73D9] opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></span>
            </Link>

            <Link
              to={RUTAS.VER_HELADOS.VER_CONOS}
              className="relative px-3 py-2 quicksand-semibold text-[#83CCDA] group transition-all duration-300"
            >
              Helados
              <span className="absolute bottom-0 left-0 h-0.5 bg-[#FF73D9] w-0 group-hover:w-full transition-all duration-300 delay-75"></span>
              <span className="absolute inset-0 bg-[#FF73D9] opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></span>
            </Link>

            <Link
              to={RUTAS.HORARIOS}
              className="relative px-3 py-2 quicksand-semibold text-[#83CCDA] group transition-all duration-300"
            >
              Horario
              <span className="absolute bottom-0 left-0 h-0.5 bg-[#FF73D9] w-0 group-hover:w-full transition-all duration-300 delay-100"></span>
              <span className="absolute inset-0 bg-[#FF73D9] opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></span>
            </Link>

            <a
              href="#"
              className="relative px-3 py-2 quicksand-semibold text-[#83CCDA] group transition-all duration-300"
            >
              Contacto
              <span className="absolute bottom-0 left-0 h-0.5 bg-[#FF73D9] w-0 group-hover:w-full transition-all duration-300 delay-150"></span>
              <span className="absolute inset-0 bg-[#FF73D9] opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></span>
            </a>
          </div>

          {/* Botones de acción (Instagram + Carrito) */}
          <div className="flex items-center space-x-4">
            {/* Instagram (oculto en móviles pequeños) */}
            <motion.a
              href="https://www.instagram.com/milados_heladeria"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="hidden sm:flex items-center space-x-2 bg-[#FF73D9] px-4 py-2 rounded-full text-white quicksand-semibold"
            >
              <Instagram size={18} />
              <span className="hidden sm:inline-block">Síguenos</span>
            </motion.a>

            {/* Carrito */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={abrirSidebar}
              className="relative flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-[#FF73D9] to-[#83CCDA] text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {pedido.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-[#FF73D9] text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-white shadow-sm"
                >
                  {pedido.length}
                </motion.span>
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar móvil (se muestra solo cuando mobileMenuOpen es true) */}
      <MobileSidebar 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  );
}
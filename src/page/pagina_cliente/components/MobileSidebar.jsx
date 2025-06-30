import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { RUTAS } from "../../../router/route";

export default function MobileSidebar({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
        {/* Fondo oscuro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#0000002d] bg-opacity-50 z-50"
          onClick={onClose}
        />
        
        {/* Sidebar */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 h-full w-64 bg-[#FFF9E6] shadow-xl z-50"
        >
          <div className="p-4 flex justify-between items-center border-b border-[#83CCDA]">
            <h2 className="text-2xl font-bold text-[#FF73D9] quicksand-semibold">Menú</h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-full text-[#83CCDA] hover:bg-[#FF73D9] hover:bg-opacity-20"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-6">
            <Link
              to={RUTAS.INICIO}
              onClick={onClose}
              className="text-xl quicksand-semibold text-[#83CCDA] hover:text-[#FF73D9] transition-colors"
            >
              Inicio
            </Link>

            <Link
              to={RUTAS.VER_HELADOS.VER_CONOS}
              onClick={onClose}
              className="text-xl quicksand-semibold text-[#83CCDA] hover:text-[#FF73D9] transition-colors"
            >
              Helados
            </Link>

            <Link
              to={RUTAS.HORARIOS}
              onClick={onClose}
              className="text-xl quicksand-semibold text-[#83CCDA] hover:text-[#FF73D9] transition-colors"
            >
              Horario
            </Link>

            <a
              href="#"
              onClick={onClose}
              className="text-xl quicksand-semibold text-[#83CCDA] hover:text-[#FF73D9] transition-colors"
            >
              Contacto
            </a>

            <a
              href="https://www.instagram.com/milados_heladeria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xl quicksand-semibold text-[#83CCDA] hover:text-[#FF73D9] transition-colors"
            >
              <span>Instagram</span>
            </a>
          </nav>
        </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
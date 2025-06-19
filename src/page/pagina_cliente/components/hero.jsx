import { motion } from "framer-motion";
export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#FFF9E6] overflow-hidden" >
      {/* Fondo con formas orgánicas */}
      < div className="absolute inset-0 opacity-20" >
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF6B6B] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#5D9CEC] rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Contenido */}
      < motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center z-10 px-6"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-[#FF6B6B] mb-6">
          Helados que <span className="text-[#5D9CEC]">derriten</span> el corazón
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          La felicidad tiene forma de cono... y sabe a Milados. 🍦💛
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#5D9CEC] hover:bg-[#FF6B6B] text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
        >
          Ver Sabores
        </motion.button>
      </motion.div >

      {/* Efecto de helado goteando (SVG animado) */}
      < motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
      >
        <svg width="200" height="100" viewBox="0 0 200 100">
          <path
            d="M20,0 Q100,50 180,0 L200,100 L0,100 Z"
            fill="#FF6B6B"
            fillOpacity="0.7"
          />
        </svg>
      </motion.div >
    </section >
  );
};
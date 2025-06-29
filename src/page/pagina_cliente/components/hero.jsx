import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { RUTAS } from "../../../router/route";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center bg-[#DFE1DC] overflow-hidden">
      {/* Fondo con textura sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
      </div>

      {/* Manchas de color líquido */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-[#FF73D9] opacity-20 filter blur-[80px]"
        ></motion.div>

        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 10 }}
          className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#83CCDA] opacity-20 filter blur-[80px]"
        ></motion.div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bubblegum-bold text-[#FF73D9] block">Sabores que</span>
              <motion.span
                className="pacifico-regular text-[#83CCDA] block"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(131, 204, 218, 0)",
                    "0 0 10px rgba(131, 204, 218, 0.3)",
                    "0 0 0px rgba(131, 204, 218, 0)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              >
                derriten corazones
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="quicksand-semibold text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto"
          >
            Descubre nuestra selección premium de helados, waffles crujientes y ensalada de frutas
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            {/* Botón "Ver Sabores" */}
            <motion.button
              onClick={() => navigate(RUTAS.VER_HELADOS.VER_CONOS)}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FF73D9",
                boxShadow: "0 10px 25px -5px rgba(202, 137, 179, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-[#83CCDA] text-white font-bold py-4 px-12 rounded-full transition-all duration-300 text-lg quicksand-semibold overflow-hidden"
            >
              <span className="relative z-10">Ver Sabores</span>
              {/* <motion.span
                className="absolute bottom-0 left-0 w-full h-0 bg-[#FF73D9] opacity-30"
                animate={{
                  height: ["0%", "100%", "0%"],
                  bottom: ["0%", "0%", "100%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.span> */}
            </motion.button>

            {/* Botón "Nuestras Tiendas" */}
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#83CCDA",
                boxShadow: "0 10px 25px -5px rgba(131, 204, 218, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-[#FF73D9] text-white font-bold py-4 px-12 rounded-full transition-all duration-300 text-lg quicksand-semibold overflow-hidden flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              <span className="relative z-10">Ubicacion</span>
              {/* <motion.span
                className="absolute bottom-0 left-0 w-full h-0 bg-[#83CCDA] opacity-30"
                animate={{
                  height: ["0%", "100%", "0%"],
                  bottom: ["0%", "0%", "100%"]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              ></motion.span> */}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Ola animada al fondo */}
      <motion.div
        className="absolute bottom-0 left-0 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <svg viewBox="0 0 1200 120" className="w-full" preserveAspectRatio="none">
          <motion.path
            d="M0,0 C150,80 300,40 450,80 C600,120 750,60 900,100 C1050,140 1050,60 1200,100 L1200,120 L0,120 Z"
            fill="#FF73D9"
            fillOpacity="0.5"
            animate={{
              d: [
                "M0,0 C150,80 300,40 450,80 C600,120 750,60 900,100 C1050,140 1050,60 1200,100 L1200,120 L0,120 Z",
                "M0,0 C150,60 300,20 450,60 C600,100 750,40 900,80 C1050,120 1050,40 1200,80 L1200,120 L0,120 Z",
                "M0,0 C150,100 300,60 450,100 C600,140 750,80 900,120 C1050,160 1050,80 1200,120 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.path
            d="M0,20 C150,100 300,60 450,100 C600,140 750,80 900,120 C1050,160 1050,80 1200,120 L1200,120 L0,120 Z"
            fill="#83CCDA"
            fillOpacity="0.3"
            animate={{
              d: [
                "M0,20 C150,100 300,60 450,100 C600,140 750,80 900,120 C1050,160 1050,80 1200,120 L1200,120 L0,120 Z",
                "M0,40 C150,120 300,80 450,120 C600,160 750,100 900,140 C1050,180 1050,100 1200,140 L1200,120 L0,120 Z",
                "M0,0 C150,80 300,40 450,80 C600,120 750,60 900,100 C1050,140 1050,60 1200,100 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
        </svg>
      </motion.div>

      {/* Partículas rosas suaves */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#FF73D9] opacity-20"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { horario } from "../../../backend/json";

export default function HorariosVista() {
  const [diaActual, setDiaActual] = useState("");
  
  useEffect(() => {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const hoy = new Date();
    setDiaActual(dias[hoy.getDay()]);
  }, []);

  // Iconos SVG modernos para cada día
  const IconoDia = ({ dia }) => {
    const iconos = {
      "Lunes": (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#5D9CEC" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      "Martes": (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3V5M5 21H19C19.5523 21 20 20.5523 20 20V12C20 11.4477 19.5523 11 19 11H5C4.44772 11 4 11.4477 4 12V20C4 20.5523 4.44772 21 5 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z" stroke="#FF73D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      "Miércoles": (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="#5D9CEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="#FF73D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      "Jueves": (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 15H17V19C17 20.1046 16.1046 21 15 21H9C7.89543 21 7 20.1046 7 19V15Z" stroke="#FF73D9" strokeWidth="2"/>
          <path d="M17 15V12M7 15V12" stroke="#5D9CEC" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 6C9.79086 6 8 7.79086 8 10V12H16V10C16 7.79086 14.2091 6 12 6Z" fill="#FF73D9"/>
          <path d="M9 5V3M15 5V3" stroke="#5D9CEC" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      "Viernes": (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 21H15M12 3V17M12 17L8 13M12 17L16 13" stroke="#FF73D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      "Sábado": (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12ZM12 12V22M7 22H17" stroke="#5D9CEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      "Domingo": (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM12 8V2M12 22V16M22 12H16M2 12H8M5 5L8 8M19 19L16 16M5 19L8 16M19 5L16 8" stroke="#FF73D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      "Lunes Festivo": (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 8H19M5 8C3.89543 8 3 7.10457 3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6C21 7.10457 20.1046 8 19 8M5 8V18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V8M9 12H15" stroke="#5D9CEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    };
    
    return iconos[dia] || <span>📅</span>;
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Encabezado con animación */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-[#FF73D9] bubblegum-bold mb-4">
          Nuestro Horario
        </h2>
        <p className="text-2xl text-[#5d9cec] quicksand-semibold">
          ¡Ven cuando estemos abiertos!
        </p>
      </motion.div>

      {/* Tarjeta de horarios con efecto neumorfismo */}
      <div className="bg-[#fff9e6] rounded-3xl p-1 shadow-[10px_10px_30px_rgba(0,0,0,0.1),-10px_-10px_30px_rgba(255,255,255,0.8)]">
        {/* Encabezado con degradado líquido */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-[#ff6b6b] to-[#5d9cec] p-6 text-center rounded-t-3xl"
        >
          <h3 className="text-3xl text-white bubblegum-bold">
            Horario de Atención
          </h3>
          <p className="text-[#fff9e6] quicksand-regular mt-2">
            De {horario[0].apertura} a {horario[0].cierre}
          </p>
        </motion.div>

        {/* Lista de horarios con animaciones */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence>
            {horario.map((dia) => (
              <motion.div
                key={dia.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className={`relative p-5 rounded-2xl transition-all duration-300 ${
                  dia.dia === diaActual 
                    ? "bg-gradient-to-br from-[#FF73D9] to-[#5d9cec] shadow-lg" 
                    : "bg-white shadow-md"
                }`}
              >
                {/* Efecto de onda para el día actual */}
                {dia.dia === diaActual && (
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.8, 0.5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 border-2 border-[#FF73D9] rounded-2xl pointer-events-none"
                  />
                )}

                <div className="flex items-center justify-between z-10 relative">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${
                      dia.dia === diaActual ? "bg-white/20" : "bg-[#fff9e6]"
                    }`}>
                      <IconoDia dia={dia.dia} />
                    </div>
                    <div>
                      <span className={`text-xl ${
                        dia.dia === diaActual 
                          ? "text-white bubblegum-bold" 
                          : "text-[#5d9cec] quicksand-semibold"
                      }`}>
                        {dia.dia}
                      </span>
                      {dia.dia === diaActual && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-2 text-xs bg-white text-[#FF73D9] px-2 py-1 rounded-full bubblegum-regular"
                        >
                          ¡Hoy es el día!
                        </motion.span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className={`text-lg ${
                      dia.dia === diaActual 
                        ? "text-white/90 quicksand-regular" 
                        : "text-gray-700 quicksand-semibold"
                    }`}>
                      {dia.apertura} - {dia.cierre}
                    </span>
                    {dia.promo && (
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className={`text-sm font-bold px-3 py-1 rounded-full ${
                          dia.dia === diaActual
                            ? "bg-white text-[#FF73D9]"
                            : "bg-[#ff6b6b] text-white"
                        } bubblegum-regular`}
                      >
                        {dia.promo}
                      </motion.span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pie de la tarjeta */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-[#5d9cec]/10 p-4 text-center rounded-b-3xl border-t border-[#5d9cec]/20"
        >
          <p className="text-[#5d9cec] quicksand-semibold">
            * Horario sujeto a cambios en días festivos
          </p>
        </motion.div>
      </div>
    </div>
  );
}
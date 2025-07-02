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

  // Componente de icono optimizado para móvil
  const IconoDia = ({ dia }) => {
    const iconos = {
      "Lunes": "📅",
      "Martes": "🌞",
      "Miércoles": "✨",
      "Jueves": "🍦",
      "Viernes": "🎉",
      "Sábado": "🌟",
      "Domingo": "🏖️",
      "Lunes Festivo": "🎊"
    };
    
    return (
      <span className="text-2xl md:text-3xl">
        {iconos[dia] || "📅"}
      </span>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 mt-16">
      {/* Encabezado simplificado para móvil */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6 md:mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#FF73D9] bubblegum-bold mb-2 md:mb-4">
          Nuestro Horario
        </h2>
        <p className="text-lg md:text-2xl text-[#5d9cec] quicksand-semibold">
          ¡Ven cuando estemos abiertos!
        </p>
      </motion.div>

      {/* Tarjeta de horarios - Versión móvil */}
      <div className="bg-white md:bg-[#fff9e6] rounded-xl md:rounded-3xl shadow-md md:shadow-[10px_10px_30px_rgba(0,0,0,0.1)]">
        {/* Encabezado */}
        <div className="bg-gradient-to-r from-[#ff6b6b] to-[#5d9cec] p-4 md:p-6 text-center rounded-t-xl md:rounded-t-3xl">
          <h3 className="text-xl md:text-3xl text-white bubblegum-bold">
            Horario
          </h3>
          <p className="text-sm md:text-base text-[#fff9e6] quicksand-regular mt-1">
            {horario[0].apertura} - {horario[0].cierre}
          </p>
        </div>

        {/* Lista optimizada para móvil */}
        <div className="divide-y divide-[#5d9cec]/20">
          {horario.map((dia) => (
            <motion.div
              key={dia.id}
              className={`p-3 md:p-4 flex items-center justify-between ${
                dia.dia === diaActual ? "bg-[#FF73D9]/10" : "bg-white"
              }`}
            >
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className={`p-1 md:p-2 rounded-full ${
                  dia.dia === diaActual ? "bg-[#FF73D9]/20" : "bg-[#fff9e6]"
                }`}>
                  <IconoDia dia={dia.dia} />
                </div>
                <div>
                  <span className={`text-base md:text-lg ${
                    dia.dia === diaActual 
                      ? "text-[#FF73D9] bubblegum-bold" 
                      : "text-[#5d9cec] quicksand-semibold"
                  }`}>
                    {dia.dia}
                  </span>
                  {dia.dia === diaActual && (
                    <span className="ml-2 text-xs bg-[#FF73D9] text-white px-2 py-0.5 rounded-full bubblegum-regular">
                      Hoy
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2 md:space-x-3">
                <span className={`text-sm md:text-base ${
                  dia.dia === diaActual 
                    ? "text-[#FF73D9]" 
                    : "text-gray-700"
                } quicksand-semibold`}>
                  {dia.apertura}-{dia.cierre}
                </span>
                {dia.promo && (
                  <span className={`text-xs md:text-sm px-2 py-0.5 md:px-3 md:py-1 rounded-full ${
                    dia.dia === diaActual
                      ? "bg-[#FF73D9] text-white"
                      : "bg-[#ff6b6b] text-white"
                  } bubblegum-regular`}>
                    {dia.promo}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pie de página */}
        <div className="bg-[#5d9cec]/10 p-3 text-center rounded-b-xl md:rounded-b-3xl">
          <p className="text-xs md:text-sm text-[#5d9cec] quicksand-semibold">
            * Sujeto a cambios en festivos
          </p>
        </div>
      </div>
    </div>
  );
}
import { motion } from "framer-motion"; // Asegúrate de tener instalado framer-motion
import { Hero } from "../components/hero";
import { HorarioSection } from "../components/HorarioSection";

export default function Inicio() {
  return (
    <div className="overflow-hidden">
      {/* Sección Hero */}
      <Hero />

      {/* Sección Horario */}
      <HorarioSection />
    </div>
  );
}
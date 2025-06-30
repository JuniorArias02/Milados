import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { RUTAS } from "../../../router/route";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", stiffness: 100 }}
			className="fixed w-full bg-[#FFF9E6] bg-opacity-80 backdrop-blur-md shadow-sm z-50"
		>
			<div className="container mx-auto px-6 py-3 flex justify-between items-center">
				{/* Logo */}
				<motion.div whileHover={{ scale: 1.05 }}>
					<Link to={RUTAS.INICIO}>
						<h1 className="text-3xl font-bold text-[#FF73D9] quicksand-semibold">Milados</h1>
					</Link>
				</motion.div>


				{/* Menú */}
				<div className="hidden md:flex space-x-8">
					<Link to={RUTAS.INICIO} className="text-[#83CCDA] hover:text-[#FF73D9] transition-colors quicksand-semibold">Inicio</Link>
					<Link to={RUTAS.VER_HELADOS.VER_CONOS} className="text-[#83CCDA] hover:text-[#FF73D9] transition-colors quicksand-semibold">Helados</Link>
					<a href="#" className="text-[#83CCDA] hover:text-[#FF73D9] transition-colors quicksand-semibold">Horario</a>
					<a href="#" className="text-[#83CCDA] hover:text-[#FF73D9] transition-colors quicksand-semibold">Contacto</a>
				</div>

				{/* Instagram + Botón */}
				<motion.a
					href="https://www.instagram.com/milados_heladeria"
					target="_blank"
					whileHover={{ scale: 1.1 }}
					className="flex items-center space-x-2 bg-[#FF73D9] px-4 py-2 rounded-full text-white quicksand-semibold"
				>
					<Instagram size={18} />
					<span className="hidden sm:inline-block">Síguenos</span>
				</motion.a>
			</div>
		</motion.nav>
	);
}

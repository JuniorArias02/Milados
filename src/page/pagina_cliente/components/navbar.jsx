import { motion } from "framer-motion";
import { Instagram } from "lucide-react"; // Instala: npm install lucide-react

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
					<h1 className="text-3xl font-bold text-[#FF6B6B]">Milados</h1>
				</motion.div>

				{/* Menú */}
				<div className="hidden md:flex space-x-8">
					<a href="#" className="text-[#5D9CEC] hover:text-[#FF6B6B] transition-colors font-medium">Inicio</a>
					<a href="#" className="text-[#5D9CEC] hover:text-[#FF6B6B] transition-colors font-medium">Sabores</a>
					<a href="#" className="text-[#5D9CEC] hover:text-[#FF6B6B] transition-colors font-medium">Horario</a>
					<a href="#" className="text-[#5D9CEC] hover:text-[#FF6B6B] transition-colors font-medium">Contacto</a>
				</div>

				{/* Instagram + Botón */}
				<motion.a
					href="https://instagram.com/milados"
					target="_blank"
					whileHover={{ scale: 1.1 }}
					className="flex items-center space-x-2 bg-[#FF6B6B] px-4 py-2 rounded-full text-white"
				>
					<Instagram size={18} />
					<span className="hidden sm:inline-block">Síguenos</span>
				</motion.a>
			</div>
		</motion.nav>
	);
};
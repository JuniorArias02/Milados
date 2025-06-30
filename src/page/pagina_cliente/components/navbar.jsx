import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { RUTAS } from "../../../router/route";
import { Link } from "react-router-dom";
import { usePedido } from "../../../store/PedidoContext";

export default function Navbar({ abrirSidebar }) {
	const { pedido } = usePedido();
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

				{/* Botón del carrito moderno */}
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={abrirSidebar}
					className="relative flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-[#FF73D9] to-[#83CCDA] text-white shadow-lg hover:shadow-xl transition-all duration-200"
				>
					{/* Icono moderno SVG */}
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

					{/* Contador de items */}
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
		</motion.nav>
	);
}

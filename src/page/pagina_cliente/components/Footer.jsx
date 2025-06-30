import React from 'react';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
	return (
		<footer className="relative bg-[#fff9e6] text-[#83ccda] pt-12 pb-8">
			<div className="max-w-7xl mx-auto px-4">
				{/* Fila 1 */}
				<div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
					<motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
						<div className="bg-[#FF73D9] p-2 rounded-full">
							<svg className="w-8 h-8 text-[#fff9e6]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6z" />
								<path d="M12 7V4a1 1 0 0 0-1-1 7 7 0 0 0-6 7v6a4 4 0 0 0 4 4h2" />
								<path d="M17 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6z" />
							</svg>
						</div>
						<h3 className="text-3xl bubblegum-bold text-[#FF73D9]">Milados</h3>
					</motion.div>

					{/* Botones */}
					<div className="flex flex-wrap justify-center gap-4">
						<motion.button
							whileHover={{ scale: 1.05, backgroundColor: "#FF73D9" }}
							whileTap={{ scale: 0.95 }}
							className="bg-[#83ccda] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 quicksand-semibold"
						>
							Ver Sabores
						</motion.button>

						<motion.button
							whileHover={{ scale: 1.05, backgroundColor: "#83ccda" }}
							whileTap={{ scale: 0.95 }}
							className="bg-[#FF73D9] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 quicksand-semibold flex items-center gap-2"
						>
							<MapPin className="w-5 h-5" />
							Ubicación
						</motion.button>
					</div>
				</div>

				{/* Fila 2 */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
					<div className="flex flex-col sm:flex-row items-center gap-6">
						<div className="flex items-center gap-2">
							<Phone className="w-5 h-5 text-[#FF73D9]" />
							<a
								href="https://wa.me/573204601286"
								target="_blank"
								rel="noopener noreferrer"
								className="quicksand-semibold text-[#5D9CEC] hover:underline"
							>
								+57 320 460 1286
							</a>
						</div>
						<div className="flex items-center gap-2">
							<MapPin className="w-5 h-5 text-[#FF73D9]" />
							<span className="quicksand-semibold">Cúcuta, Colombia</span>
						</div>
					</div>

					<div className="flex gap-4">
						<motion.a
							href="https://www.instagram.com/milados_heladeria"
							whileHover={{ scale: 1.1, y: -5 }}
							whileTap={{ scale: 0.9 }}
							className="bg-[#83ccda] text-white p-3 rounded-full hover:bg-[#FF73D9] transition-all"
							aria-label="Instagram"
						>
							<Instagram className="w-6 h-6" />
						</motion.a>
						{/* 
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#83ccda] text-white p-3 rounded-full hover:bg-[#FF73D9] transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </motion.a> */}
					</div>
				</div>

				{/* Fila 3 */}
				<div className="text-center pt-6 border-t border-[#FF73D9]/30">
					<p className="quicksand-regular flex items-center justify-center gap-1">
						© {new Date().getFullYear()} <span className="bubblegum-bold ml-1">Milados</span> - Todos los derechos reservados
					</p>
				</div>
			</div>
		</footer>
	);
}

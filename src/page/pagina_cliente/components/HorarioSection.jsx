import { motion } from "framer-motion";
export function HorarioSection() {
	const horario = [
		{ id: 1, dia: "Lunes", apertura: "4:00 PM", cierre: "10:00 PM", promo: false },
		{ id: 2, dia: "Martes", apertura: "4:00 PM", cierre: "10:00 PM", promo: false },
		{ id: 3, dia: "Miércoles", apertura: "4:00 PM", cierre: "10:00 PM", promo: "2x1" },
		{ id: 4, dia: "Jueves", apertura: "4:00 PM", cierre: "10:00 PM", promo: false },
		{ id: 5, dia: "Viernes", apertura: "4:00 PM", cierre: "10:00 PM", promo: false },
		{ id: 6, dia: "Sábado", apertura: "4:00 PM", cierre: "10:00 PM", promo: false },
		{ id: 7, dia: "Domingo", apertura: "4:00 PM", cierre: "10:00 PM", promo: false },
	];

	return (
		<section className="py-20 bg-gradient-to-b from-[#FFF9E6] to-[#5D9CEC]/10 ">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center text-[#FF6B6B] mb-12">Horario y Promociones</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{horario.map((item) => (
						<motion.div
							key={item.id}
							whileHover={{ y: -5 }}
							className="bg-white bg-opacity-70 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white border-opacity-30"
						>
							<h3 className={`text-2xl font-bold ${item.promo ? "text-[#FF6B6B]" : "text-[#5D9CEC]"}`}>
								{item.dia}
							</h3>
							<p className="text-gray-600 mt-2">
								{item.apertura} - {item.cierre}
							</p>
							{item.promo && (
								<span className="inline-block mt-4 bg-[#FF6B6B] text-white px-3 py-1 rounded-full text-sm font-bold">
									🎉 {item.promo}
								</span>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
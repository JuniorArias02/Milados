export default function Footer() {
	return (
		<footer className="bg-[#5D9CEC] text-white py-8">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<h3 className="text-2xl font-bold text-[#FF6B6B]">Milados</h3>
						<p className="mt-2">Helados artesanales desde 2025</p>
					</div>
					<div className="text-center md:text-right">
						<p className="font-bold">Dirección</p>
						<p>Calle 9 con Avenida 16 esquina</p>
						<p className="mt-2">Horario: 4PM - 10PM</p>
					</div>
				</div>
				<div className="border-t border-white/20 mt-6 pt-6 text-center">
					<p>© 2025 Milados. Todos los derechos reservados.</p>
				</div>
			</div>
		</footer>
	);
};

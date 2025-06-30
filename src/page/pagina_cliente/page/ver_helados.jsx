import { categorias } from "../../../backend/json";

export function VerHelados() {
	return (
		<section className="min-h-screen bg-[#fff9e6] px-4 py-12 mt-8">
			<div className="max-w-7xl mx-auto">
				{/* Encabezado elegante */}
				<div className="text-center mb-16">
					<h2 className="text-5xl pacifico-regular text-[#FF73D9] mb-4">Nuestra Selección Premium</h2>
					<div className="w-24 h-1 bg-[#83CCDA] mx-auto mb-4"></div>
					<p className="text-xl quicksand-regular text-gray-600 max-w-2xl mx-auto">
						Helados artesanales con los mejores ingredientes
					</p>
				</div>

				{/* Grid de productos con altura automática */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{categorias.flatMap(cat =>
						cat.productos.map(p => (
							<div
								key={`${cat.nombre}-${p.id}`}
								className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
							>
								{/* Contenedor de imagen con altura fija */}
								<div className="h-64 overflow-hidden relative">
									{p.imagen ? (
										<img
											src={p.imagen}
											alt={p.nombre}
											className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
										/>
									) : (
										<div className="w-full h-full bg-gradient-to-br from-[#FF73D9]/10 to-[#83CCDA]/20 flex items-center justify-center">
											<span className="text-4xl pacifico-regular text-[#FF73D9]/30">{cat.nombre}</span>
										</div>
									)}
									<div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full shadow-sm">
										<span className="quicksand-semibold text-[#5D9CEC]">
											{p.precio.toLocaleString('es-CO', {
												style: 'currency',
												currency: 'COP',
												minimumFractionDigits: 0
											})}
										</span>

									</div>
								</div>

								{/* Contenido de la tarjeta */}
								<div className="p-6 flex flex-col flex-grow">
									<div className="flex justify-between items-start mb-3">
										<h3 className="text-xl quicksand-semibold text-gray-800">{p.nombre}</h3>
										<span className="text-xs px-2 py-1 rounded-full bg-[#FF73D9]/10 text-[#FF73D9]">
											{cat.nombre}
										</span>
									</div>

									{/* Características principales */}
									<div className="grid grid-cols-2 gap-2 mb-2">
										{p.numSabores > 0 && (
											<div className="flex items-center">
												<div className="w-5 h-5 rounded-full bg-[#FF73D9] flex items-center justify-center mr-2">
													<span className="text-white text-xs">{p.numSabores}</span>
												</div>
												<span className="text-sm quicksand-regular text-gray-600">Sabores</span>
											</div>
										)}

										{p.numSalsas > 0 && (
											<div className="flex items-center">
												<div className="w-5 h-5 rounded-full bg-[#83CCDA] flex items-center justify-center mr-2">
													<span className="text-white text-xs">{p.numSalsas}</span>
												</div>
												<span className="text-sm quicksand-regular text-gray-600">Salsas</span>
											</div>
										)}

										{p.numToppings > 0 && (
											<div className="flex items-center">
												<div className="w-5 h-5 rounded-full bg-[#5D9CEC] flex items-center justify-center mr-2">
													<span className="text-white text-xs">{p.numToppings}</span>
												</div>
												<span className="text-sm quicksand-regular text-gray-600">Toppings</span>
											</div>
										)}

										{p.crema && (
											<div className="flex items-center col-span-2">
												<div className="w-5 h-5 rounded-full border border-[#DFE1DC] bg-white flex items-center justify-center mr-2">
													<div className="w-3 h-3 rounded-full bg-[#DFE1DC]"></div>
												</div>
												<span className="text-sm quicksand-regular text-gray-600">Con crema batida</span>
											</div>
										)}
									</div>

									{/* Sección de extras */}
									{p.extras && p.extras.length > 0 && (
										<div className="mb-3">
											<div className="flex items-center mb-1">
												<svg className="w-4 h-4 mr-1 text-[#FF73D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
												</svg>
												<span className="text-sm quicksand-semibold text-gray-700">Extras:</span>
											</div>
											<div className="flex flex-wrap gap-2">
												{p.extras.map((extra, index) => (
													<span
														key={index}
														className="text-xs px-2 py-1 rounded-full bg-[#83CCDA]/10 text-[#83CCDA] border border-[#83CCDA]/20"
													>
														{extra}
													</span>
												))}
											</div>
										</div>
									)}

									{/* Descripción */}
									{p.descripcion && (
										<div className="mb-4">
											<p className="text-sm quicksand-regular text-gray-500">{p.descripcion}</p>
										</div>
									)}

									{/* Botón de acción */}
									<button className="w-full py-3 rounded-lg quicksand-semibold text-white bg-[#FF73D9] hover:bg-[#e65ac4] transition-colors flex items-center justify-center mt-auto">
										<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
										</svg>
										Personalizar este helado
									</button>
								</div>
							</div>
						))
					)};				</div>

				{/* Pie de sección */}
				<div className="text-center mt-16">
					<p className="quicksand-regular text-gray-500 mb-4">¿Necesitas ayuda para elegir?</p>
					<button className="px-8 py-3 rounded-full border-2 border-[#83CCDA] text-[#83CCDA] hover:bg-[#83CCDA] hover:text-white transition-colors quicksand-semibold">
						Ver recomendaciones
					</button>
				</div>
			</div>
		</section>
	);
}
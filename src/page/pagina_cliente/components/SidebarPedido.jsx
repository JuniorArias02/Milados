import { usePedido } from "../../../store/PedidoContext";
import ConfirmarPedidoBtn from "./ConfirmarPedidoBtn.jsx";

export default function SidebarPedido({ abierto, onClose }) {
  const { pedido, eliminarItem, generarMensaje } = usePedido();

  return (
    <div className={`fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-2xl transition-all duration-300 z-50 ${abierto ? "translate-x-0" : "translate-x-full"}`}>
      {/* Encabezado */}
      <div className="bg-gradient-to-r from-[#FF73D9] to-[#83CCDA] p-5 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 15H17V19C17 20.1046 16.1046 21 15 21H9C7.89543 21 7 20.1046 7 19V15Z" stroke="currentColor" strokeWidth="2" />
            <path d="M17 15V12M7 15V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 6C9.79086 6 8 7.79086 8 10V12H16V10C16 7.79086 14.2091 6 12 6Z" fill="currentColor" />
            <path d="M9 5V3M15 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <h2 className="text-2xl font-bold text-white pacifico-regular">Tu Pedido</h2>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-white/20 transition-colors duration-200"
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Cuerpo del sidebar */}
      <div className="p-5 space-y-5 overflow-y-auto h-[calc(100%-180px)] bg-[#fff9e6]/50">
        {pedido.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <svg className="w-20 h-20 text-[#5d9cec]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 15H17V19C17 20.1046 16.1046 21 15 21H9C7.89543 21 7 20.1046 7 19V15Z" stroke="currentColor" strokeWidth="2" />
              <path d="M17 15V12M7 15V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 6C9.79086 6 8 7.79086 8 10V12H16V10C16 7.79086 14.2091 6 12 6Z" fill="currentColor" />
              <path d="M9 5V3M15 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p className="text-xl text-[#5d9cec] mt-4 quicksand-semibold">Tu carrito está vacío</p>
            <p className="text-[#ff6b6b] mt-2">¡Empieza a agregar deliciosos helados!</p>
          </div>
        ) : (
          pedido.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden border border-[#5d9cec]/30">
              {/* Encabezado con imagen o placeholder */}
              <div className="relative h-32 bg-gradient-to-r from-[#ff6b6b]/20 to-[#5d9cec]/20">
                {item.imagen ? (
                  <img src={item.imagen} alt={item.nombre} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <h3 className="text-2xl pacifico-regular text-[#5d9cec] px-4 text-center">
                      {item.nombre}
                    </h3>
                  </div>
                )}
              </div>

              {/* Detalles del ítem */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-[#ff6b6b] quicksand-semibold">{item.nombre}</h3>
                    <p className="text-[#5d9cec] font-medium">
                      {item.precio.toLocaleString("es-CO", {
                        style: "currency",
                        currency: "COP",
                        minimumFractionDigits: 0
                      })}
                    </p>
                  </div>
                  <button
                    onClick={() => eliminarItem(idx)}
                    className="text-white bg-[#ff6b6b] hover:bg-[#e55a5a] px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    Eliminar
                  </button>
                </div>

                {/* Mostrar todas las personalizaciones */}
                <div className="mt-3 space-y-3">
                  {/* Sabores */}
                  {item.sabores?.length > 0 && (
                    <div className="pt-2">
                      <h4 className="text-sm text-[#5d9cec] font-semibold mb-1">Sabores:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.sabores.map((sabor, i) => (
                          <span key={`sabor-${i}`} className="text-xs bg-[#ff6b6b]/10 text-[#ff6b6b] px-2 py-1 rounded-full">
                            {sabor.nombre}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Salsas */}
                  {item.salsas?.length > 0 && (
                    <div className="pt-2">
                      <h4 className="text-sm text-[#5d9cec] font-semibold mb-1">Salsas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.salsas.map((salsa, i) => (
                          <span key={`salsa-${i}`} className="text-xs bg-[#5d9cec]/10 text-[#5d9cec] px-2 py-1 rounded-full">
                            {salsa.nombre}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Toppings */}
                  {item.toppings?.length > 0 && (
                    <div className="pt-2">
                      <h4 className="text-sm text-[#5d9cec] font-semibold mb-1">Toppings:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.toppings.map((topping, i) => (
                          <span key={`topping-${i}`} className="text-xs bg-[#83CCDA]/10 text-[#83CCDA] px-2 py-1 rounded-full">
                            {topping.nombre}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pie del sidebar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#5d9cec]/20 p-4 shadow-inner">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg text-[#5d9cec] quicksand-semibold">Total:</span>
          <span className="text-xl font-bold text-[#ff6b6b]">
            {pedido.reduce((total, item) => total + item.precio, 0).toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0
            })}
          </span>
        </div>
        <ConfirmarPedidoBtn />
      </div>
    </div>
  );
}
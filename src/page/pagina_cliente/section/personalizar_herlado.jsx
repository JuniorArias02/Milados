import { useState } from "react";
import { preparacion } from "../../../backend/json";
import { useLocation, useNavigate } from "react-router-dom";
import { usePedido } from "../../../store/PedidoContext";
import Swal from 'sweetalert2'

export default function PersonalizarHelado() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const helado = state?.producto;
  const { agregarItem } = usePedido();

  const [seleccion, setSeleccion] = useState({
    sabores: [],
    salsas: [],
    toppings: [],
  });

  if (!helado) return <p>No se encontró el helado 🥲</p>;

  const handleSeleccion = (tipo, item) => {
    const limite = helado[`num${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`];
    const yaSeleccionado = seleccion[tipo].some((i) => i.id === item.id);

    if (yaSeleccionado) {
      setSeleccion((prev) => ({
        ...prev,
        [tipo]: prev[tipo].filter((i) => i.id !== item.id),
      }));
    } else {
      if (seleccion[tipo].length < limite) {
        setSeleccion((prev) => ({
          ...prev,
          [tipo]: [...prev[tipo], item],
        }));
      }
    }
  };

  const handleGuardar = () => {
    const nuevoHelado = {
      nombre: helado.nombre,
      precio: helado.precio,
      imagen: helado.imagen,
      sabores: seleccion.sabores,
      salsas: seleccion.salsas,
      toppings: seleccion.toppings,
    };

    agregarItem(nuevoHelado);
    Swal.fire({
      title: '<div class="pacifico-regular text-3xl text-[#FF73D9]">¡Delicioso!</div>',
      html: `
    <div class="flex flex-col items-center justify-center">
      <svg class="w-16 h-16 mx-auto mb-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 15H17V19C17 20.1046 16.1046 21 15 21H9C7.89543 21 7 20.1046 7 19V15Z" fill="#FF73D9"/>
        <path d="M17 15V12M7 15V12" stroke="#5D9CEC" stroke-width="2" stroke-linecap="round"/>
        <path d="M12 6C9.79086 6 8 7.79086 8 10V12H16V10C16 7.79086 14.2091 6 12 6Z" fill="#5D9CEC"/>
        <path d="M9 5V3M15 5V3" stroke="#FF73D9" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <p class="quicksand-semibold text-[#5D9CEC] text-lg">Helado agregado al carrito</p>
    </div>
  `,
      timer: 2000,
      timerProgressBar: true,
      background: '#FFF9E6',
      showConfirmButton: false,
      position: 'center', // Cambiado a centro
      customClass: {
        popup: 'shadow-lg border-2 border-[#FF73D9]/30 rounded-2xl',
        timerProgressBar: 'bg-[#FF73D9]'
      },
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
  };

  const handlePedirAhora = () => {
    const nuevoHelado = {
      nombre: helado.nombre,
      precio: helado.precio,
      sabores: seleccion.sabores,
      salsas: seleccion.salsas,
      toppings: seleccion.toppings,
    };

    agregarItem(nuevoHelado);

    let mensaje = `🍦 *¡Hola! Quiero hacer un pedido de helados:*\n\n`;

    mensaje += `*1.* ${nuevoHelado.nombre}\n`;

    if (nuevoHelado.sabores.length)
      mensaje += `   - Sabores: ${nuevoHelado.sabores.map((s) => s.nombre).join(", ")}\n`;

    if (nuevoHelado.salsas.length)
      mensaje += `   - Salsas: ${nuevoHelado.salsas.map((s) => s.nombre).join(", ")}\n`;

    if (nuevoHelado.toppings.length)
      mensaje += `   - Toppings: ${nuevoHelado.toppings.map((t) => t.nombre).join(", ")}\n`;

    mensaje += `   💰 Precio: ${nuevoHelado.precio.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    })}\n\n`;

    mensaje += `🧾 *Total:* ${nuevoHelado.precio.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    })}`;

    const url = `https://wa.me/573143087315?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#fff9e6] p-4 md:p-8 mt-15">
      {/* Carta de personalización */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-[#ff6b6b]/20">
        {/* Encabezado con imagen */}
        <div className="relative">
          {helado.imagen ? (
            <img
              src={helado.imagen}
              alt={helado.nombre}
              className="w-full h-48 md:h-64 object-cover"
            />
          ) : (
            <div className="bg-gradient-to-br from-[#ff8a8a] via-[#ff6b6b] to-[#FF73D9] h-48 md:h-64 flex items-center justify-center relative overflow-hidden">
              {/* Efecto de burbujas */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white"></div>
                <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-white"></div>
                <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-white"></div>
              </div>
              <h2 className="text-4xl md:text-5xl pacifico-regular text-white text-center px-4 relative z-10 drop-shadow-lg">
                {helado.nombre}
              </h2>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent h-20"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-3xl md:text-4xl pacifico-regular text-white drop-shadow-lg">
              {helado.nombre}
            </h2>
            <p className="text-xl quicksand-semibold text-white/90 drop-shadow-md">
              {helado.precio.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0,
              })}
            </p>
          </div>
        </div>

        {/* Cuerpo de la carta */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Opciones de personalización */}
          {preparacion.map((p) => (
            <div key={p.nombre} className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl md:text-2xl quicksand-semibold capitalize text-[#5d9cec]">
                  {p.nombre}
                </h3>
                <span className="text-sm bg-[#ff6b6b]/10 text-[#ff6b6b] px-3 py-1 rounded-full quicksand-regular">
                  Máx. {helado[`num${p.nombre.charAt(0).toUpperCase() + p.nombre.slice(1)}`]}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {p.productos.map((item) => {
                  const tipo = p.nombre;
                  const estaSeleccionado = seleccion[tipo].some((i) => i.id === item.id);

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSeleccion(tipo, item)}
                      className={`px-4 py-2 rounded-full border-2 transition-all quicksand-regular ${estaSeleccionado
                        ? "bg-[#ff6b6b] text-white border-[#ff6b6b] shadow-md"
                        : "bg-white text-[#5d9cec] border-[#5d9cec] hover:bg-[#5d9cec] hover:text-white"
                        }`}
                    >
                      {item.nombre}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Pie de carta - Botones */}
        <div className="bg-[#5d9cec]/10 p-6 border-t border-[#5d9cec]/20">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 rounded-xl bg-white border-2 border-[#5d9cec] text-[#5d9cec] hover:bg-[#5d9cec]/10 quicksand-semibold transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Volver
            </button>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleGuardar}
                className="px-6 py-3 rounded-xl bg-[#5d9cec] text-white hover:bg-[#4a8adc] quicksand-semibold transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5">...</svg>
                Guardar
              </button>


              <button
                onClick={handlePedirAhora}
                className="px-6 py-3 rounded-xl bg-[#ff6b6b] text-white hover:bg-[#e55a5a] quicksand-semibold transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Pedir ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
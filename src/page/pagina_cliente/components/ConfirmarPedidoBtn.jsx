import { usePedido } from "../../../store/PedidoContext";

export default function ConfirmarPedidoBtn() {
  const { pedido } = usePedido();

  const generarTextoPedido = () => {
    let total = 0;
    let mensaje = `🍦 *¡Hola! Quiero hacer un pedido de helados:*\n\n`;

    pedido.forEach((item, index) => {
      mensaje += `*${index + 1}.* ${item.nombre}\n`;

      if (item.sabores?.length)
        mensaje += `   - Sabores: ${item.sabores.map((s) => s.nombre).join(", ")}\n`;

      if (item.salsas?.length)
        mensaje += `   - Salsas: ${item.salsas.map((s) => s.nombre).join(", ")}\n`;

      if (item.toppings?.length)
        mensaje += `   - Toppings: ${item.toppings.map((t) => t.nombre).join(", ")}\n`;

      mensaje += `   💰 Precio: ${item.precio.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      })}\n\n`;

      total += item.precio;
    });

    mensaje += `🧾 *Total:* ${total.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    })}\n`;

    return mensaje;
  };

  const enviarPorWhatsApp = () => {
    const mensaje = generarTextoPedido();
    const url = `https://wa.me/573204601286?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={enviarPorWhatsApp}
      disabled={pedido.length === 0}
      className={`w-full py-3 rounded-xl font-bold text-white transition-colors ${pedido.length === 0
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-[#ff6b6b] hover:bg-[#e55a5a]"
        }`}
    >
      Confirmar Pedido
    </button>
  );
}

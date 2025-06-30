import { createContext, useContext, useEffect, useState } from 'react';

const PedidoContext = createContext();

const CLAVE_STORAGE = 'pedidoMilados';
const TIEMPO_EXPIRACION = 30 * 60 * 1000; // 30 minutos en ms

export const PedidoProvider = ({ children }) => {
  const [pedido, setPedido] = useState([]);

  // ⏳ Al cargar, revisamos si expiró
  useEffect(() => {
    const dataGuardada = localStorage.getItem(CLAVE_STORAGE);
    if (dataGuardada) {
      const { items, timestamp } = JSON.parse(dataGuardada);
      const ahora = Date.now();

      if (ahora - timestamp < TIEMPO_EXPIRACION) {
        setPedido(items);
      } else {
        localStorage.removeItem(CLAVE_STORAGE);
      }
    }
  }, []);

  // 💾 Guardar cada vez que el pedido cambie
  useEffect(() => {
    const data = {
      items: pedido,
      timestamp: Date.now(),
    };
    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(data));
  }, [pedido]);

  const agregarItem = (item) => {
    setPedido((prev) => [...prev, item]);
  };

  const eliminarItem = (id) => {
    setPedido((prev) => {
      const nuevo = prev.filter((_, idx) => idx !== id);
      return nuevo;
    });
  };

  const limpiarPedido = () => {
    setPedido([]);
  };

  const generarMensaje = () => {
    if (pedido.length === 0) return 'No hay nada en el pedido 😢';

    let total = 0;
    const cuerpo = pedido
      .map((item, i) => {
        total += item.precio;
        return `${i + 1}. ${item.nombre} - ${item.precio.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
        })}`;
      })
      .join('\n');

    return `${cuerpo}\n\n🧾 Total a pagar: ${total.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    })}`;
  };

  return (
    <PedidoContext.Provider
      value={{
        pedido,
        agregarItem,
        eliminarItem,
        limpiarPedido,
        generarMensaje,
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
};

export const usePedido = () => useContext(PedidoContext);

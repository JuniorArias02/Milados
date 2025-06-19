import { createContext, useContext, useState } from 'react'

const PedidoContext = createContext()

export const PedidoProvider = ({ children }) => {
  const [pedido, setPedido] = useState([])

  const agregarItem = (item) => {
    setPedido((prev) => [...prev, item])
  }

  const eliminarItem = (id) => {
    setPedido((prev) => prev.filter((i, idx) => idx !== id))
  }

  const limpiarPedido = () => setPedido([])

  const generarMensaje = () => {
    if (pedido.length === 0) return 'No hay nada en el pedido 😢'
    return pedido
      .map((item, i) => `${i + 1}. ${item.nombre} - $${item.precio}`)
      .join('\n')
  }

  return (
    <PedidoContext.Provider
      value={{ pedido, agregarItem, eliminarItem, limpiarPedido, generarMensaje }}
    >
      {children}
    </PedidoContext.Provider>
  )
}

export const usePedido = () => useContext(PedidoContext)

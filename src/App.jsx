import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './page/pagina_cliente/layout/layout';
import Inicio from './page/pagina_cliente/page/inicio';
import { VerHelados } from './page/pagina_cliente/page/ver_helados';
import PersonalizarHelado from './page/pagina_cliente/section/personalizar_herlado';
import { RUTAS } from './router/route';
import ScrollToTop from './page/pagina_cliente/components/ScrollToTop';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Ruta padre que usa Layout */}
        <Route path={RUTAS.INICIO} element={<Layout />}>
          <Route index element={<Inicio />} />
        </Route>

        <Route path={RUTAS.VER_HELADOS.VER_CONOS} element={<Layout />}>
          <Route index element={<VerHelados />} />
        </Route>

        <Route path={RUTAS.VER_HELADOS.PERSONALIZAR} element={<Layout />}>
          <Route index element={<PersonalizarHelado />} />
        </Route>

        {/* Ruta comodín para redirigir si no existe */}
        <Route path="*" element={<Navigate to={RUTAS.INICIO} replace />} />
      </Routes>
    </Router>
  );
}

export default App;

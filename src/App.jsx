import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './page/pagina_cliente/layout/layout';
import Inicio from './page/pagina_cliente/page/inicio';
import { VerHelados } from './page/pagina_cliente/page/ver_helados';
import { RUTAS } from './router/route';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta padre que usa Layout */}
        <Route path={RUTAS.INICIO} element={<Layout />}>
          <Route index element={<Inicio />} />
        </Route>


        <Route path={RUTAS.VER_HELADOS.VER_CONOS} element={<Layout />}>
          <Route index element={<VerHelados />} />
        </Route>



      </Routes>
    </Router>
  );
}

export default App;
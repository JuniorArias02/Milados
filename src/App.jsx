import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './page/pagina_cliente/layout/layout';
import Inicio from './page/pagina_cliente/page/inicio';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta padre que usa Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
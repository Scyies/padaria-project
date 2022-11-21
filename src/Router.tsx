import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Cardapio } from './pages/Cardapio/Cardapio';
import { Home } from './pages/Home/Home';
import { Produto } from './pages/Produto/Produto';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/cardapio' element={<Cardapio />} />
          <Route path='/produto/:id' element={<Produto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Masculino from './pages/Masculino';
import ProductDetail from './pages/ProductDetail';
import Femenino from './pages/Femenino';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Masculino />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/masculino" element={<Masculino />} />
      <Route path="/masculino/:id" element={<ProductDetail />} />
      <Route path="/femenino" element={<Femenino />} />
      <Route path="/femenino/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;

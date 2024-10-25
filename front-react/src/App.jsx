import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Blogs from './pages/Blogs';
import Cart from './pages/Cart/index.';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Register from './pages/Register';
import Wishlist from './pages/Wishlist';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

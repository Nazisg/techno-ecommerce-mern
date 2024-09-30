import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Pages from './pages/Pages';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

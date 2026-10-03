import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShopContextProvider from './context/ShopContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import OrderSuccess from './pages/OrderSuccess';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SizeGuide from './pages/SizeGuide';
import CartSidebar from './components/Common/CartSidebar';
import CartReminder from './components/Common/CartReminder';
import ScrollToTop from './components/Common/ScrollToTop';
import FloatingWhatsApp from './components/Common/FloatingWhatsApp';

const App = () => {
  return (
    <ShopContextProvider>
      <ToastContainer 
        position="top-center" 
        autoClose={2500} 
        hideProgressBar 
        toastStyle={{ backgroundColor: 'transparent', boxShadow: 'none', padding: 0 }} 
        closeButton={false}
      />
      <BrowserRouter>
        <ScrollToTop />
        <CartSidebar />
        <CartReminder />
        <FloatingWhatsApp />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="order-success" element={<OrderSuccess />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="size-guide" element={<SizeGuide />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
};

export default App;
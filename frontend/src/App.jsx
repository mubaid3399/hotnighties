import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import FAQ from './pages/FAQ';
import ShippingPolicy from './pages/ShippingPolicy';
import ReturnsExchanges from './pages/ReturnsExchanges';
import SizeGuide from './pages/SizeGuide';
import NotFound from './pages/NotFound';
import AllCategories from './pages/AllCategories';
import Accessories from './pages/Accessories';
import PakistaniDresses from './pages/PakistaniDresses';

// Collection Pages (Organized strictly in collections/)
import SexyLingerie from './pages/collections/lingerie/SexyLingerie';
import LadiesNightwear from './pages/collections/nightwear/LadiesNightwear';
import LadiesUndergarments from './pages/collections/undergarments/LadiesUndergarments';
import ClassicBra from './pages/collections/undergarments/ClassicBra';
import Panty from './pages/collections/undergarments/Panty';
import Nighty from './pages/collections/nightwear/Nighty';
import CategoryDetailCollection from './pages/collections/CategoryDetailCollection';

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

            {/* Legacy URL Redirects directly to collections */}
            <Route path="bras" element={<Navigate to="/collections/classic-bra" replace />} />
            <Route path="nighties" element={<Navigate to="/collections/ladies-nighty" replace />} />
            <Route path="panties" element={<Navigate to="/collections/ladies-panty" replace />} />

            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="order-success" element={<OrderSuccess />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="shipping" element={<ShippingPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="returns" element={<ReturnsExchanges />} />
            <Route path="returns-and-exchanges" element={<ReturnsExchanges />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="size-guide" element={<SizeGuide />} />

            {/* All Categories & Directory Routes */}
            <Route path="categories" element={<AllCategories />} />
            <Route path="all-categories" element={<AllCategories />} />
            <Route path="collections" element={<AllCategories />} />
            <Route path="collections/all-products" element={<Shop />} />
            <Route path="accessories" element={<Accessories />} />
            <Route path="collections/accessories" element={<Accessories />} />
            <Route path="pakistani-dresses" element={<PakistaniDresses />} />
            <Route path="collections/pakistani-dresses" element={<PakistaniDresses />} />

            {/* Collection Pages (Housed exclusively in collections/) */}
            <Route path="collections/classic-bra" element={<ClassicBra />} />
            <Route path="collections/bra" element={<ClassicBra />} />
            <Route path="collections/ladies-panty" element={<Panty />} />
            <Route path="collections/panty" element={<Panty />} />
            <Route path="collections/ladies-nighty" element={<Nighty />} />
            <Route path="collections/nighty" element={<Nighty />} />

            {/* Department Hubs */}
            <Route path="collections/sexy-lingerie" element={<SexyLingerie />} />
            <Route path="collections/ladies-nightwear" element={<LadiesNightwear />} />
            <Route path="collections/ladies-undergarments" element={<LadiesUndergarments />} />

            {/* Universal Engine for All 67 Collections & Subcategories */}
            <Route path="collections/:categorySlug" element={<CategoryDetailCollection />} />

            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
};

export default App;
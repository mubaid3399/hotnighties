import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShopContextProvider from './context/ShopContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Nighties from './pages/Nighties';
import Bras from './pages/Bras';
import Panties from './pages/Panties';
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

// Collections - Lingerie
import SexyLingerie from './pages/collections/lingerie/SexyLingerie';
import LadiesBathrobe from './pages/collections/lingerie/LadiesBathrobe';
import Bikini from './pages/collections/lingerie/Bikini';
import BodyShaper from './pages/collections/lingerie/BodyShaper';
import BodyStocking from './pages/collections/lingerie/BodyStocking';
import LegStocking from './pages/collections/lingerie/LegStocking';
import Stocking from './pages/collections/lingerie/Stocking';

// Collections - Nightwear
import LadiesNightwear from './pages/collections/nightwear/LadiesNightwear';
import Gown from './pages/collections/nightwear/Gown';
import Nightdress from './pages/collections/nightwear/Nightdress';
import Nighty from './pages/collections/nightwear/Nighty';
import NightySets from './pages/collections/nightwear/NightySets';

// Collections - Undergarments
import LadiesUndergarments from './pages/collections/undergarments/LadiesUndergarments';
import ClassicBra from './pages/collections/undergarments/ClassicBra';
import BraPantySets from './pages/collections/undergarments/BraPantySets';
import Camisole from './pages/collections/undergarments/Camisole';
import Panty from './pages/collections/undergarments/Panty';
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
            <Route path="nighties" element={<Nighties />} />
            <Route path="bras" element={<Bras />} />
            <Route path="panties" element={<Panties />} />
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

            {/* Collections: Sexy Lingerie & Subcategories */}
            <Route path="collections/sexy-lingerie" element={<SexyLingerie />} />
            <Route path="collections/ladies-bathrobe" element={<LadiesBathrobe />} />
            <Route path="collections/bathrobe" element={<LadiesBathrobe />} />
            <Route path="collections/ladies-bikini" element={<Bikini />} />
            <Route path="collections/bikini" element={<Bikini />} />
            <Route path="collections/body-shaper" element={<BodyShaper />} />
            <Route path="collections/ladies-body-shaper" element={<BodyShaper />} />
            <Route path="collections/body-stocking" element={<BodyStocking />} />
            <Route path="collections/ladies-body-stocking" element={<BodyStocking />} />
            <Route path="collections/leg-stocking" element={<LegStocking />} />
            <Route path="collections/ladies-leg-stocking" element={<LegStocking />} />
            <Route path="collections/stocking" element={<Stocking />} />
            <Route path="collections/ladies-stocking" element={<Stocking />} />

            {/* Collections: Ladies Nightwear & Subcategories */}
            <Route path="collections/ladies-nightwear" element={<LadiesNightwear />} />
            <Route path="collections/ladies-gown" element={<Gown />} />
            <Route path="collections/gown" element={<Gown />} />
            <Route path="collections/ladies-nightdress" element={<Nightdress />} />
            <Route path="collections/nightdress" element={<Nightdress />} />
            <Route path="collections/ladies-nighty" element={<Nighty />} />
            <Route path="collections/nighty" element={<Nighty />} />
            <Route path="collections/ladies-nighty-sets" element={<NightySets />} />
            <Route path="collections/nighty-sets" element={<NightySets />} />

            {/* Collections: Ladies Undergarments & Subcategories */}
            <Route path="collections/ladies-undergarments" element={<LadiesUndergarments />} />
            <Route path="collections/classic-bra" element={<ClassicBra />} />
            <Route path="collections/bra-panty-sets" element={<BraPantySets />} />
            <Route path="collections/camisole" element={<Camisole />} />
            <Route path="collections/ladies-camisole" element={<Camisole />} />
            <Route path="collections/ladies-panty" element={<Panty />} />
            <Route path="collections/panty" element={<Panty />} />

            {/* Universal Route for All 67 Collections */}
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
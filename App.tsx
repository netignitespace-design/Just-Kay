import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartSidebar } from './components/CartSidebar';
import { DesignConsultant } from './components/DesignConsultant';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { Wishlist } from './pages/Wishlist';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen font-sans bg-stone-50 text-stone-900 selection:bg-stone-200 selection:text-stone-900">
            <Navbar />
            <CartSidebar />
            <DesignConsultant />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
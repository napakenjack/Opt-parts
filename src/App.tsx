/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { Profile } from './pages/Profile';
import { About } from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


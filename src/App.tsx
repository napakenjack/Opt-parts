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
import { Checkout } from './pages/Checkout';
import { OrderSuccess } from './pages/OrderSuccess';
import { Profile } from './pages/Profile';
import { About } from './pages/About';
import { Auth } from './pages/Auth';
import { OrderDetails } from './pages/OrderDetails';

// Admin
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminSuppliers } from './pages/admin/AdminSuppliers';
import { AdminSupplierEdit } from './pages/admin/AdminSupplierEdit';
import { AdminMarkup } from './pages/admin/AdminMarkup';
import { AdminSelectionRules } from './pages/admin/AdminSelectionRules';
import { AdminOrders } from './pages/admin/AdminOrders';
import { AdminOrderDetails } from './pages/admin/AdminOrderDetails';
import { AdminMonitoring } from './pages/admin/AdminMonitoring';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="suppliers" element={<AdminSuppliers />} />
          <Route path="suppliers/:id" element={<AdminSupplierEdit />} />
          <Route path="markup" element={<AdminMarkup />} />
          <Route path="selection-rules" element={<AdminSelectionRules />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="orders/:id" element={<AdminOrderDetails />} />
          <Route path="monitoring" element={<AdminMonitoring />} />
        </Route>

        {/* Public Routes with Header & Footer */}
        <Route
          path="/*"
          element={
            <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order-success" element={<OrderSuccess />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/order/:id" element={<OrderDetails />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}


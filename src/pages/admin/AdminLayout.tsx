import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Settings, 
  ShoppingCart, 
  Activity, 
  Percent,
  SlidersHorizontal,
  LogOut,
  Package
} from 'lucide-react';

const navigation = [
  { name: 'Дашборд', href: '/admin/dashboard', icon: BarChart3 },
  { name: 'Заказы', href: '/admin/orders', icon: ShoppingCart },
  { name: 'Поставщики', href: '/admin/suppliers', icon: Users },
  { name: 'Наценка (Маржа)', href: '/admin/markup', icon: Percent },
  { name: 'Правила выдачи', href: '/admin/selection-rules', icon: SlidersHorizontal },
  { name: 'Мониторинг API', href: '/admin/monitoring', icon: Activity },
];

export function AdminLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-gray-800">
          <Link to="/admin/dashboard" className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Package className="w-6 h-6 text-blue-500" />
            OptParts <span className="text-blue-500 font-normal">Admin</span>
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-3 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-blue-600/10 text-blue-400' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-800">
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors">
            <LogOut className="h-5 w-5" />
            Выйти на сайт
          </Link>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 md:hidden">
          <div className="font-bold text-gray-900">Admin Panel</div>
        </header>

        {/* Dynamic content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

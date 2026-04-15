import { User, Package, MapPin, Heart, CarFront, Settings, LogOut } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Profile() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-8">Мой аккаунт</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
                  JD
                </div>
                <div>
                  <h2 className="font-bold text-gray-900">John Doe</h2>
                  <p className="text-sm text-gray-500">john.doe@example.com</p>
                </div>
              </div>
              <nav className="p-2">
                <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg font-medium">
                  <User className="h-5 w-5" /> Личные данные
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                  <Package className="h-5 w-5" /> История заказов
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                  <CarFront className="h-5 w-5" /> Мой гараж
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                  <Heart className="h-5 w-5" /> Избранное
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                  <MapPin className="h-5 w-5" /> Адреса
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                  <Settings className="h-5 w-5" /> Настройки
                </a>
                <div className="h-px bg-gray-100 my-2 mx-4"></div>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors">
                  <LogOut className="h-5 w-5" /> Выйти
                </a>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* My Garage Widget */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <CarFront className="h-6 w-6 text-blue-600" /> Мой гараж
                </h2>
                <Button variant="outline" size="sm">Добавить авто</Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-blue-200 bg-blue-50 rounded-lg p-4 relative">
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">Активно</div>
                  <h3 className="font-bold text-gray-900">2018 BMW 3 Series</h3>
                  <p className="text-sm text-gray-600 mb-4">320i xDrive Sedan</p>
                  <Button variant="outline" size="sm" className="w-full bg-white">Найти запчасти</Button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">2015 Honda Civic</h3>
                  <p className="text-sm text-gray-600 mb-4">EX 1.8L 4-Cyl</p>
                  <Button variant="outline" size="sm" className="w-full">Найти запчасти</Button>
                </div>
              </div>
            </div>

            {/* Personal Info Form */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Личная информация</h2>
              
              <form className="space-y-4 max-w-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                    <input type="text" defaultValue="John" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Фамилия</label>
                    <input type="text" defaultValue="Doe" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email адрес</label>
                  <input type="email" defaultValue="john.doe@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Номер телефона</label>
                  <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="pt-4">
                  <Button>Сохранить изменения</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, MapPin, Heart, CarFront, Settings, LogOut, ChevronRight, Clock, CheckCircle2, ShieldCheck, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { mockProducts } from '../data/mockData';

export function Profile() {
  const [activeTab, setActiveTab] = useState('profile');
  
  // mock saved items
  const savedItems = mockProducts.slice(1, 3);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Мой аккаунт</h1>
          <Link to="/admin/dashboard">
            <Button variant="outline" className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Панель администратора
            </Button>
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
                  ИИ
                </div>
                <div>
                  <h2 className="font-bold text-gray-900">Иван Иванов</h2>
                  <p className="text-sm text-gray-500">ivan@example.com</p>
                </div>
              </div>
              <nav className="p-2">
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <User className="h-5 w-5" /> Личные данные
                </button>
                <button 
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'orders' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <Package className="h-5 w-5" /> История заказов
                </button>
                <button 
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'addresses' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <MapPin className="h-5 w-5" /> Адреса
                </button>
                <button 
                  onClick={() => setActiveTab('garage')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'garage' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <CarFront className="h-5 w-5" /> Мой гараж
                </button>
                <button 
                  onClick={() => setActiveTab('saved')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'saved' ? 'bg-red-50 text-red-600' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <Heart className="h-5 w-5" /> Сохраненные товары
                </button>
                <div className="h-px bg-gray-100 my-2 mx-4"></div>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors">
                  <LogOut className="h-5 w-5" /> Выйти
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            
            {activeTab === 'profile' && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Личная информация</h2>
                <form className="space-y-4 max-w-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                      <input type="text" defaultValue="Иван" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Фамилия</label>
                      <input type="text" defaultValue="Иванов" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email адрес</label>
                    <input type="email" defaultValue="ivan@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Номер телефона</label>
                    <input type="tel" defaultValue="+7 (999) 123-45-67" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="pt-4">
                    <Button>Сохранить изменения</Button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Мои адреса</h2>
                  <Button variant="outline" size="sm">Добавить адрес</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-blue-200 bg-blue-50 rounded-lg p-4 relative">
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">Основной</div>
                    <h3 className="font-bold text-gray-900 mb-1">Домашний адрес</h3>
                    <p className="text-sm text-gray-600 mb-4">г. Алматы, ул. Абая, д. 10, кв. 45<br/>050000, Казахстан</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="bg-white">Изменить</Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">Удалить</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'saved' && (
               <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                     <Heart className="w-6 h-6 text-red-500" /> Сохраненные товары
                  </h2>
                  <div className="space-y-4">
                    {savedItems.map((item) => (
                      <div key={item.id} className="border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row gap-4 hover:border-blue-300 transition-colors">
                         <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                         </div>
                         <div className="flex-1 flex flex-col justify-between">
                            <div className="flex justify-between items-start gap-4">
                               <div>
                                 <Link to={`/product/${item.id}`} className="font-bold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                                    {item.name}
                                 </Link>
                                 <div className="text-sm text-gray-500 mt-1">Артикул: {item.sku}</div>
                               </div>
                               <button className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors shrink-0">
                                 <Heart className="w-5 h-5 fill-current" />
                               </button>
                            </div>
                            <div className="flex justify-between items-end mt-4">
                               <div className="font-bold text-lg text-gray-900">{item.price.toLocaleString('ru-KZ')} ₸</div>
                               <Button size="sm" className="flex items-center gap-2">
                                  <ShoppingCart className="w-4 h-4" /> В корзину
                               </Button>
                            </div>
                         </div>
                      </div>
                    ))}
                    {savedItems.length === 0 && (
                       <div className="text-center py-12 text-gray-500">
                          У вас пока нет сохраненных товаров
                       </div>
                    )}
                  </div>
               </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">История заказов</h2>
                <div className="space-y-4">
                  {/* Order Item */}
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-gray-900">Заказ #ORD-123456</span>
                          <Badge variant="success" className="flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Доставлен
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-500">12 апреля 2026 г.</div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-sm text-gray-500 mb-1">Сумма заказа</div>
                        <div className="font-bold text-gray-900">67 500 ₸</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        2 товара (Тормозные колодки, Масло моторное)
                      </div>
                      <Link to="/order/ORD-123456">
                        <Button variant="outline" size="sm">
                          Подробнее <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Order Item */}
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-gray-900">Заказ #ORD-789012</span>
                          <Badge variant="warning" className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> В пути
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-500">14 апреля 2026 г.</div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-sm text-gray-500 mb-1">Сумма заказа</div>
                        <div className="font-bold text-gray-900">27 500 ₸</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        1 товар (Светодиодные лампы H7)
                      </div>
                      <Link to="/order/ORD-789012">
                        <Button variant="outline" size="sm">
                          Подробнее <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'garage' && (
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
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Package, Truck, CheckCircle2, MapPin, Phone, Mail, User } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { mockProducts } from '../data/mockData';

export function OrderDetails() {
  const { id } = useParams();
  const orderItems = mockProducts.slice(0, 2);
  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 2500;
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <Link to="/profile" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium">
            <ArrowLeft className="w-4 h-4 mr-1" /> Вернуться в профиль
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Заказ #{id || 'ORD-123456'}</h1>
            <p className="text-gray-500 mt-1">Оформлен 12 апреля 2026 г.</p>
          </div>
          <Badge variant="success" className="text-sm px-3 py-1 flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" /> Доставлен
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Items List */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                <h2 className="font-bold text-gray-900">Товары в заказе</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {orderItems.map((item) => (
                  <div key={item.id} className="p-4 flex gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg shrink-0 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900 line-clamp-2">{item.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">Артикул: {item.sku}</p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="font-bold text-gray-900">{item.price.toLocaleString('ru-KZ')} ₸</div>
                          <div className="text-sm text-gray-500 mt-1">1 шт.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Сумма товаров</span>
                    <span>{subtotal.toLocaleString('ru-KZ')} ₸</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Доставка</span>
                    <span>{shipping.toLocaleString('ru-KZ')} ₸</span>
                  </div>
                  <div className="pt-2 mt-2 border-t border-gray-200 flex justify-between font-bold text-base text-gray-900">
                    <span>Итого</span>
                    <span>{total.toLocaleString('ru-KZ')} ₸</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Status History */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                <h2 className="font-bold text-gray-900">История статусов</h2>
              </div>
              <div className="p-6">
                <div className="relative border-l-2 border-blue-200 ml-3 space-y-8">
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                    <h3 className="font-bold text-gray-900">Доставлен</h3>
                    <p className="text-sm text-gray-500">14 апреля 2026 г., 14:30</p>
                    <p className="text-sm text-gray-700 mt-1">Заказ успешно доставлен получателю.</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-400 border-4 border-white"></div>
                    <h3 className="font-bold text-gray-900">Передан курьеру</h3>
                    <p className="text-sm text-gray-500">14 апреля 2026 г., 09:15</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-400 border-4 border-white"></div>
                    <h3 className="font-bold text-gray-900">Собран на складе</h3>
                    <p className="text-sm text-gray-500">13 апреля 2026 г., 16:45</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-400 border-4 border-white"></div>
                    <h3 className="font-bold text-gray-900">Заказ оформлен</h3>
                    <p className="text-sm text-gray-500">12 апреля 2026 г., 10:20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Delivery Info */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                <h2 className="font-bold text-gray-900">Информация о доставке</h2>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex gap-3">
                  <Truck className="w-5 h-5 text-gray-400 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Способ доставки</div>
                    <div className="text-sm text-gray-600">Курьерская доставка</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Адрес доставки</div>
                    <div className="text-sm text-gray-600">г. Алматы, ул. Абая, д. 10, кв. 45<br/>050000, Казахстан</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                <h2 className="font-bold text-gray-900">Контактные данные</h2>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex gap-3 items-center">
                  <User className="w-5 h-5 text-gray-400 shrink-0" />
                  <div className="text-sm text-gray-900">Иван Иванов</div>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                  <div className="text-sm text-gray-900">+7 (999) 123-45-67</div>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-gray-400 shrink-0" />
                  <div className="text-sm text-gray-900">ivan@example.com</div>
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full bg-white">Повторить заказ</Button>
              <Button variant="outline" className="w-full bg-white text-red-600 hover:text-red-700 hover:bg-red-50 hover:border-red-200">Отменить заказ</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
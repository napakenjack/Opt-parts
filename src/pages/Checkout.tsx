import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { mockProducts } from '../data/mockData';
import { ShieldCheck, CreditCard, Truck, MapPin } from 'lucide-react';

export function Checkout() {
  const navigate = useNavigate();
  const cartItems = mockProducts.slice(0, 2);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 2500;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    navigate('/order-success');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-8">Оформление заказа</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="flex-1 space-y-6">
            
            {/* Contact Details */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                Контактные данные
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                  <Input required placeholder="Иван" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Фамилия</label>
                  <Input required placeholder="Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input required type="email" placeholder="ivan@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                  <Input required type="tel" placeholder="+7 (999) 000-00-00" />
                </div>
              </div>
            </div>

            {/* Delivery Method */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                Способ получения
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <label className="border border-blue-500 bg-blue-50 rounded-lg p-4 cursor-pointer flex items-start gap-3">
                  <input type="radio" name="deliveryMethod" className="mt-1 text-blue-600 focus:ring-blue-500" defaultChecked />
                  <div>
                    <div className="font-bold text-gray-900 flex items-center gap-2">
                      <Truck className="h-4 w-4" /> Доставка курьером
                    </div>
                    <div className="text-sm text-gray-600 mt-1">1-2 рабочих дня</div>
                    <div className="text-sm font-medium text-gray-900 mt-1">2500 ₸</div>
                  </div>
                </label>
                <label className="border border-gray-200 hover:border-blue-300 rounded-lg p-4 cursor-pointer flex items-start gap-3 transition-colors">
                  <input type="radio" name="deliveryMethod" className="mt-1 text-blue-600 focus:ring-blue-500" />
                  <div>
                    <div className="font-bold text-gray-900 flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> Самовывоз
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Сегодня из магазина</div>
                    <div className="text-sm font-medium text-green-600 mt-1">Бесплатно</div>
                  </div>
                </label>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Город</label>
                  <Input required placeholder="Москва" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Адрес доставки</label>
                  <Input required placeholder="ул. Примерная, д. 1, кв. 1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Комментарий к заказу (необязательно)</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    rows={3}
                    placeholder="Уточнения для курьера..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
                Оплата
              </h2>
              <div className="space-y-3">
                <label className="border border-gray-200 rounded-lg p-4 cursor-pointer flex items-center gap-3">
                  <input type="radio" name="paymentMethod" className="text-blue-600 focus:ring-blue-500" defaultChecked />
                  <CreditCard className="h-5 w-5 text-gray-500" />
                  <span className="font-medium text-gray-900">Банковская карта онлайн</span>
                </label>
                <label className="border border-gray-200 rounded-lg p-4 cursor-pointer flex items-center gap-3">
                  <input type="radio" name="paymentMethod" className="text-blue-600 focus:ring-blue-500" />
                  <span className="font-medium text-gray-900">Оплата при получении</span>
                </label>
              </div>
            </div>

          </div>
          
          {/* Order Summary */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-20">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Ваш заказ</h2>
              
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 shrink-0 bg-gray-50 border border-gray-100 rounded p-1">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 text-sm">
                      <div className="font-medium text-gray-900 line-clamp-2">{item.name}</div>
                      <div className="text-gray-500 mt-1">1 шт.</div>
                    </div>
                    <div className="font-bold text-gray-900">{item.price.toLocaleString('ru-KZ')} ₸</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 text-sm mb-6 border-t border-gray-100 pt-4">
                <div className="flex justify-between text-gray-600">
                  <span>Сумма ({cartItems.length} товаров)</span>
                  <span className="font-medium text-gray-900">{subtotal.toLocaleString('ru-KZ')} ₸</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Доставка</span>
                  <span className="font-medium text-gray-900">{shipping.toLocaleString('ru-KZ')} ₸</span>
                </div>
                <div className="h-px bg-gray-100 my-4"></div>
                <div className="flex justify-between text-base font-bold text-gray-900">
                  <span>К оплате</span>
                  <span>{total.toLocaleString('ru-KZ')} ₸</span>
                </div>
              </div>
              
              <Button type="submit" className="w-full h-12 text-lg mb-4">
                Подтвердить заказ
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-6">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span>Безопасная оплата</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

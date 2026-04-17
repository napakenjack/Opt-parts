import { Link } from 'react-router-dom';
import { mockProducts } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { Trash2, ArrowRight, ShieldCheck } from 'lucide-react';

export function Cart() {
  const cartItems = mockProducts.slice(0, 2);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 2500;
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-8">Корзина</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-500">
                <div className="col-span-6">Товар</div>
                <div className="col-span-2 text-center">Цена</div>
                <div className="col-span-2 text-center">Количество</div>
                <div className="col-span-2 text-right">Итого</div>
              </div>
              
              <div className="divide-y divide-gray-100">
                {cartItems.map(item => (
                  <div key={item.id} className="p-4 md:p-6 flex flex-col md:grid md:grid-cols-12 gap-4 items-center">
                    <div className="col-span-6 flex items-center gap-4 w-full">
                      <div className="w-20 h-20 shrink-0 bg-white border border-gray-100 rounded-lg p-2 flex items-center justify-center">
                        <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-blue-600 uppercase">{item.brand}</span>
                        <Link to={`/product/${item.id}`} className="block font-medium text-gray-900 hover:text-blue-600 line-clamp-2 mt-1">
                          {item.name}
                        </Link>
                        <span className="text-xs text-gray-500 font-mono mt-1 block">SKU: {item.sku}</span>
                      </div>
                    </div>
                    
                    <div className="col-span-2 text-center w-full md:w-auto flex justify-between md:block">
                      <span className="md:hidden text-gray-500">Цена:</span>
                      <span className="font-medium text-gray-900">{item.price.toLocaleString('ru-KZ')} ₸</span>
                    </div>
                    
                    <div className="col-span-2 flex justify-center w-full md:w-auto">
                      <div className="flex items-center border border-gray-300 rounded-md bg-white">
                        <button className="w-8 h-8 text-gray-500 hover:text-gray-900">-</button>
                        <input type="text" value="1" readOnly className="w-8 h-8 text-center border-x border-gray-300 text-sm font-medium" />
                        <button className="w-8 h-8 text-gray-500 hover:text-gray-900">+</button>
                      </div>
                    </div>
                    
                    <div className="col-span-2 flex items-center justify-between md:justify-end w-full md:w-auto">
                      <span className="md:hidden text-gray-500">Итого:</span>
                      <span className="font-bold text-gray-900 mr-4">{item.price.toLocaleString('ru-KZ')} ₸</span>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <Link to="/catalog">
                <Button variant="outline">&larr; Продолжить покупки</Button>
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-20">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Ваш заказ</h2>
              
              <div className="space-y-4 text-sm mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Сумма ({cartItems.length} товаров)</span>
                  <span className="font-medium text-gray-900">{subtotal.toLocaleString('ru-KZ')} ₸</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Доставка</span>
                  <span className="font-medium text-gray-900">{shipping.toLocaleString('ru-KZ')} ₸</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Налоги</span>
                  <span className="font-medium text-gray-900">Рассчитывается при оформлении</span>
                </div>
                <div className="h-px bg-gray-100 my-4"></div>
                <div className="flex justify-between text-base font-bold text-gray-900">
                  <span>Итого</span>
                  <span>{total.toLocaleString('ru-KZ')} ₸</span>
                </div>
              </div>
              
              <Link to="/checkout" className="block">
                <Button className="w-full h-12 text-lg mb-4">
                  Оформить заказ <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-6">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span>Безопасное оформление</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

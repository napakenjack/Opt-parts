import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { CheckCircle2, Package, ArrowRight } from 'lucide-react';

export function OrderSuccess() {
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="bg-gray-50 min-h-screen py-12 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 text-center shadow-sm">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
            Заказ успешно оформлен!
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Спасибо за покупку. Мы отправили подтверждение на ваш email.
          </p>
          
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 mb-8 text-left">
            <div className="flex items-center gap-3 mb-4 border-b border-gray-200 pb-4">
              <Package className="h-6 w-6 text-blue-600" />
              <div>
                <div className="text-sm text-gray-500">Номер заказа</div>
                <div className="font-bold text-gray-900 text-lg">{orderNumber}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-500 mb-1">Дата заказа</div>
                <div className="font-medium text-gray-900">{new Date().toLocaleDateString('ru-RU')}</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Способ получения</div>
                <div className="font-medium text-gray-900">Доставка курьером</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Ожидаемая дата</div>
                <div className="font-medium text-gray-900">Через 1-2 дня</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Итоговая сумма</div>
                <div className="font-medium text-gray-900 font-bold">70 000 ₸</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/profile">
              <Button variant="outline" className="w-full sm:w-auto h-12 px-8">
                В личный кабинет
              </Button>
            </Link>
            <Link to="/catalog">
              <Button className="w-full sm:w-auto h-12 px-8">
                Продолжить покупки <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

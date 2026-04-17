import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Edit } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

export function AdminOrderDetails() {
  const { id } = useParams();

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link to="/admin/orders" className="text-gray-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Заказ {id || 'ORD-555555'}
            </h1>
            <p className="text-gray-500 text-sm mt-1">От 15 апреля 2026</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <select className="px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500">
            <option>Новый</option>
            <option>В работе</option>
            <option>Ожидает оплаты</option>
            <option>Сборка</option>
            <option>В пути</option>
            <option>Доставлен</option>
            <option value="cancel">Отменен</option>
          </select>
          <Button variant="outline">Распечатать накладную</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-0 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
              <h2 className="font-bold text-gray-900">Товары</h2>
              <Badge variant="default">2 позиции</Badge>
            </div>
            <div className="p-4 flex gap-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-gray-100 rounded-lg shrink-0 overflow-hidden">
                <img src="https://picsum.photos/seed/brakes/400/400" alt="Brakes" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">Комплект керамических тормозных колодок</h3>
                    <p className="text-sm text-gray-500 mt-1">Артикул: BP-CER-992 • Поставщик: ROSSKO</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">45 000 ₸</div>
                    <div className="text-sm text-gray-500 mt-1">1 шт.</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 flex gap-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-gray-100 rounded-lg shrink-0 overflow-hidden">
                <img src="https://picsum.photos/seed/oil/400/400" alt="Oil" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">Синтетическое моторное масло 5W-30 5Л</h3>
                    <p className="text-sm text-gray-500 mt-1">Артикул: OIL-5W30-5L • Поставщик: Автотрейд</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">22 750 ₸</div>
                    <div className="text-sm text-gray-500 mt-1">1 шт.</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Комментарий маркетолога/менеджера</h2>
            <textarea 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]" 
              placeholder="Внутренние заметки к заказу..."
            />
            <div className="mt-3 text-right">
              <Button size="sm" variant="outline">Сохранить комментарий</Button>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex justify-between items-center">
              Клиент
              <button className="text-blue-600 hover:text-blue-800"><Edit className="w-4 h-4" /></button>
            </h2>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-500">ФИО</div>
                <div className="font-medium text-gray-900">Иван Иванов</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Телефон</div>
                <div className="font-medium text-gray-900">+7 (999) 123-4567</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-medium text-gray-900">ivan@example.com</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
             <h2 className="text-lg font-bold text-gray-900 mb-4 flex justify-between items-center">
              Доставка
              <button className="text-blue-600 hover:text-blue-800"><Edit className="w-4 h-4" /></button>
            </h2>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-500">Способ доставки</div>
                <div className="font-medium text-gray-900">Курьерская доставка</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Адрес</div>
                <div className="font-medium text-gray-900">г. Алматы, ул. Абая, д. 10, кв. 45<br/>050000, Казахстан</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gray-50 border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Сводка</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Товары</span>
                <span>67 750 ₸</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Доставка</span>
                <span>2 500 ₸</span>
              </div>
              <div className="pt-2 mt-2 border-t border-gray-200 flex justify-between font-bold text-base text-gray-900">
                <span>Итого</span>
                <span>70 250 ₸</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

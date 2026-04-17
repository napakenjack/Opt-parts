import { Link } from 'react-router-dom';
import { Search, Filter, Eye } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';

export function AdminOrders() {
  const orders = [
    { id: 'ORD-123456', date: '12 апр. 2026', total: '67500', customer: 'Иван Иванов', phone: '+7 (999) 123-4567', status: 'Доставлен' },
    { id: 'ORD-789012', date: '14 апр. 2026', total: '27500', customer: 'Иван Иванов', phone: '+7 (999) 123-4567', status: 'В пути' },
    { id: 'ORD-555555', date: '15 апр. 2026', total: '142000', customer: 'Алексей Смирнов', phone: '+7 (777) 111-2233', status: 'Новый' },
    { id: 'ORD-999888', date: '16 апр. 2026', total: '12500', customer: 'Мария К.', phone: '+7 (701) 555-4433', status: 'Отменен' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Заказы</h1>
      
      <Card className="p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input className="pl-10 w-full" placeholder="Поиск по номеру заказа, клиенту или телефону..." />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option>Статус: Все</option>
              <option>Новый</option>
              <option>В работе</option>
              <option>В пути</option>
              <option>Доставлен</option>
              <option>Отменен</option>
            </select>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" /> Фильтры
            </Button>
          </div>
        </div>
      </Card>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm">
                <th className="px-6 py-4 font-medium text-gray-700">№ Заказа</th>
                <th className="px-6 py-4 font-medium text-gray-700">Дата</th>
                <th className="px-6 py-4 font-medium text-gray-700">Клиент</th>
                <th className="px-6 py-4 font-medium text-gray-700">Сумма</th>
                <th className="px-6 py-4 font-medium text-gray-700">Статус</th>
                <th className="px-6 py-4 font-medium text-gray-700 text-right">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => {
                let badgeVariant: 'success' | 'warning' | 'destructive' | 'default' = 'default';
                if (order.status === 'Доставлен') badgeVariant = 'success';
                else if (order.status === 'В пути') badgeVariant = 'warning';
                else if (order.status === 'Новый') badgeVariant = 'default'; // blue-ish ideally
                else if (order.status === 'Отменен') badgeVariant = 'destructive';

                return (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 text-gray-600">{order.date}</td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{order.customer}</div>
                      <div className="text-sm text-gray-500">{order.phone}</div>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900">{parseInt(order.total).toLocaleString('ru-KZ')} ₸</td>
                    <td className="px-6 py-4">
                      <Badge variant={badgeVariant}>{order.status}</Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link to={`/admin/orders/${order.id}`}>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Eye className="w-4 h-4" /> Детали
                        </Button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

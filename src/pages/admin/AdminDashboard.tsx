import { Users, ShoppingCart, Activity, AlertTriangle } from 'lucide-react';
import { Card } from '../../components/ui/Card';

export function AdminDashboard() {
  const stats = [
    { title: 'Новых заказов', value: '24', icon: ShoppingCart, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Ошибок API', value: '3', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-100' },
    { title: 'Активных поставщиков', value: '12', icon: Users, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Событий в очереди', value: '45', icon: Activity, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Дашборд</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">{stat.title}</div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Статистика заказов</h2>
          <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-dashed border-gray-200">
            <span className="text-gray-400">График заказов (D3.js or Recharts placeholder)</span>
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Ошибки интеграции</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">Ошибка подключения к поставщику ROSSKO</div>
                  <div className="text-sm text-gray-500 mt-1">Таймаут соединения. Последняя попытка: 5 минут назад</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

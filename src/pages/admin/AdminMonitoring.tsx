import { Activity, AlertTriangle, RefreshCw, XCircle } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export function AdminMonitoring() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Мониторинг интеграций</h1>
          <p className="text-gray-500 text-sm mt-1">Отслеживание состояния API и очередей</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <RefreshCw className="w-4 h-4" /> Обновить данные
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-sm font-medium text-green-800">Успешность ответов API</div>
              <div className="text-3xl font-bold text-green-600 mt-2">99.8%</div>
            </div>
            <div className="p-2 bg-green-200 rounded-lg text-green-700">
              <Activity className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-sm font-medium text-blue-800">Задач в очереди</div>
              <div className="text-3xl font-bold text-blue-600 mt-2">14</div>
            </div>
            <div className="p-2 bg-blue-200 rounded-lg text-blue-700">
              <RefreshCw className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-sm font-medium text-red-800">Ошибок (24ч)</div>
              <div className="text-3xl font-bold text-red-600 mt-2">127</div>
            </div>
            <div className="p-2 bg-red-200 rounded-lg text-red-700">
              <XCircle className="w-6 h-6" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Журнал ошибок API</h2>
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-3 p-3 bg-red-50/50 border border-red-100 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Timeout Exception (Armtek API)</div>
                  <div className="text-sm text-gray-600 mt-1">Не удалось получить прайс-лист для артикула BP-CER-992. Ответ не получен за 5000ms.</div>
                  <div className="text-xs text-gray-400 mt-2">{new Date().toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Статус очереди (Queue)</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
               <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-200 text-sm">
                    <tr>
                      <th className="px-4 py-2 font-medium text-gray-700">Тип задачи</th>
                      <th className="px-4 py-2 font-medium text-gray-700 text-center">В ожидании</th>
                      <th className="px-4 py-2 font-medium text-gray-700 text-center">Провалено (Retry)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    <tr>
                      <td className="px-4 py-3 font-medium">Синхронизация заказов</td>
                      <td className="px-4 py-3 text-center text-blue-600 font-medium">12</td>
                      <td className="px-4 py-3 text-center text-red-600 font-medium">0</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Обновление остатков</td>
                      <td className="px-4 py-3 text-center text-blue-600 font-medium">2</td>
                      <td className="px-4 py-3 text-center text-red-600 font-medium">3</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Отправка Email</td>
                      <td className="px-4 py-3 text-center text-blue-600 font-medium">0</td>
                      <td className="px-4 py-3 text-center text-red-600 font-medium">0</td>
                    </tr>
                  </tbody>
               </table>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex-1">Перезапустить упавшие</Button>
              <Button size="sm" variant="outline" className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50 hover:border-red-200">Очистить очередь</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

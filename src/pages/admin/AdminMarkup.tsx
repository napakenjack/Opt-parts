import { Save } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';

export function AdminMarkup() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Управление наценкой</h1>
        <Button className="flex items-center gap-2">
          <Save className="w-4 h-4" /> Сохранить изменения
        </Button>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Глобальная наценка</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Базовая наценка (%)</label>
              <Input type="number" defaultValue="25" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Минимальная маржа (₸)</label>
              <Input type="number" defaultValue="1500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Правила округления (₸)</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option>Округлять до 100 ₸</option>
                <option>Округлять до 10 ₸</option>
                <option>Округлять до 500 ₸</option>
                <option>Без округления</option>
              </select>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Наценка по поставщикам</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm">
                <th className="px-4 py-3 font-medium text-gray-700">Поставщик</th>
                <th className="px-4 py-3 font-medium text-gray-700">Наценка (%)</th>
                <th className="px-4 py-3 font-medium text-gray-700">Тип наценки</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {['ROSSKO', 'Armtek', 'Автотрейд'].map((name, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 font-medium text-gray-900">{name}</td>
                  <td className="px-4 py-3">
                    <Input type="number" defaultValue="20" className="w-24" />
                  </td>
                  <td className="px-4 py-3">
                    <select className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm">
                      <option>Добавочная (+ к базовой)</option>
                      <option>Замещающая (вместо базовой)</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Наценка по брендам (исключения)</h2>
          <table className="w-full text-left border-collapse mb-4">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm">
                <th className="px-4 py-3 font-medium text-gray-700">Бренд</th>
                <th className="px-4 py-3 font-medium text-gray-700">Наценка (%)</th>
                <th className="px-4 py-3 font-medium text-gray-700 text-right">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Brembo</td>
                <td className="px-4 py-3">
                  <Input type="number" defaultValue="15" className="w-24" />
                </td>
                <td className="px-4 py-3 text-right">
                  <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">Удалить</Button>
                </td>
              </tr>
            </tbody>
          </table>
          <Button variant="outline" size="sm">Добавить правило для бренда</Button>
        </Card>
      </div>
    </div>
  );
}

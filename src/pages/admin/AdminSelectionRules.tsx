import { Save } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

export function AdminSelectionRules() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Правила выдачи предложений</h1>
        <Button className="flex items-center gap-2">
          <Save className="w-4 h-4" /> Сохранить изменения
        </Button>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Приоритеты отображения</h2>
          <p className="text-sm text-gray-500 mb-6">Настройте алгоритм сортировки предложений для пользователя на странице товара.</p>
          
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <div>
                <div className="font-bold text-gray-900">Минимальная цена</div>
                <div className="text-sm text-gray-500">Предложения с наименьшей ценой показываются выше</div>
              </div>
              <input type="number" defaultValue="1" min="1" max="5" className="w-16 px-3 py-2 border border-gray-300 rounded-md text-center" />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <div>
                <div className="font-bold text-gray-900">Быстрая доставка</div>
                <div className="text-sm text-gray-500">Предложения с наименьшим сроком доставки показываются выше</div>
              </div>
              <input type="number" defaultValue="2" min="1" max="5" className="w-16 px-3 py-2 border border-gray-300 rounded-md text-center" />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <div>
                <div className="font-bold text-gray-900">Приоритет локальных складов</div>
                <div className="text-sm text-gray-500">Товары в наличии на собственных складах показываются выше остальных</div>
              </div>
              <input type="number" defaultValue="3" min="1" max="5" className="w-16 px-3 py-2 border border-gray-300 rounded-md text-center" />
            </div>
            
            <p className="text-xs text-gray-500 mt-2">* 1 — Наивысший приоритет, 5 — наименьший. При совпадении критериев учитывается следующий по приоритету.</p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Комбинированные условия отсева</h2>
          
          <div className="space-y-4 mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="mt-1 border-gray-300 text-blue-600 focus:ring-blue-500 rounded" />
              <div>
                <span className="block text-sm font-medium text-gray-900">Скрывать предложения со сроком доставки более 14 дней</span>
                <span className="block text-sm text-gray-500">Товары, которые идут слишком долго, не будут показываться в выдаче.</span>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="mt-1 border-gray-300 text-blue-600 focus:ring-blue-500 rounded" />
              <div>
                <span className="block text-sm font-medium text-gray-900">Объединять идентичные товары</span>
                <span className="block text-sm text-gray-500">Показывать только лучшее предложение (по цене/вероятности выдачи) от одного поставщика для одного кросс номера.</span>
              </div>
            </label>
            
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1 border-gray-300 text-blue-600 focus:ring-blue-500 rounded" />
              <div>
                <span className="block text-sm font-medium text-gray-900">Строгое совпадение бренда</span>
                <span className="block text-sm text-gray-500">Скрывать неявные аналоги и кроссы, показывать только запрошенный бренд.</span>
              </div>
            </label>
          </div>
        </Card>
      </div>
    </div>
  );
}

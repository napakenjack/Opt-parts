import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';

export function AdminSupplierEdit() {
  const { id } = useParams();
  const isNew = id === 'new';

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/admin/suppliers" className="text-gray-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            {isNew ? 'Добавление поставщика' : 'Настройка поставщика (ROSSKO)'}
          </h1>
        </div>
        <Button className="flex items-center gap-2">
          <Save className="w-4 h-4" /> Сохранить
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Основные настройки</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Название поставщика</label>
                <Input defaultValue={!isNew ? 'ROSSKO' : ''} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">API URL</label>
                <Input defaultValue={!isNew ? 'https://api.rossko.ru/v1/' : ''} placeholder="https://api.example.com/" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">API Key 1</label>
                  <Input type="password" defaultValue={!isNew ? 'xxxxxxxxxxxx' : ''} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">API Key 2 (опционально)</label>
                  <Input type="password" defaultValue={!isNew ? 'yyyyyyyyyyyy' : ''} />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Настройки соединения и очереди</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Макс. запросов в сек. (RPS)</label>
                <Input type="number" defaultValue="10" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Таймаут (ms)</label>
                <Input type="number" defaultValue="3000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Политика Retry (попытки)</label>
                <Input type="number" defaultValue="3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Задержка между Retry (ms)</label>
                <Input type="number" defaultValue="500" />
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Статус</h2>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-700 font-medium">Активность интеграции</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked={!isNew} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <p className="text-sm text-gray-500">
              Если интеграция отключена, товары этого поставщика не будут отображаться в поиске и на сайте.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

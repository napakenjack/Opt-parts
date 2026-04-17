import { Link } from 'react-router-dom';
import { Edit, Plus, Server, Power, PowerOff } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';

export function AdminSuppliers() {
  const suppliers = [
    { id: '1', name: 'ROSSKO', items: '2.4M', active: true, errorRate: '0.1%', ping: '45ms' },
    { id: '2', name: 'Armtek', items: '1.8M', active: true, errorRate: '0.5%', ping: '120ms' },
    { id: '3', name: 'Emex', items: '5.1M', active: false, errorRate: '15.0%', ping: '400ms' },
    { id: '4', name: 'Автотрейд', items: '800K', active: true, errorRate: '0.0%', ping: '20ms' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Поставщики</h1>
        <Link to="/admin/suppliers/new">
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" /> Добавить
          </Button>
        </Link>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm">
                <th className="px-6 py-4 font-medium text-gray-700">Название</th>
                <th className="px-6 py-4 font-medium text-gray-700">Статус</th>
                <th className="px-6 py-4 font-medium text-gray-700">Товаров (прибл.)</th>
                <th className="px-6 py-4 font-medium text-gray-700">Ошибок API</th>
                <th className="px-6 py-4 font-medium text-gray-700">Пинг</th>
                <th className="px-6 py-4 font-medium text-gray-700 text-right">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {suppliers.map((supplier) => (
                <tr key={supplier.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <Server className="w-5 h-5 text-gray-600" />
                      </div>
                      <span className="font-bold text-gray-900">{supplier.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {supplier.active ? (
                      <Badge variant="success" className="flex w-fit items-center gap-1">
                        <Power className="w-3 h-3" /> Активен
                      </Badge>
                    ) : (
                      <Badge variant="destructive" className="flex w-fit items-center gap-1">
                        <PowerOff className="w-3 h-3" /> Отключен
                      </Badge>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{supplier.items}</td>
                  <td className="px-6 py-4">
                    <span className={parseFloat(supplier.errorRate) > 5 ? 'text-red-600 font-medium' : 'text-gray-600'}>
                      {supplier.errorRate}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{supplier.ping}</td>
                  <td className="px-6 py-4 text-right">
                    <Link to={`/admin/suppliers/${supplier.id}`}>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Edit className="w-4 h-4" /> Настроить
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

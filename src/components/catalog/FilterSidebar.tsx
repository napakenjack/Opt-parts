import { mockBrands, mockCategories } from '../../data/mockData';
import { Button } from '../ui/Button';

export function FilterSidebar() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-gray-900">Фильтры</h3>
        <button className="text-xs text-blue-600 hover:underline">Очистить все</button>
      </div>
      
      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Категория</h4>
          <div className="space-y-2">
            {mockCategories.map((category) => (
              <label key={category} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-600 group-hover:text-gray-900">{category}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="h-px bg-gray-100"></div>
        
        {/* Brands */}
        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Марка</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
            {mockBrands.map((brand) => (
              <label key={brand.id} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-600 group-hover:text-gray-900">{brand.name}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="h-px bg-gray-100"></div>
        
        {/* Price Range */}
        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Цена</h4>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
              <input type="number" placeholder="От" className="w-full pl-6 pr-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
            <span className="text-gray-400">-</span>
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
              <input type="number" placeholder="До" className="w-full pl-6 pr-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
          </div>
        </div>
        
        <div className="h-px bg-gray-100"></div>
        
        {/* Availability */}
        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Наличие</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">Только в наличии</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">Быстрая доставка (1-2 дня)</span>
            </label>
          </div>
        </div>
        
        <Button className="w-full">Применить фильтры</Button>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { mockBrands } from '../../data/mockData';
import { Button } from '../ui/Button';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

interface FilterSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function FilterSidebar({ isOpen = false, onClose }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    car: true,
    brand: true,
    price: true,
    availability: true,
    supplier: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const suppliers = [
    { name: 'ROSSKO', count: 124 },
    { name: 'Автотрейд', count: 89 },
    { name: 'Armtek', count: 56 },
    { name: 'Шате-М', count: 42 },
  ];

  const sidebarContent = (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <h3 className="font-bold text-gray-900 text-lg">Фильтры</h3>
        <div className="flex items-center gap-2">
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">Очистить</button>
          {onClose && (
            <button onClick={onClose} className="md:hidden p-1 text-gray-500 hover:bg-gray-100 rounded-md">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
      
      <div className="space-y-2 flex-1 overflow-y-auto custom-scrollbar pr-2">
        {/* Car Selection */}
        <div className="border border-gray-100 rounded-lg overflow-hidden">
          <button 
            onClick={() => toggleSection('car')}
            className="w-full flex items-center justify-between p-3 bg-gray-50/50 hover:bg-gray-100/50 transition-colors"
          >
            <h4 className="font-semibold text-sm text-gray-900">Автомобиль</h4>
            {expandedSections.car ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
          </button>
          {expandedSections.car && (
            <div className="p-3 pt-1 space-y-3 bg-white">
              <select className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-700">
                <option value="">Марка</option>
                <option value="toyota">Toyota</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes-Benz</option>
              </select>
              <select className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-700" disabled>
                <option value="">Модель</option>
              </select>
              <select className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-700" disabled>
                <option value="">Поколение</option>
              </select>
              <select className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-700" disabled>
                <option value="">Двигатель</option>
              </select>
            </div>
          )}
        </div>

        {/* Categories / Brands (Product Brand) */}
        <div className="border border-gray-100 rounded-lg overflow-hidden">
          <button 
            onClick={() => toggleSection('brand')}
            className="w-full flex items-center justify-between p-3 bg-gray-50/50 hover:bg-gray-100/50 transition-colors"
          >
            <h4 className="font-semibold text-sm text-gray-900">Бренд запчасти</h4>
            {expandedSections.brand ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
          </button>
          {expandedSections.brand && (
            <div className="p-3 pt-1 bg-white">
              <div className="mb-3">
                <input type="text" placeholder="Поиск бренда..." className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-1.5 px-3" />
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                {mockBrands.map((brand, i) => (
                  <label key={brand.id} className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 truncate max-w-[120px]">{brand.name}</span>
                    </div>
                    <span className="text-xs text-gray-400">{Math.floor(Math.random() * 50) + 1}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Price Range */}
        <div className="border border-gray-100 rounded-lg overflow-hidden">
          <button 
            onClick={() => toggleSection('price')}
            className="w-full flex items-center justify-between p-3 bg-gray-50/50 hover:bg-gray-100/50 transition-colors"
          >
            <h4 className="font-semibold text-sm text-gray-900">Цена, ₸</h4>
            {expandedSections.price ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
          </button>
          {expandedSections.price && (
            <div className="p-3 pt-1 bg-white flex items-center gap-2">
              <input type="number" placeholder="От" className="w-full text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 py-1.5 px-2" />
              <span className="text-gray-400">-</span>
              <input type="number" placeholder="До" className="w-full text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 py-1.5 px-2" />
            </div>
          )}
        </div>
        
        {/* Availability */}
        <div className="border border-gray-100 rounded-lg overflow-hidden">
          <button 
            onClick={() => toggleSection('availability')}
            className="w-full flex items-center justify-between p-3 bg-gray-50/50 hover:bg-gray-100/50 transition-colors"
          >
            <h4 className="font-semibold text-sm text-gray-900">Наличие и доставка</h4>
            {expandedSections.availability ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
          </button>
          {expandedSections.availability && (
            <div className="p-3 pt-1 bg-white space-y-2">
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">В наличии на складе</span>
                </div>
                <span className="text-xs text-gray-400">24</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="delivery" className="border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Любой срок</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="delivery" className="border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">До 2 дней</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="delivery" className="border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">До 5 дней</span>
              </label>
            </div>
          )}
        </div>

        {/* Suppliers */}
        <div className="border border-gray-100 rounded-lg overflow-hidden">
          <button 
            onClick={() => toggleSection('supplier')}
            className="w-full flex items-center justify-between p-3 bg-gray-50/50 hover:bg-gray-100/50 transition-colors"
          >
            <h4 className="font-semibold text-sm text-gray-900">Поставщик</h4>
            {expandedSections.supplier ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
          </button>
          {expandedSections.supplier && (
            <div className="p-3 pt-1 bg-white space-y-2">
              {suppliers.map((s, i) => (
                <label key={i} className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">{s.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">{s.count}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="pt-4 mt-2 border-t border-gray-100">
        <Button className="w-full font-medium">Показать 145 товаров</Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 shrink-0 sticky top-20 h-[calc(100vh-100px)]">
        {sidebarContent}
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} />
          <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl ml-auto flex flex-col transform transition-transform">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}

import { FilterSidebar } from '../components/catalog/FilterSidebar';
import { ProductCard } from '../components/catalog/ProductCard';
import { mockProducts } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export function Catalog() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-6">
          <span className="hover:text-blue-600 cursor-pointer">Главная</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Каталог</span>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Каталог автозапчастей</h1>
            <p className="text-gray-500 mt-1">Показано {mockProducts.length} результатов</p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button variant="outline" className="md:hidden flex-1">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Фильтры
            </Button>
            
            <div className="relative flex-1 md:w-48">
              <select className="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-4 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium">
                <option>Сначала популярные</option>
                <option>Сначала дешевые</option>
                <option>Сначала дорогие</option>
                <option>Новинки</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="hidden md:block w-64 shrink-0">
            <FilterSidebar />
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-1">
                <Button variant="outline" disabled>Назад</Button>
                <Button variant="default" className="w-10">1</Button>
                <Button variant="ghost" className="w-10">2</Button>
                <Button variant="ghost" className="w-10">3</Button>
                <span className="px-2 text-gray-400">...</span>
                <Button variant="ghost" className="w-10">8</Button>
                <Button variant="outline">Вперед</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

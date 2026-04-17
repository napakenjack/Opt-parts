import { useState, useMemo } from 'react';
import { FilterSidebar } from '../components/catalog/FilterSidebar';
import { ProductCard } from '../components/catalog/ProductCard';
import { mockProducts } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { SlidersHorizontal, ChevronDown, Search } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export function Catalog() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Smart Search filtering
  const filteredProducts = useMemo(() => {
    let result = mockProducts;
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().replace(/[\s-]/g, '');
      result = result.filter(p => {
        const matchName = p.name.toLowerCase().replace(/[\s-]/g, '').includes(query);
        const matchBrand = p.brand.toLowerCase().replace(/[\s-]/g, '').includes(query);
        const matchSku = p.sku.toLowerCase().replace(/[\s-]/g, '').includes(query);
        return matchName || matchBrand || matchSku;
      });
    }
    return result;
  }, [searchQuery]);

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
        
        {/* Smart Search Bar for Catalog */}
        <div className="mb-8">
          <div className="relative max-w-3xl">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input 
              type="text" 
              placeholder="Умный поиск внутри категории по артикулу, бренду или названию..." 
              className="w-full pl-10 h-14 text-base bg-white border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-shadow"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-24 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-gray-600"
              >
                Очистить
              </button>
            )}
            <Button className="absolute right-1.5 top-1.5 bottom-1.5 h-auto px-6 whitespace-nowrap hidden sm:flex">Найти</Button>
            <Button className="absolute right-1.5 top-1.5 bottom-1.5 px-3 sm:hidden shadow-none border-0">
               <Search className="w-5 h-5" />
            </Button>
          </div>
          {searchQuery && (
             <div className="mt-2 text-sm text-gray-500">
               Показано {filteredProducts.length} результатов по запросу "{searchQuery}"
             </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="hidden md:block">
            <p className="text-gray-500 text-sm font-medium">Товаров в категории: <span className="text-gray-900">145</span></p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button 
              variant="outline" 
              className="md:hidden flex-1 bg-white border-gray-300"
              onClick={() => setIsMobileFilterOpen(true)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Фильтры
            </Button>
            
            <div className="relative flex-1 md:w-56 shrink-0">
              <select className="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2.5 pl-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium">
                <option>Сначала популярные</option>
                <option>Сначала дешевые</option>
                <option>Сначала дорогие</option>
                <option>Новинки</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 relative items-start">
          {/* Sidebar */}
          <FilterSidebar 
            isOpen={isMobileFilterOpen} 
            onClose={() => setIsMobileFilterOpen(false)} 
          />
          
          {/* Product Grid */}
          <div className="flex-1 w-full">
            {filteredProducts.length > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                 {filteredProducts.map(product => (
                   <ProductCard key={product.id} product={product} />
                 ))}
               </div>
            ) : (
               <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Ничего не найдено</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Увы, по вашему запросу "{searchQuery}" нет подходящих деталей в этой категории. Попробуйте изменить запрос или очистить фильтры.
                  </p>
                  <Button variant="outline" className="mt-6" onClick={() => setSearchQuery('')}>Сбросить поиск</Button>
               </div>
            )}
            
            {/* Pagination */}
            {filteredProducts.length > 0 && (
               <div className="mt-12 flex justify-center">
                 <div className="flex items-center gap-1 sm:gap-2">
                   <Button variant="outline" disabled className="hidden sm:flex">Назад</Button>
                   <Button variant="default" className="w-10 h-10 p-0 text-sm">1</Button>
                   <Button variant="ghost" className="w-10 h-10 p-0 text-sm">2</Button>
                   <Button variant="ghost" className="w-10 h-10 p-0 text-sm">3</Button>
                   <span className="px-2 text-gray-400">...</span>
                   <Button variant="ghost" className="w-10 h-10 p-0 text-sm">8</Button>
                   <Button variant="outline" className="hidden sm:flex">Вперед</Button>
                 </div>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

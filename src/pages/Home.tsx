import { Hero } from '../components/home/Hero';
import { BrandSelector } from '../components/home/BrandSelector';
import { ProductCard } from '../components/catalog/ProductCard';
import { mockProducts, mockCategories } from '../data/mockData';
import { Shield, Truck, RotateCcw, HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <BrandSelector />
      
      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Популярные категории</h2>
              <p className="text-gray-500 mt-1">Поиск запчастей по системам</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockCategories.slice(0, 8).map((category, index) => (
              <Link 
                key={category} 
                to={`/catalog?category=${category}`}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-6 hover:border-blue-500 hover:shadow-md transition-all"
              >
                <div className="relative z-10">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{category}</h3>
                  <span className="text-sm text-gray-500 mt-1 block">Смотреть запчасти &rarr;</span>
                </div>
                {/* Abstract shape for visual interest */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Рекомендуемые товары</h2>
              <p className="text-gray-500 mt-1">Лучшие запчасти и аксессуары</p>
            </div>
            <Link to="/catalog" className="text-blue-600 hover:text-blue-800 font-medium text-sm hidden sm:block">
              Все товары &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Оригинальные запчасти</h3>
              <p className="text-sm text-gray-500">100% подлинные автозапчасти от проверенных производителей.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Быстрая доставка</h3>
              <p className="text-sm text-gray-500">Доставка на следующий день для более чем 100 000 товаров.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <RotateCcw className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Простой возврат</h3>
              <p className="text-sm text-gray-500">30 дней на беспроблемный возврат всех неиспользованных запчастей.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <HeadphonesIcon className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Поддержка экспертов</h3>
              <p className="text-sm text-gray-500">Наши механики готовы помочь вам найти нужную деталь.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

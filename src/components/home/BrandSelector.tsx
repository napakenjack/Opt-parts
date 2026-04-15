import { Link } from 'react-router-dom';
import { mockBrands } from '../../data/mockData';

export function BrandSelector() {
  return (
    <section className="py-12 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Поиск по марке</h2>
            <p className="text-gray-500 mt-1">Выберите марку вашего автомобиля, чтобы найти подходящие запчасти</p>
          </div>
          <Link to="/catalog" className="text-blue-600 hover:text-blue-800 font-medium text-sm hidden sm:block">
            Все марки &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {mockBrands.map((brand) => (
            <Link 
              key={brand.id} 
              to={`/catalog?brand=${brand.id}`}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold text-gray-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors mb-3">
                {brand.logo}
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 text-center">
                {brand.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

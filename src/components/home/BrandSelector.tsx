import { Link } from 'react-router-dom';
import { mockBrands } from '../../data/mockData';

export function BrandSelector() {
  return (
    <section className="py-12 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Поиск по марке</h2>
            <p className="text-gray-500 mt-1">Выберите марку вашего автомобиля, чтобы найти подходящие запчасти</p>
          </div>
          <Link to="/catalog" className="text-blue-600 hover:text-blue-800 font-medium text-sm hidden sm:block">
            Все марки &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-6">
          {mockBrands.map((brand) => (
            <Link 
              key={brand.id} 
              to={`/catalog?brand=${brand.id}`}
              className="flex flex-col items-center justify-center py-6 px-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 text-center transition-colors">
                {brand.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

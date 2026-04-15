import { Search, CarFront } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function Hero() {
  return (
    <section className="bg-gray-900 text-white py-12 md:py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Найдите нужные запчасти. <span className="text-blue-500">Быстро.</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Более 2 миллионов автозапчастей в наличии. Ищите по артикулу, VIN или выберите ваш автомобиль для точного подбора.
          </p>
          
          <div className="bg-white p-2 rounded-lg shadow-lg flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input 
                type="text" 
                placeholder="Введите номер детали, ключевое слово или VIN..." 
                className="w-full pl-10 h-12 border-0 focus-visible:ring-0 text-gray-900 bg-transparent text-base"
              />
            </div>
            <div className="hidden md:block w-px bg-gray-200 my-2"></div>
            <Button variant="ghost" className="h-12 text-gray-600 hover:text-blue-600 md:w-auto justify-start md:justify-center px-4">
              <CarFront className="h-5 w-5 mr-2" />
              Выбрать авто
            </Button>
            <Button className="h-12 px-8 text-base font-medium w-full md:w-auto">
              Найти запчасти
            </Button>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400 font-medium">
            <span className="flex items-center gap-1"><span className="text-green-500">✓</span> OEM Качество</span>
            <span className="flex items-center gap-1"><span className="text-green-500">✓</span> Быстрая доставка</span>
            <span className="flex items-center gap-1"><span className="text-green-500">✓</span> Возврат 30 дней</span>
          </div>
        </div>
      </div>
    </section>
  );
}

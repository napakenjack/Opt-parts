import { Search, CarFront } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function Hero() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text and Search Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Найдите нужные запчасти. <br />
              <span className="text-blue-600">Быстро и точно.</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Более 2 миллионов автозапчастей в наличии. Ищите по артикулу, VIN или выберите ваш автомобиль для точного подбора деталей.
            </p>
            
            <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-md flex flex-col md:flex-row gap-2 w-full max-w-2xl mx-auto lg:mx-0">
              <div className="flex-1 relative border border-gray-100 rounded-lg bg-gray-50/50">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input 
                  type="text" 
                  placeholder="Введите номер детали, описание или VIN..." 
                  className="w-full pl-10 h-14 border-0 focus-visible:ring-0 text-gray-900 bg-transparent text-base"
                />
              </div>
              <Button variant="outline" className="h-14 text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-gray-200 w-full md:w-auto px-6 whitespace-nowrap">
                <CarFront className="h-5 w-5 mr-2" />
                По авто
              </Button>
              <Button className="h-14 px-8 text-base font-medium w-full md:w-auto shrink-0 shadow-sm">
                Найти
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600 font-medium">
              <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 text-xs">✓</span> OEM Качество</span>
              <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 text-xs">✓</span> Быстрая доставка</span>
              <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 text-xs">✓</span> Возврат 30 дней</span>
            </div>
          </div>

          {/* Image Collage Column */}
          <div className="w-full lg:w-1/2 relative hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border border-gray-100">
                  <img 
                    src="https://picsum.photos/seed/engine/600/800" 
                    alt="Двигатель" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-lg border border-gray-100">
                  <img 
                    src="https://picsum.photos/seed/brakes/600/600" 
                    alt="Тормозная система" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-4">
                 <div className="rounded-2xl overflow-hidden aspect-square shadow-lg border border-gray-100">
                  <img 
                    src="https://picsum.photos/seed/suspension/600/600" 
                    alt="Подвеска" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border border-gray-100 bg-blue-600 flex items-center justify-center p-8 text-center">
                  <div>
                    <h3 className="text-white text-3xl font-bold mb-2">100k+</h3>
                    <p className="text-blue-100 font-medium">Товаров всегда в наличии на складе</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-400 rounded-full blur-[100px] opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

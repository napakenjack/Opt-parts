import { Shield, Users, Globe, Award } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://picsum.photos/seed/mechanic/1920/1080)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Движимые качеством. Созданные экспертами.</h1>
          <p className="text-xl text-gray-300">
            Мы — OptParts, ведущий цифровой маркетплейс премиальных автомобильных компонентов, обслуживающий профессионалов и автолюбителей с 2010 года.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша миссия</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Упростить процесс покупки автозапчастей, предоставляя интуитивно понятную, точную и надежную платформу, где каждый может найти нужную деталь именно тогда, когда она нужна.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Мы считаем, что обслуживание и ремонт автомобилей не должны быть игрой в угадайку. Поэтому мы создали самую надежную в отрасли базу данных совместимости, гарантируя, что вы получите нужную деталь с первого раза.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">2M+</div>
                <div className="text-sm text-gray-600 font-medium">Запчастей в наличии</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500k</div>
                <div className="text-sm text-gray-600 font-medium">Довольных клиентов</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-sm text-gray-600 font-medium">Точность подбора</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Поддержка экспертов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Почему выбирают OptParts</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
              <div className="w-14 h-14 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Гарантия качества</h3>
              <p className="text-gray-600 text-sm">Мы работаем только с OEM и премиальными производителями.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
              <div className="w-14 h-14 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Опытные механики</h3>
              <p className="text-gray-600 text-sm">Наша служба поддержки состоит из сертифицированных механиков, готовых вам помочь.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
              <div className="w-14 h-14 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Национальная сеть</h3>
              <p className="text-gray-600 text-sm">Множество распределительных центров обеспечивают быструю доставку по всей стране.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
              <div className="w-14 h-14 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Лидеры отрасли</h3>
              <p className="text-gray-600 text-sm">Признаны лучшей платформой электронной коммерции автозапчастей в 2023 году.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

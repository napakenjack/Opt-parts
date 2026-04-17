import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ShoppingCart, Check, Clock, Shield, Truck, Heart, Share2 } from 'lucide-react';

export function ProductDetails() {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-blue-600">Главная</Link>
          <span className="mx-2">/</span>
          <Link to="/catalog" className="hover:text-blue-600">Каталог</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium line-clamp-1 inline-block align-bottom max-w-[200px]">{product.name}</span>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="flex flex-col lg:flex-row">
            {/* Image Gallery */}
            <div className="w-full lg:w-1/2 p-8 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col">
              <div className="relative aspect-square mb-4 flex items-center justify-center bg-white rounded-xl border border-gray-100 p-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-contain max-h-full max-w-full"
                  referrerPolicy="no-referrer"
                />
                {product.originalPrice && (
                  <Badge variant="destructive" className="absolute top-4 left-4 text-sm px-3 py-1">
                    Скидка
                  </Badge>
                )}
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
                {[1, 2, 3, 4].map((i) => (
                  <button key={i} className={`w-20 h-20 shrink-0 rounded-lg border ${i === 1 ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-200'} p-2 bg-white`}>
                    <img src={product.image} alt="" className="object-contain w-full h-full opacity-50" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-1/2 p-8 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">{product.brand}</span>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`text-gray-400 hover:text-red-500 transition-colors ${isSaved ? 'text-red-500' : ''}`}
                    onClick={() => setIsSaved(!isSaved)}
                  >
                    <Heart className={`h-5 w-5 ${isSaved ? 'fill-red-500' : ''}`} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-600">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">SKU: {product.sku}</span>
                <div className="flex items-center text-yellow-500">
                  {'★'.repeat(Math.floor(product.rating))}
                  <span className="text-gray-400 ml-1">({product.reviews} отзывов)</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                <div className="flex items-end gap-3 mb-4">
                  <div className="text-4xl font-bold text-gray-900">{product.price.toLocaleString('ru-KZ')} ₸</div>
                  {product.originalPrice && (
                    <div className="text-lg text-gray-400 line-through mb-1">{product.originalPrice.toLocaleString('ru-KZ')} ₸</div>
                  )}
                </div>
                
                <div className="space-y-3 mb-6">
                  {product.stock > 0 ? (
                    <div className="flex items-center text-green-600 font-medium">
                      <Check className="h-5 w-5 mr-2" /> В наличии ({product.stock} шт.)
                    </div>
                  ) : (
                    <div className="flex items-center text-red-600 font-medium">
                      <Clock className="h-5 w-5 mr-2" /> Нет в наличии
                    </div>
                  )}
                  <div className="flex items-center text-gray-700">
                    <Truck className="h-5 w-5 mr-2 text-gray-400" /> Доставка через {product.deliveryDays} дн.
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-24 flex items-center border border-gray-300 rounded-md bg-white">
                    <button className="w-8 h-10 text-gray-500 hover:text-gray-900">-</button>
                    <input type="text" value="1" readOnly className="w-8 h-10 text-center border-x border-gray-300 font-medium" />
                    <button className="w-8 h-10 text-gray-500 hover:text-gray-900">+</button>
                  </div>
                  <Button className="flex-1 h-12 text-lg" disabled={product.stock === 0}>
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    В корзину
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Характеристики</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm">
                    <div className="flex justify-between border-b border-gray-100 pb-1">
                      <span className="text-gray-500">Бренд</span>
                      <span className="font-medium text-gray-900">{product.brand}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-1">
                      <span className="text-gray-500">Артикул</span>
                      <span className="font-medium text-gray-900">{product.sku}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-1">
                      <span className="text-gray-500">Вес</span>
                      <span className="font-medium text-gray-900">1.2 кг</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-1">
                      <span className="text-gray-500">Гарантия</span>
                      <span className="font-medium text-gray-900">1 год</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Совместимость с автомобилями</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.compatibility.map(car => (
                      <Badge key={car} variant="secondary">{car}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Описание</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Высококачественная деталь ({product.name.toLowerCase()}), разработанная в соответствии со спецификациями OEM или превосходящая их. 
                    Произведено {product.brand}, надежным брендом в автомобильной промышленности. 
                    Обеспечивает оптимальную производительность и долговечность вашего автомобиля.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supplier Offers Table */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Предложения поставщиков</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 font-medium">
                <tr>
                  <th className="px-6 py-4">Склад / Город</th>
                  <th className="px-6 py-4">Срок доставки</th>
                  <th className="px-6 py-4">В наличии</th>
                  <th className="px-6 py-4">Цена</th>
                  <th className="px-6 py-4 text-right">Действие</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Recommended Offer */}
                <tr className="bg-blue-50/50 hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="success" className="text-[10px] px-1.5 py-0">Рекомендуем</Badge>
                      <span className="font-medium text-gray-900">Центральный склад (Москва)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-gray-700">
                      <Truck className="h-4 w-4 mr-1.5 text-gray-400" /> {product.deliveryDays} дн.
                    </div>
                  </td>
                  <td className="px-6 py-4 text-green-600 font-medium">{product.stock} шт.</td>
                  <td className="px-6 py-4 font-bold text-gray-900">{product.price.toLocaleString('ru-KZ')} ₸</td>
                  <td className="px-6 py-4 text-right">
                    <Button size="sm">В корзину</Button>
                  </td>
                </tr>
                {/* Other Offers */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">Склад Партнера (СПб)</td>
                  <td className="px-6 py-4 text-gray-700">3-4 дн.</td>
                  <td className="px-6 py-4 text-green-600 font-medium">12 шт.</td>
                  <td className="px-6 py-4 font-bold text-gray-900">{(product.price * 0.95).toLocaleString('ru-KZ', {maximumFractionDigits: 0})} ₸</td>
                  <td className="px-6 py-4 text-right">
                    <Button size="sm" variant="outline">В корзину</Button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">Оптовый склад (Екатеринбург)</td>
                  <td className="px-6 py-4 text-gray-700">5-7 дн.</td>
                  <td className="px-6 py-4 text-green-600 font-medium">&gt;50 шт.</td>
                  <td className="px-6 py-4 font-bold text-gray-900">{(product.price * 0.85).toLocaleString('ru-KZ', {maximumFractionDigits: 0})} ₸</td>
                  <td className="px-6 py-4 text-right">
                    <Button size="sm" variant="outline">В корзину</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

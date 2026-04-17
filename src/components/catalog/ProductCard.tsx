import { Link } from 'react-router-dom';
import { ShoppingCart, Check, Clock, Heart } from 'lucide-react';
import { Product } from '../../data/mockData';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all relative">
      <button 
        onClick={(e) => { e.preventDefault(); setIsSaved(!isSaved); }}
        className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-500 hover:text-red-500 transition-colors"
      >
        <Heart className={`w-5 h-5 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
      </button>

      <Link to={`/product/${product.id}`} className="relative aspect-square p-4 flex items-center justify-center bg-white">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
        {product.originalPrice && (
          <Badge variant="destructive" className="absolute top-3 left-3">
            Скидка
          </Badge>
        )}
      </Link>
      
      <div className="flex flex-col flex-1 p-4 border-t border-gray-100">
        <div className="flex justify-between items-start mb-1">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{product.brand}</span>
          <span className="text-xs text-gray-400 font-mono">{product.sku}</span>
        </div>
        
        <Link to={`/product/${product.id}`} className="block mb-2">
          <h3 className="font-medium text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto pt-4 flex items-end justify-between">
          <div>
            {product.originalPrice && (
              <div className="text-sm text-gray-400 line-through mb-0.5">
                {product.originalPrice.toLocaleString('ru-KZ')} ₸
              </div>
            )}
            <div className="text-lg font-bold text-gray-900">
              {product.price.toLocaleString('ru-KZ')} ₸
            </div>
          </div>
          
          <Button size="icon" className="rounded-full h-10 w-10 shrink-0">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-3 text-xs">
          {product.stock > 0 ? (
            <div className="flex items-center text-green-600 font-medium">
              <Check className="h-3.5 w-3.5 mr-1" /> В наличии
            </div>
          ) : (
            <div className="flex items-center text-red-600 font-medium">
              <Clock className="h-3.5 w-3.5 mr-1" /> Нет в наличии
            </div>
          )}
          <div className="flex items-center text-gray-500">
            <Clock className="h-3.5 w-3.5 mr-1" /> {product.deliveryDays} дн.
          </div>
        </div>
      </div>
    </div>
  );
}

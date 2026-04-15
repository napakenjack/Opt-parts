import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                O
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Opt<span className="text-blue-500">Parts</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Премиальный маркетплейс автозапчастей для профессионалов и автолюбителей. Быстрая доставка, гарантия качества.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/catalog" className="hover:text-white transition-colors">Тормозная система</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Фильтры</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Детали двигателя</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Подвеска</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Обслуживание клиентов</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Доставка и оплата</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Возврат и гарантия</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Связаться с нами</h4>
            <ul className="space-y-2 text-sm">
              <li>support@optparts.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Пн-Пт: 8:00 - 20:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} OptParts. Все права защищены.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white">Политика конфиденциальности</Link>
            <Link to="#" className="hover:text-white">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

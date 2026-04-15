import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, Heart } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                O
              </div>
              <span className="hidden sm:inline-block text-xl font-bold text-gray-900 tracking-tight">
                Opt<span className="text-blue-600">Parts</span>
              </span>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden flex-1 max-w-2xl lg:flex items-center">
            <div className="relative w-full">
              <Input 
                type="search" 
                placeholder="Поиск по артикулу, названию или VIN..." 
                className="w-full pl-4 pr-10 rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:border-blue-600"
              />
              <Button className="absolute right-0 top-0 h-full rounded-l-none px-6">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/catalog">
              <Button variant="ghost" className="hidden md:flex">
                Каталог
              </Button>
            </Link>
            
            <div className="flex items-center gap-1 sm:gap-2">
              <Button variant="ghost" size="icon" className="hidden sm:flex text-gray-600">
                <Heart className="h-5 w-5" />
              </Button>
              <Link to="/profile">
                <Button variant="ghost" size="icon" className="text-gray-600">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="text-gray-600 relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                    3
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Mobile Search - Visible only on small screens */}
        <div className="pb-3 lg:hidden">
          <div className="relative w-full flex">
            <Input 
              type="search" 
              placeholder="Поиск запчастей..." 
              className="w-full rounded-r-none border-r-0 focus-visible:ring-0"
            />
            <Button className="rounded-l-none px-4">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

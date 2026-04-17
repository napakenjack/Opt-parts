import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    navigate('/profile');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
              {isLogin ? 'Вход в аккаунт' : 'Регистрация'}
            </h1>
            <p className="text-gray-500 text-sm">
              {isLogin ? 'Добро пожаловать обратно!' : 'Создайте аккаунт для удобных покупок'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                <Input required placeholder="Иван" />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input required type="email" placeholder="ivan@example.com" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">Пароль</label>
                {isLogin && (
                  <a href="#" className="text-xs text-blue-600 hover:underline">Забыли пароль?</a>
                )}
              </div>
              <Input required type="password" placeholder="••••••••" />
            </div>

            <Button type="submit" className="w-full h-11 mt-6">
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            {isLogin ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="text-blue-600 font-medium hover:underline"
            >
              {isLogin ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

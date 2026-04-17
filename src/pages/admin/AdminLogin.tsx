import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

export function AdminLogin() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/admin/dashboard');
  };

  return (
    <div className="bg-gray-900 min-h-screen py-12 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white tracking-tight">OptParts <span className="text-blue-500">Admin</span></h1>
          <p className="text-gray-400 mt-2 text-sm">Авторизуйтесь для доступа к панели управления</p>
        </div>

        <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email администратора</label>
              <Input required type="email" placeholder="admin@optparts.kz" className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-600 w-full" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Пароль</label>
              <Input required type="password" placeholder="••••••••" className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-600 w-full" />
            </div>

            <Button type="submit" className="w-full h-11 mt-6 text-white font-medium bg-blue-600 hover:bg-blue-700">
              Войти в панель
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

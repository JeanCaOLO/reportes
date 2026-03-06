import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_PUBLIC_SUPABASE_URL,
  import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      window.REACT_APP_NAVIGATE('/dashboard');
    } catch (error: any) {
      setMessage(error.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="w-full max-w-md px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-bar-chart-box-line text-3xl text-white"></i>
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Panel de Reportes</h1>
            <p className="text-slate-500 mt-2">Inicia sesión para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Correo electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-mail-line text-slate-400"></i>
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-sm"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-lock-line text-slate-400"></i>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {message && (
              <div className="p-3 rounded-lg text-sm bg-red-50 text-red-700 border border-red-200">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <i className="ri-loader-4-line animate-spin mr-2"></i>
                  Procesando...
                </span>
              ) : (
                'Iniciar sesión'
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-slate-500 mt-6">
          Sistema de autenticación seguro con Supabase
        </p>
      </div>
    </div>
  );
}

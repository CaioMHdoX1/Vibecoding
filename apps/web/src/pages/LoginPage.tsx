import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao entrar');
    } finally {
      setLoading(false);
    }
  }

  function handleFillDemo(demoEmail: string) {
    setEmail(demoEmail);
    setPassword('123456');
    setError('');
  }

  return (
    <div className="min-h-screen bg-linen-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm">
        {/* Logo / wordmark */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block group">
            <span className="font-serif text-2xl tracking-widest text-sumi-900 uppercase">
              Misho
            </span>
            <p className="text-xs text-sumi-500 mt-1 tracking-wider uppercase">
              Bonsai Studio
            </p>
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-linen-200 rounded-sm p-8 space-y-5 shadow-sm"
        >
          <h1 className="font-serif text-lg text-sumi-900 text-center">
            Entrar
          </h1>

          {error && (
            <p className="text-xs text-clay-700 bg-clay-100 border border-clay-300 rounded-sm px-3 py-2">
              {error}
            </p>
          )}

          <div className="space-y-1">
            <label className="block text-xs text-sumi-500 uppercase tracking-wider">
              E-mail
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-linen-200 rounded-sm px-3 py-2 text-sm text-sumi-900 bg-linen-50 focus:outline-none focus:border-moss-500 transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs text-sumi-500 uppercase tracking-wider">
              Senha
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-linen-200 rounded-sm px-3 py-2 text-sm text-sumi-900 bg-linen-50 focus:outline-none focus:border-moss-500 transition-colors"
              placeholder="••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-moss-800 text-linen-50 text-sm tracking-wider uppercase py-2.5 rounded-sm hover:bg-moss-900 transition-colors disabled:opacity-60 font-medium"
          >
            {loading ? 'Entrando…' : 'Entrar'}
          </button>

          {/* Atalhos de Demonstração / Teste */}
          <div className="pt-2 border-t border-linen-200">
            <p className="text-[11px] font-semibold text-sumi-600 uppercase tracking-wider mb-2 text-center">
              Acesso Rápido de Teste
            </p>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                type="button"
                onClick={() => handleFillDemo('cliente@misho.com')}
                className="text-[10px] bg-linen-100 hover:bg-linen-200 text-sumi-800 py-1.5 px-1 rounded-sm border border-linen-300 transition text-center"
              >
                Cliente
              </button>
              <button
                type="button"
                onClick={() => handleFillDemo('gerente@misho.com')}
                className="text-[10px] bg-linen-100 hover:bg-linen-200 text-sumi-800 py-1.5 px-1 rounded-sm border border-linen-300 transition text-center"
              >
                Gerente
              </button>
              <button
                type="button"
                onClick={() => handleFillDemo('admin@misho.com')}
                className="text-[10px] bg-linen-100 hover:bg-linen-200 text-sumi-800 py-1.5 px-1 rounded-sm border border-linen-300 transition text-center"
              >
                Admin
              </button>
            </div>
            <p className="text-[10px] text-sumi-400 text-center mt-1">
              Senha padrão: <code className="font-mono">123456</code>
            </p>
          </div>

          <p className="text-center text-xs text-sumi-500 pt-1">
            Não tem conta?{' '}
            <Link to="/register" className="text-moss-700 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await register(name, email, password);
      navigate('/login');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao cadastrar');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-linen-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <span className="font-serif text-2xl tracking-widest text-sumi-900 uppercase">
            Misho
          </span>
          <p className="text-xs text-sumi-500 mt-1 tracking-wider uppercase">
            Bonsai
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-linen-200 rounded-sm p-8 space-y-5"
        >
          <h1 className="font-serif text-lg text-sumi-900 text-center">
            Criar conta
          </h1>

          {error && (
            <p className="text-xs text-clay-700 bg-clay-100 border border-clay-300 rounded-sm px-3 py-2">
              {error}
            </p>
          )}

          <div className="space-y-1">
            <label className="block text-xs text-sumi-500 uppercase tracking-wider">
              Nome
            </label>
            <input
              type="text"
              required
              minLength={2}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-linen-200 rounded-sm px-3 py-2 text-sm text-sumi-900 bg-linen-50 focus:outline-none focus:border-moss-500 transition-colors"
              placeholder="Seu nome"
            />
          </div>

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
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-linen-200 rounded-sm px-3 py-2 text-sm text-sumi-900 bg-linen-50 focus:outline-none focus:border-moss-500 transition-colors"
              placeholder="Mínimo 6 caracteres"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-moss-800 text-linen-50 text-sm tracking-wider uppercase py-2.5 rounded-sm hover:bg-moss-900 transition-colors disabled:opacity-60"
          >
            {loading ? 'Cadastrando…' : 'Criar conta'}
          </button>

          <p className="text-center text-xs text-sumi-500">
            Já tem conta?{' '}
            <Link to="/login" className="text-moss-700 hover:underline">
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

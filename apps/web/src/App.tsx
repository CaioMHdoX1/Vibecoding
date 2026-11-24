import { Link, Outlet } from 'react-router-dom';
import { Sprout, ShoppingBag, Sparkles } from 'lucide-react';

export function App() {
  return (
    <div className="min-h-screen bg-linen-100 flex flex-col font-sans selection:bg-moss-300 selection:text-moss-900">
      {/* Top Banner de Filosofia */}
      <div className="bg-moss-900 text-linen-100 text-[11px] py-1.5 px-6 text-center tracking-widest uppercase font-mono flex items-center justify-center gap-2">
        <Sparkles className="w-3 h-3 text-clay-300" />
        <span>Misho Bonsai · Cultivo consciente e reverência ao tempo</span>
      </div>

      {/* Header de Navegação */}
      <header className="border-b border-linen-300 bg-linen-50/90 backdrop-blur sticky top-0 z-40 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 group">
              <Sprout className="w-6 h-6 text-moss-700 transition-transform group-hover:rotate-6" />
              <span className="font-serif text-2xl font-bold tracking-wider text-moss-900">
                MISHO
              </span>
            </Link>
            <span className="hidden sm:inline-block text-[11px] tracking-widest text-clay-700 uppercase font-sans border-l border-linen-300 pl-3">
              Bonsai Studio
            </span>
          </div>

          <nav className="flex items-center gap-6 text-xs sm:text-sm text-sumi-700 font-medium">
            <Link to="/" className="hover:text-moss-900 transition">
              Catálogo
            </Link>
            <a href="#filosofia" className="hover:text-moss-900 transition hidden md:inline-block">
              Wabi-Sabi
            </a>
            <a href="#cuidados" className="hover:text-moss-900 transition hidden sm:inline-block">
              Guia de Cultivo
            </a>
            <button className="flex items-center gap-1.5 bg-linen-200/80 hover:bg-linen-300 text-sumi-900 px-3 py-1.5 rounded-sm transition text-xs font-semibold">
              <ShoppingBag className="w-3.5 h-3.5 text-moss-800" />
              <span>Sacola (0)</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Conteúdo Dinâmico das Páginas */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Rodapé Wabi-Sabi */}
      <footer className="border-t border-linen-300 bg-linen-50 py-12 px-6 mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-sumi-600">
          <div>
            <span className="font-serif text-lg font-bold text-moss-900 block mb-2">MISHO BONSAI</span>
            <p className="leading-relaxed">
              Ateliê dedicado ao cultivo artístico e à filosofia wabi-sabi: a beleza do imperfeito, do impermanente e do incompleto.
            </p>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-sumi-800 font-semibold block mb-2">Cultivo & Origem</span>
            <p className="leading-relaxed">
              Cada árvore acompanha certificado de autenticidade botânica, histórico de poda e orientação contínua de cuidado para todas as estações.
            </p>
          </div>
          <div className="text-left md:text-right">
            <span className="text-[11px] uppercase tracking-wider text-sumi-800 font-semibold block mb-2">Atendimento & Envio</span>
            <p className="leading-relaxed">
              Embalagens de transporte térmicas e amortecidas sob medida para garantir que a planta chegue hidratada e com estrutura preservada.
            </p>
            <div className="mt-4 text-[11px] text-sumi-500">
              © {new Date().getFullYear()} Misho Bonsai. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

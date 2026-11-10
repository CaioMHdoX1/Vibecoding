import React from 'react';

export function App() {
  return (
    <div className="min-h-screen bg-linen-100 flex flex-col">
      <header className="border-b border-linen-300 bg-linen-50/80 backdrop-blur px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold tracking-wide text-moss-900">MISHO</span>
            <span className="text-xs tracking-widest text-clay-700 uppercase font-sans border-l border-linen-300 pl-3">
              Bonsai Studio
            </span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-sumi-700 font-medium">
            <a href="#catalogo" className="hover:text-moss-700 transition">Catálogo</a>
            <a href="#cuidados" className="hover:text-moss-700 transition">Guia de Cultivo</a>
            <a href="#sobre" className="hover:text-moss-700 transition">Sobre o Projeto</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <span className="text-xs uppercase tracking-widest text-moss-700 bg-moss-100 px-3 py-1 rounded-sm mb-4">
          Projeto 100% desenvolvido com IA · Etapa 0
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-moss-900 max-w-3xl leading-tight mb-6">
          A paciência do cultivo tradicional unida à engenharia moderna.
        </h1>
        <p className="text-sumi-700 max-w-2xl text-lg font-sans leading-relaxed mb-8">
          Misho Bonsai é um projeto de e-commerce fictício desenvolvido colaborativamente com inteligência artificial,
          com foco em excelência arquitetural, TypeScript estrito e design wabi-sabi.
        </p>
        <div className="flex gap-4">
          <button className="bg-moss-800 text-linen-50 hover:bg-moss-900 px-6 py-3 rounded-md font-medium text-sm transition">
            Explorar Coleção (Em breve)
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="border border-sumi-300 text-sumi-900 hover:bg-linen-200 px-6 py-3 rounded-md font-medium text-sm transition"
          >
            Ver Repositório no GitHub
          </a>
        </div>
      </main>

      <footer className="border-t border-linen-300 py-6 text-center text-xs text-sumi-500">
        Misho Bonsai · Portfólio sem fins comerciais · 100% desenvolvido com IA e revisado por humanos.
      </footer>
    </div>
  );
}

export default App;

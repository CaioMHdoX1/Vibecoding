import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Percent } from 'lucide-react';
import { CatalogProduct } from '../data/products';
import { ProductCard } from './ProductCard';

interface DiscountCarouselProps {
  products: CatalogProduct[];
}

export const DiscountCarousel: React.FC<DiscountCarouselProps> = ({ products }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (!products || products.length === 0) return null;

  return (
    <section className="mb-14 bg-gradient-to-br from-clay-100/60 via-linen-50 to-linen-100 border border-clay-300/80 rounded-sm p-6 sm:p-8 shadow-xs">
      {/* Cabeçalho do Carrossel de Descontos */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-linen-300">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-clay-900 bg-clay-300/40 px-2.5 py-0.5 rounded-sm font-semibold mb-2">
            <Percent className="w-3 h-3 text-clay-700" />
            <span>Condições Especiais de Cultivo · Lote Limitado</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-moss-900 leading-tight">
            Espécimes com Desconto Exclusivo
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-sumi-600 max-w-xl font-sans">
            Árvores adultas e exemplares selecionados com valores promocionais para quem busca começar ou expandir sua coleção com excelência.
          </p>
        </div>

        {/* Controles de Navegação do Carrossel */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => scroll('left')}
            aria-label="Rolar para esquerda"
            className="p-2 rounded-sm border border-linen-300 bg-linen-50 hover:bg-linen-200 text-sumi-700 transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Rolar para direita"
            className="p-2 rounded-sm border border-linen-300 bg-linen-50 hover:bg-linen-200 text-sumi-700 transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Container de Rolagem Horizontal */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-linen-300 focus:outline-none"
        style={{ scrollbarWidth: 'thin' }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 snap-start"
          >
            <ProductCard product={product} compact={true} />
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-sumi-500 pt-3 border-t border-linen-200/80">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-clay-500" />
          Descontos aplicados automaticamente no checkout
        </span>
        <span className="hidden sm:inline">Deslize para conferir todas as ofertas</span>
      </div>
    </section>
  );
};

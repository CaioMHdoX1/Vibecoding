import { useState, useMemo } from 'react';
import { MOCK_PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductFilters } from '../components/ProductFilters';
import { Sparkles, Sprout } from 'lucide-react';

export default function CatalogPage() {
  const [filters, setFilters] = useState({
    search: '',
    careLevel: '',
    style: '',
    sunExposure: '',
    sortBy: 'featured',
  });

  const handleReset = () => {
    setFilters({
      search: '',
      careLevel: '',
      style: '',
      sunExposure: '',
      sortBy: 'featured',
    });
  };

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((product) => {
      // Busca por nome ou espécie
      if (filters.search) {
        const query = filters.search.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesSpecies = product.species.toLowerCase().includes(query);
        if (!matchesName && !matchesSpecies) return false;
      }

      // Nível de cuidado
      if (filters.careLevel && product.careLevel !== filters.careLevel) {
        return false;
      }

      // Estilo
      if (filters.style && product.style !== filters.style) {
        return false;
      }

      // Exposição solar
      if (filters.sunExposure && product.sunExposure !== filters.sunExposure) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') {
        return a.priceBase - b.priceBase;
      }
      if (filters.sortBy === 'price-desc') {
        return b.priceBase - a.priceBase;
      }
      if (filters.sortBy === 'age-desc') {
        return b.estimatedAge - a.estimatedAge;
      }
      return 0; // featured default
    });
  }, [filters]);

  return (
    <div className="flex-1 max-w-6xl mx-auto px-6 py-10 w-full">
      {/* Cabeçalho Editorial do Catálogo */}
      <section className="mb-10 text-left border-b border-linen-300 pb-8">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-moss-700 bg-moss-100 px-3 py-1 rounded-sm mb-3">
          <Sprout className="w-3.5 h-3.5 text-moss-800" />
          <span>Coleção Viva · Espécimes Selecionados</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif text-moss-900 leading-tight">
          Catálogo de Bonsais & Cultivo Wabi-Sabi
        </h1>
        <p className="mt-2 text-sumi-700 text-sm md:text-base max-w-2xl font-sans leading-relaxed">
          Cada exemplar é uma escultura viva única, cultivada respeitando os ritmos da natureza, 
          a assimetria natural e os séculos de tradição estética oriental.
        </p>
      </section>

      {/* Barra de Filtros e Busca */}
      <ProductFilters
        filters={filters}
        onChange={setFilters}
        onReset={handleReset}
        totalCount={filteredProducts.length}
      />

      {/* Grid de Produtos */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-linen-50 border border-dashed border-linen-300 rounded-sm py-16 px-6 text-center">
          <p className="font-serif text-lg text-moss-900 mb-2">
            Nenhum espécime encontrado com esses critérios
          </p>
          <p className="text-xs text-sumi-600 mb-6 max-w-md mx-auto">
            Tente flexibilizar os filtros de estilo ou nível de cuidado para ver outros exemplares disponíveis do ateliê.
          </p>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 bg-moss-900 text-linen-50 hover:bg-moss-800 text-xs px-4 py-2.5 rounded-sm transition"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Ver todos os exemplares
          </button>
        </div>
      )}
    </div>
  );
}

import type React from 'react';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';

interface FiltersState {
  search: string;
  careLevel: string;
  style: string;
  sunExposure: string;
  sortBy: string;
}

interface ProductFiltersProps {
  filters: FiltersState;
  onChange: (filters: FiltersState) => void;
  onReset: () => void;
  totalCount: number;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onChange,
  onReset,
  totalCount,
}) => {
  const hasActiveFilters =
    Boolean(filters.search) ||
    Boolean(filters.careLevel) ||
    Boolean(filters.style) ||
    Boolean(filters.sunExposure);

  const updateField = (field: keyof FiltersState, value: string) => {
    onChange({ ...filters, [field]: value });
  };

  return (
    <div className="bg-linen-50 border border-linen-300 rounded-sm p-4 md:p-6 mb-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-linen-200">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-sumi-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por espécie (ex: Pinus, Acer) ou nome..."
            value={filters.search}
            onChange={(e) => updateField('search', e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-linen-100 border border-linen-300 rounded-sm text-sumi-900 placeholder-sumi-500 focus:outline-none focus:border-moss-700 focus:ring-1 focus:ring-moss-700 transition"
          />
        </div>

        <div className="flex items-center gap-3 justify-between md:justify-end">
          <div className="flex items-center gap-2 text-xs text-sumi-700">
            <SlidersHorizontal className="w-3.5 h-3.5 text-moss-700" />
            <span>Ordenar por:</span>
            <select
              value={filters.sortBy}
              onChange={(e) => updateField('sortBy', e.target.value)}
              className="text-xs bg-linen-100 border border-linen-300 rounded-sm px-2.5 py-1.5 text-sumi-900 focus:outline-none focus:border-moss-700"
            >
              <option value="featured">Destaques</option>
              <option value="price-asc">Menor Preço</option>
              <option value="price-desc">Maior Preço</option>
              <option value="age-desc">Mais Antigos</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1 text-xs text-clay-700 hover:text-clay-900 underline underline-offset-2 transition"
            >
              <RotateCcw className="w-3 h-3" />
              Limpar filtros
            </button>
          )}
        </div>
      </div>

      {/* Linha de seleção de atributos */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
        {/* Nível de Cuidado */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-sumi-600 font-medium mb-1.5">
            Experiência / Cuidado
          </label>
          <select
            value={filters.careLevel}
            onChange={(e) => updateField('careLevel', e.target.value)}
            className="w-full text-xs bg-linen-100 border border-linen-300 rounded-sm px-3 py-2 text-sumi-900 focus:outline-none focus:border-moss-700"
          >
            <option value="">Todos os níveis</option>
            <option value="INICIANTE">Iniciante</option>
            <option value="INTERMEDIARIO">Intermediário</option>
            <option value="AVANCADO">Avançado</option>
          </select>
        </div>

        {/* Estilo Botânico */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-sumi-600 font-medium mb-1.5">
            Estilo de Bonsai
          </label>
          <select
            value={filters.style}
            onChange={(e) => updateField('style', e.target.value)}
            className="w-full text-xs bg-linen-100 border border-linen-300 rounded-sm px-3 py-2 text-sumi-900 focus:outline-none focus:border-moss-700"
          >
            <option value="">Todos os estilos</option>
            <option value="CHOKKAN">Chokkan (Vertical Formal)</option>
            <option value="MOYOGI">Moyogi (Vertical Informal)</option>
            <option value="SHAKAN">Shakan (Inclinado)</option>
            <option value="KENGAI">Kengai (Cascata)</option>
            <option value="BUNJIN">Bunjin (Literati)</option>
          </select>
        </div>

        {/* Exposição Solar */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-sumi-600 font-medium mb-1.5">
            Exposição Solar
          </label>
          <select
            value={filters.sunExposure}
            onChange={(e) => updateField('sunExposure', e.target.value)}
            className="w-full text-xs bg-linen-100 border border-linen-300 rounded-sm px-3 py-2 text-sumi-900 focus:outline-none focus:border-moss-700"
          >
            <option value="">Qualquer exposição</option>
            <option value="SOL_PLENO">Sol Pleno</option>
            <option value="MEIA_SOMBRA">Meia Sombra</option>
          </select>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-linen-200 text-xs text-sumi-600 flex justify-between items-center">
        <span>Mostrando <strong>{totalCount}</strong> {totalCount === 1 ? 'espécime' : 'espécimes'}</span>
        <span className="text-[11px] text-sumi-500">Envio seguro climatizado em todo o Brasil</span>
      </div>
    </div>
  );
};

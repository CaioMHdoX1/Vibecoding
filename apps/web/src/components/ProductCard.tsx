import { Link } from 'react-router-dom';
import { Sun, Calendar, ArrowRight, Tag } from 'lucide-react';
import { CatalogProduct } from '../data/products';

interface ProductCardProps {
  product: CatalogProduct;
  compact?: boolean;
}

const STYLE_LABELS: Record<string, string> = {
  CHOKKAN: 'Vertical Formal',
  MOYOGI: 'Vertical Informal',
  SHAKAN: 'Inclinado',
  KENGAI: 'Cascata',
  HAN_KENGAI: 'Semi-cascata',
  FUKINAGASHI: 'Varrido pelo Vento',
  BUNJIN: 'Literati',
};

const CARE_LABELS: Record<string, { text: string; bg: string }> = {
  INICIANTE: { text: 'Iniciante', bg: 'bg-moss-100 text-moss-800' },
  INTERMEDIARIO: { text: 'Intermediário', bg: 'bg-linen-200 text-sumi-800' },
  AVANCADO: { text: 'Avançado', bg: 'bg-clay-100 text-clay-900' },
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, compact = false }) => {
  const priceFormatted = (product.priceBase / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const originalPriceFormatted = product.originalPrice
    ? (product.originalPrice / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    : null;

  const careBadge = CARE_LABELS[product.careLevel] || {
    text: product.careLevel,
    bg: 'bg-linen-200 text-sumi-800',
  };

  return (
    <article className="group bg-linen-50 border border-linen-300 rounded-sm overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:border-moss-300 hover:-translate-y-0.5">
      {/* Imagem do Produto com Tag de Desconto e Estilo */}
      <div className="relative aspect-[4/3] bg-linen-200 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.imageAlt || product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        
        {/* Badges superiores esquerdos */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {product.discountPercent && (
            <span className="text-[11px] font-bold tracking-wide bg-clay-700 text-linen-50 px-2.5 py-0.5 rounded-sm shadow-sm flex items-center gap-1">
              <Tag className="w-3 h-3" />
              -{product.discountPercent}% OFF
            </span>
          )}
          <span className={`text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-sm backdrop-blur-sm ${careBadge.bg}`}>
            {careBadge.text}
          </span>
        </div>

        {/* Tag secundária (ex: Peça Única, Rara) */}
        {product.tags && product.tags.filter(t => t !== 'Oportunidade')[0] && (
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[10px] font-medium tracking-wider bg-sumi-900/80 text-linen-50 px-2 py-0.5 rounded-sm backdrop-blur-sm">
              {product.tags.filter(t => t !== 'Oportunidade')[0]}
            </span>
          </div>
        )}
      </div>

      {/* Conteúdo do Card */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-sumi-500 font-sans mb-1.5">
            <span className="italic font-serif">{product.species}</span>
            <span>{STYLE_LABELS[product.style] || product.style}</span>
          </div>

          <h3 className="font-serif text-lg font-bold text-moss-900 leading-snug group-hover:text-moss-700 transition-colors">
            <Link to={`/product/${product.slug}`} className="focus:outline-none focus:underline">
              {product.name}
            </Link>
          </h3>

          {!compact && (
            <p className="mt-2 text-xs text-sumi-600 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}

          {/* Micro metadados (idade e sol) */}
          <div className="mt-4 pt-3 border-t border-linen-200 flex items-center justify-between text-[11px] text-sumi-600">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-clay-500" />
              {product.estimatedAge} anos de cultivo
            </span>
            <span className="flex items-center gap-1">
              <Sun className="w-3.5 h-3.5 text-clay-500" />
              {product.sunExposure === 'SOL_PLENO' ? 'Sol pleno' : 'Meia sombra'}
            </span>
          </div>
        </div>

        {/* Rodapé do Card com Preço e Ação */}
        <div className="mt-5 pt-3 border-t border-linen-200 flex items-center justify-between">
          <div>
            {originalPriceFormatted && (
              <span className="text-[11px] line-through text-sumi-400 block -mb-0.5 font-mono">
                {originalPriceFormatted}
              </span>
            )}
            <span className="font-sans font-semibold text-base text-moss-900">
              {priceFormatted}
            </span>
          </div>

          <Link
            to={`/product/${product.slug}`}
            className="inline-flex items-center gap-1.5 bg-moss-900 text-linen-50 hover:bg-moss-800 text-xs font-medium px-3.5 py-2 rounded-sm transition-colors shadow-xs"
          >
            Ver detalhes
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

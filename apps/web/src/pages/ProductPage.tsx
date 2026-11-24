import { useParams, Link } from 'react-router-dom';
import { useProductDetail } from '../hooks/useProductDetail';
import { ArrowLeft, Calendar, Sun, ShieldCheck, Heart, Share2, Sparkles, Truck } from 'lucide-react';
import { useState } from 'react';

const STYLE_LABELS: Record<string, string> = {
  CHOKKAN: 'Chokkan (Vertical Formal)',
  MOYOGI: 'Moyogi (Vertical Informal)',
  SHAKAN: 'Shakan (Inclinado)',
  KENGAI: 'Kengai (Cascata)',
  HAN_KENGAI: 'Han-Kengai (Semi-cascata)',
  FUKINAGASHI: 'Fukinagashi (Varrido pelo Vento)',
  BUNJIN: 'Bunjin (Literati)',
};

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: product, loading, error } = useProductDetail(slug ?? '');
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  if (loading) {
    return (
      <div className="flex-1 max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-block animate-spin w-6 h-6 border-2 border-moss-700 border-t-transparent rounded-full mb-3" />
        <p className="font-serif text-moss-900 text-lg">Preparando ficha botânica do espécime...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex-1 max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-clay-700 font-medium mb-4 text-lg">
          {error || 'Espécime não encontrado em nossa coleção atual.'}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-moss-900 text-linen-50 px-5 py-2.5 rounded-sm text-sm hover:bg-moss-800 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Retornar ao Catálogo
        </Link>
      </div>
    );
  }

  const selectedVariant = product.variants?.[selectedVariantIndex];
  const activePrice = selectedVariant ? selectedVariant.price : product.priceBase;
  const formattedPrice = (activePrice / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <div className="flex-1 max-w-6xl mx-auto px-6 py-8 w-full">
      {/* Breadcrumb e Retorno */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs text-sumi-600 hover:text-moss-900 transition font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar ao Catálogo
        </Link>
        <span className="text-xs text-sumi-500 font-mono tracking-wider">
          SKU: {selectedVariant?.id || product.id}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Galeria e Imagem de Destaque */}
        <div className="lg:col-span-7 space-y-4">
          <div className="aspect-[4/3] bg-linen-200 border border-linen-300 rounded-sm overflow-hidden flex items-center justify-center relative shadow-sm">
            {product.images && product.images.length > 0 ? (
              <img
                src={product.images[0].url}
                alt={product.images[0].alt || product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-sumi-500 text-sm">Sem imagem botânica disponível</span>
            )}
            <div className="absolute top-4 left-4 bg-linen-50/90 backdrop-blur border border-linen-300 px-3 py-1 rounded-sm text-xs font-serif text-moss-900">
              Peça Única & Curadoria Especial
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="border border-linen-300 bg-linen-50 p-3 rounded-sm text-xs">
              <span className="text-[10px] text-sumi-500 uppercase tracking-widest block mb-1">Idade Estimada</span>
              <strong className="text-moss-900 font-serif text-sm flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-clay-500" />
                {product.estimatedAge}
              </strong>
            </div>
            <div className="border border-linen-300 bg-linen-50 p-3 rounded-sm text-xs">
              <span className="text-[10px] text-sumi-500 uppercase tracking-widest block mb-1">Exposição Solar</span>
              <strong className="text-moss-900 font-serif text-sm flex items-center gap-1">
                <Sun className="w-3.5 h-3.5 text-clay-500" />
                {product.sunExposure === 'SOL_PLENO' ? 'Sol Pleno' : 'Meia Sombra'}
              </strong>
            </div>
            <div className="border border-linen-300 bg-linen-50 p-3 rounded-sm text-xs">
              <span className="text-[10px] text-sumi-500 uppercase tracking-widest block mb-1">Garantia Botânica</span>
              <strong className="text-moss-900 font-serif text-sm flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-moss-700" />
                30 Dias Aclimatação
              </strong>
            </div>
          </div>
        </div>

        {/* Informações de Compra e Detalhes */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-widest text-moss-800 bg-moss-100 px-2.5 py-0.5 rounded-sm font-semibold">
                {product.careLevel}
              </span>
              <span className="text-xs text-sumi-500 italic font-serif">
                {product.species}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif text-moss-900 font-bold leading-tight mb-2">
              {product.name}
            </h1>

            <div className="text-xs text-sumi-600 mb-4 font-sans">
              Estilo: <span className="font-semibold text-sumi-900">{STYLE_LABELS[product.style] || product.style}</span>
            </div>

            <div className="my-5 p-4 bg-linen-50 border border-linen-300 rounded-sm">
              <span className="text-[11px] text-sumi-500 uppercase tracking-wider block mb-1">Valor do Espécime</span>
              <div className="text-3xl font-semibold text-moss-900 font-sans">
                {formattedPrice}
              </div>
              <span className="text-xs text-sumi-600 mt-1 block">
                Em até 10x sem juros no cartão ou com 5% de desconto via Pix
              </span>
            </div>

            <p className="text-sumi-700 font-sans text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variações / Vaso e Porte */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6 space-y-2">
                <label className="text-xs font-semibold text-sumi-800 uppercase tracking-wider block">
                  Composição de Vaso & Dimensão
                </label>
                <div className="space-y-2">
                  {product.variants.map((v, idx) => (
                    <button
                      key={v.id || idx}
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`w-full text-left p-3 rounded-sm border text-xs transition flex justify-between items-center ${
                        selectedVariantIndex === idx
                          ? 'border-moss-700 bg-moss-100/50 text-moss-900 font-medium'
                          : 'border-linen-300 bg-linen-50 hover:bg-linen-100 text-sumi-700'
                      }`}
                    >
                      <div>
                        <div className="font-semibold">{v.size}</div>
                        <div className="text-sumi-500 text-[11px]">{v.pot}</div>
                      </div>
                      <span className="font-mono text-moss-900">
                        {(v.price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Botão de Aquisição */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-moss-900 text-linen-50 hover:bg-moss-800 py-3.5 px-6 rounded-sm font-medium text-sm transition flex items-center justify-center gap-2 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-clay-300" />
                {addedToCart ? 'Espécime Adicionado à Sacola!' : 'Reservar este Espécime'}
              </button>

              <div className="flex gap-2">
                <button className="flex-1 border border-linen-300 bg-linen-50 hover:bg-linen-200 text-sumi-800 py-2.5 px-3 rounded-sm text-xs font-medium transition flex items-center justify-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-clay-700" />
                  Salvar na Lista
                </button>
                <button className="flex-1 border border-linen-300 bg-linen-50 hover:bg-linen-200 text-sumi-800 py-2.5 px-3 rounded-sm text-xs font-medium transition flex items-center justify-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5 text-sumi-700" />
                  Compartilhar
                </button>
              </div>
            </div>

            {/* Selo de Entrega */}
            <div className="mt-6 pt-5 border-t border-linen-300 flex items-start gap-3 text-xs text-sumi-600">
              <Truck className="w-5 h-5 text-moss-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-sumi-900 font-medium block">Transporte Climatizado de Alta Segurança</strong>
                Embalagem de madeira perfurada e substrato com hidrogel nutritivo para até 12 dias de trânsito estável.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

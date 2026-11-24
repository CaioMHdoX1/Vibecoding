import { useEffect, useState } from 'react';
import { MOCK_PRODUCTS } from '../data/products';

export interface ProductImage {
  url: string;
  alt: string;
  position: number;
}

export interface ProductVariant {
  id: string;
  size: string;
  pot: string;
  price: number;
  stockQuantity: number;
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface ProductDetail {
  id: string;
  name: string;
  slug: string;
  description: string;
  species: string;
  estimatedAge: string | number;
  style: string;
  careLevel: string;
  sunExposure: string;
  priceBase: number;
  images: ProductImage[];
  variants: ProductVariant[];
  careGuide?: string;
  reviews?: Review[];
}

/**
 * Hook to fetch product detail by slug with fallback to local mock data.
 */
export function useProductDetail(slug: string) {
  const [data, setData] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);

    const apiUrl = import.meta.env.VITE_API_URL;
    if (apiUrl) {
      fetch(`${apiUrl}/products/${slug}`)
        .then((res) => {
          if (!res.ok) throw new Error('Falha ao comunicar com a API');
          return res.json();
        })
        .then((json) => {
          setData(json);
          setError(null);
        })
        .catch(() => {
          // Fallback para mock local
          findLocalMock(slug);
        })
        .finally(() => setLoading(false));
    } else {
      findLocalMock(slug);
      setLoading(false);
    }

    function findLocalMock(targetSlug: string) {
      const match = MOCK_PRODUCTS.find((p) => p.slug === targetSlug);
      if (match) {
        setData({
          id: match.id || 'mock-id',
          name: match.name,
          slug: match.slug,
          description: match.description,
          species: match.species,
          estimatedAge: `${match.estimatedAge} anos`,
          style: match.style,
          careLevel: match.careLevel,
          sunExposure: match.sunExposure,
          priceBase: match.priceBase,
          images: [
            {
              url: match.imageUrl,
              alt: match.imageAlt || match.name,
              position: 0,
            },
          ],
          variants: match.variants.map((v) => ({
            id: v.id || 'v-1',
            size: v.size,
            pot: v.pot,
            price: v.price,
            stockQuantity: v.stockQuantity,
          })),
          careGuide: 'Regar quando o substrato superficial secar. Proteger contra ventos secos e manter adubação orgânica equilibrada.',
          reviews: [],
        });
        setError(null);
      } else {
        setData(null);
        setError('Espécime não encontrado');
      }
    }
  }, [slug]);

  return { data, loading, error };
}

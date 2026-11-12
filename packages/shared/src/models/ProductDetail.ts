export interface ProductVariant {
  id: string;
  size: string; // porte
  pot: string; // vaso
  price: number;
  stockQuantity: number;
}

export interface ProductImage {
  url: string;
  alt: string;
  position: number;
}

export interface Review {
  id: string;
  userId: string;
  rating: number; // 1-5
  comment: string;
  createdAt: string;
}

export interface ProductDetail {
  id: string;
  name: string;
  slug: string;
  description: string;
  species: string;
  estimatedAge: string;
  style: string;
  careLevel: string;
  sunExposure: string;
  priceBase: number;
  images: ProductImage[];
  variants: ProductVariant[];
  careGuide: string;
  reviews: Review[];
}

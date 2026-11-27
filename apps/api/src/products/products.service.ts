import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface ProductVariant {
  id: string;
  size: string;
  pot: string;
  price: number;
  stockQuantity: number;
}

export interface ProductImage {
  url: string;
  alt: string;
  position: number;
}

export interface ProductReview {
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
  estimatedAge: string;
  style: string;
  careLevel: string;
  sunExposure: string;
  priceBase: number;
  images: ProductImage[];
  variants: ProductVariant[];
  careGuide: string;
  reviews: ProductReview[];
}

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findBySlug(slug: string): Promise<ProductDetail | null> {
    const product = await this.prisma.product.findUnique({
      where: { slug },
      include: { images: true, variants: true, reviews: true },
    });

    if (!product) return null;

    const detail: ProductDetail = {
      id: product.id.toString(),
      name: product.name,
      slug: product.slug,
      description: product.description ?? '',
      species: product.species ?? '',
      estimatedAge: product.estimatedAge ?? '',
      style: product.style ?? '',
      careLevel: product.careLevel ?? '',
      sunExposure: product.sunExposure ?? '',
      priceBase: Number(product.priceBase ?? 0),
      images: (product.images || []).map((img: { url: string; alt: string | null; position: number | null }) => ({
        url: img.url,
        alt: img.alt ?? '',
        position: img.position ?? 0,
      })),
      variants: (product.variants || []).map((v: { id: string; size: string; pot: string; price: unknown; stockQuantity: number }) => ({
        id: v.id.toString(),
        size: v.size,
        pot: v.pot,
        price: Number(v.price),
        stockQuantity: v.stockQuantity,
      })),
      careGuide: (product as unknown as { careGuide?: string }).careGuide ?? '',
      reviews: (product.reviews || []).map((r: { id: string; userId: string; rating: number; comment: string | null; createdAt: Date }) => ({
        id: r.id.toString(),
        userId: r.userId.toString(),
        rating: r.rating,
        comment: r.comment ?? '',
        createdAt: r.createdAt.toISOString(),
      })),
    };

    return detail;
  }
}

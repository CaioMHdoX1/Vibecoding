import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductDetail } from '@shared/models/ProductDetail';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Retrieves a product by its slug and assembles the full ProductDetail object.
   * Includes images, variants, reviews and the care guide (stored as a text field).
   */
  async findBySlug(slug: string): Promise<ProductDetail | null> {
    const product = await this.prisma.product.findUnique({
      where: { slug },
      include: {
        images: true,
        variants: true,
        reviews: true,
        // Assuming a `careGuide` field exists on the Product model as string
        // If not, Prisma will ignore it.
        // You can adjust the schema later.
      },
    });

    if (!product) {
      return null;
    }

    // Map Prisma fields to the shared ProductDetail interface
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
      images: (product.images || []).map((img) => ({
        url: img.url,
        alt: img.alt ?? '',
        position: img.position ?? 0,
      })),
      variants: (product.variants || []).map((v) => ({
        id: v.id.toString(),
        size: v.size,
        pot: v.pot,
        price: Number(v.price),
        stockQuantity: v.stockQuantity,
      })),
      careGuide: product.careGuide ?? '',
      reviews: (product.reviews || []).map((r) => ({
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

import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ProductsService, ProductDetail } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':slug')
  async getProduct(@Param('slug') slug: string): Promise<ProductDetail> {
    const product = await this.productsService.findBySlug(slug);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }
}

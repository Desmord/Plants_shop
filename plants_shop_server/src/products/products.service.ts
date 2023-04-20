import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) { }

  public getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  public getById(id: Product['id']): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
      include: {
        images: true,
        orders: true,
      },
    });
  }

  public deleteById(id: Product['id']): Promise<Product> {
    return this.prismaService.product.delete({
      where: { id },
    });
  }

  public create(productData: Omit<Product, 'id'>): Promise<Product> {
    return this.prismaService.product.create({
      data: productData,
    });
  }

  public updateById(id: Product['id'], productData: any): Promise<Product> {
    const { title, description, price, quantity, orderId } = productData;
    return this.prismaService.product.update({
      where: { id },
      data: {
        title,
        description,
        price,
        orders: {
          create: {
            quantity: quantity,
            order: { connect: { id: orderId } },
          },
        },
      },
    });
  }
}

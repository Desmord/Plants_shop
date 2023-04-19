import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { db, Product } from 'src/db';

@Injectable()
export class ProductsService {
  public getAll(): Product[] {
    return db.products;
  }

  public getById(id: Product['id']): Product | null {
    return db.products.find((product: Product) => product.id === id);
  }

  public deleteById(id: Product['id']): void {
    db.products = db.products.filter((product: Product) => product.id !== id);
  }

  public create(productData: Omit<Product, 'id'>): Product {
    const newProduct = { ...productData, id: uuidv4() };
    db.products.push(newProduct);
    return newProduct;
  }

  public updateById(id: Product['id'], productData: Omit<Product, 'id'>): void {
    db.products = db.products.map((product) => {
      if (product.id === id) {
        return { ...product, ...productData };
      }
      return product;
    });
  }
}

import { ProductsService } from './products.service';
import { CreateProductDTO, UpdateProductDTO } from './dtos/create-product.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAll(): any;
    getById(id: string): Promise<import(".prisma/client").Product>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
    create(productData: CreateProductDTO): Promise<import(".prisma/client").Product>;
    update(id: string, productData: UpdateProductDTO): Promise<{
        success: boolean;
    }>;
}

import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Body,
  ParseUUIDPipe,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO, UpdateProductDTO } from './dtos/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {
    this.productsService = productsService;
  }

  @Get('/')
  getAll(): any {
    return this.productsService.getAll();
  }

  @Get('/:id')
  public getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = this.productsService.getById(id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  @Delete('/:id')
  deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!this.productsService.getById(id))
      throw new NotFoundException('Product not found');

    this.productsService.deleteById(id);
    return { success: true };
  }

  @Post('/')
  create(@Body() productData: CreateProductDTO) {
    return this.productsService.create(productData);
  }

  @Put('/:id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() productData: UpdateProductDTO,
  ) {
    if (!this.productsService.getById(id))
      throw new NotFoundException('Product not found');

    this.productsService.updateById(id, productData);
    return { success: true };
  }
}

import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Body,
  Put,
  ParseUUIDPipe,
  NotFoundException,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO, UpdateOrderDTO } from './dtos/create-orders.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {
    this.ordersService = ordersService;
  }

  @Get('/')
  getAll(): any {
    return this.ordersService.getAll();
  }

  @Get('/:id')
  public getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const order = this.ordersService.getById(id);
    if (!order) throw new NotFoundException('Product not found');
    return order;
  }

  @Delete('/:id')
  deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!this.ordersService.getById(id))
      throw new NotFoundException('Product not found');

    this.ordersService.deleteById(id);
    return { success: true };
  }

  @Post('/')
  create(@Body() productData: CreateOrderDTO) {
    return this.ordersService.create(productData);
  }

  @Put('/:id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() orderData: UpdateOrderDTO,
  ) {
    if (!this.ordersService.getById(id))
      throw new NotFoundException('Product not found');

    this.ordersService.updateById(id, orderData);
    return { success: true };
  }
}

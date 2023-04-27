import { OrdersService } from './orders.service';
import { CreateOrderDTO, UpdateOrderDTO } from './dtos/create-orders.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAll(): any;
    getById(id: string): Promise<import(".prisma/client").Order>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
    create(orderData: CreateOrderDTO): Promise<import(".prisma/client").Order>;
    update(id: string, orderData: UpdateOrderDTO): Promise<{
        success: boolean;
    }>;
}

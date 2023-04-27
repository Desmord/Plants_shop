import { CreateImageDTO } from './dtos/create-image.dto';
import { ImagesService } from './images.service';
export declare class ImagesController {
    private imagesService;
    constructor(imagesService: ImagesService);
    getAll(): any;
    getById(id: string): Promise<import(".prisma/client").Images>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
    create(imageData: CreateImageDTO): Promise<import(".prisma/client").Images>;
}

import { Images } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class ImagesService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Images[]>;
    getById(id: Images['id']): Promise<Images | null>;
    create(imageData: Omit<Images, 'id'>): Promise<Images>;
    deleteById(id: Images['id']): Promise<Images>;
}

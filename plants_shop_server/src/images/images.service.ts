import { Injectable } from '@nestjs/common';
import { Images } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class ImagesService {
  constructor(private prismaService: PrismaService) { }

  public getAll(): Promise<Images[]> {
    return this.prismaService.images.findMany();
  }

  public getById(id: Images['id']): Promise<Images | null> {
    return this.prismaService.images.findUnique({
      where: { id },
    });
  }

  public create(imageData: Omit<Images, 'id'>): Promise<Images> {
    return this.prismaService.images.create({
      data: imageData,
    });
  }

  public deleteById(id: Images['id']): Promise<Images> {
    return this.prismaService.images.delete({
      where: { id },
    });
  }
}

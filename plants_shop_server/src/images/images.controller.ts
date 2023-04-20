import { Controller, Get, Post, Body, Param, ParseUUIDPipe, NotFoundException, Delete } from '@nestjs/common';
import { CreateImageDTO } from './dtos/create-image.dto';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {
    this.imagesService = imagesService;
  }

  @Get('/')
  getAll(): any {
    return this.imagesService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = await this.imagesService.getById(id);
    if (!product) throw new NotFoundException('Image not found');
    return product;
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.imagesService.getById(id)))
      throw new NotFoundException('Image not found');

    await this.imagesService.deleteById(id);
    return { success: true };
  }

  @Post('/')
  create(@Body() imageData: CreateImageDTO) {
    return this.imagesService.create(imageData);
  }
}

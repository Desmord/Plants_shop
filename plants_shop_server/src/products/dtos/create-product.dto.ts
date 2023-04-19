import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateProductDTO {
  id: string;
  images: string[] | [];

  @IsNotEmpty()
  @IsString()
  @Length(5, 40)
  title: string;

  @IsNotEmpty()
  price: number;

  @Length(5, 200)
  description: string;
}

export class UpdateProductDTO {
  id: string;
  images: string[] | [];

  @IsNotEmpty()
  @IsString()
  @Length(5, 40)
  title: string;

  @IsNotEmpty()
  price: number;

  @Length(5, 200)
  description: string;
}

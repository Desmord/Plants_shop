import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateProductDTO {
  id: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 40)
  title: string;

  @IsNotEmpty()
  price: string;

  @Length(5, 200)
  description: string;
}

export class UpdateProductDTO {
  id: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 40)
  title: string;

  @IsNotEmpty()
  price: string;

  @Length(5, 200)
  description: string;

  quantity: string;
  orderId: string;
}

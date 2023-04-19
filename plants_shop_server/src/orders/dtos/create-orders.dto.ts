import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateOrderDTO {
  id: string;

  @IsNotEmpty()
  products: { quantity: number; productId: string }[];

  @IsNotEmpty()
  @IsString()
  @Length(5, 40)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 40)
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 200)
  adress: string;

  @IsString()
  @Length(5, 200)
  clientNotes: string;
}

export class UpdateOrderDTO {
  id: string;

  @IsNotEmpty()
  products: { quantity: number; productId: string }[];

  @IsNotEmpty()
  @IsString()
  @Length(5, 40)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 40)
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 200)
  adress: string;

  @IsString()
  @Length(5, 200)
  clientNotes: string;
}

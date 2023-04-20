import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateOrderDTO {
  id: string;

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
  clientNotes: string;
}

export class UpdateOrderDTO {
  id: string;

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
  clientNotes: string;

  quantity: string;
  productId: string;
}

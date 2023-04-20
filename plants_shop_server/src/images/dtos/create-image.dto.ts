import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateImageDTO {
  id: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
  img: string;

  productId: string;
}

import {IsNotEmpty, MaxLength, IsOptional, Min, Max, IsInt} from 'class-validator'

export class CreateAndUpdateProductDto {
  @IsInt()
  @IsNotEmpty()
  typeId: number

  @IsNotEmpty()
  @MaxLength(15)
  serial: string

  @IsNotEmpty()
  @MaxLength(55)
  title: string

  @IsOptional()
  @MaxLength(6)
  scale: string

  @IsInt()
  @IsNotEmpty()
  @Min(15)
  @Max(99999)
  weight: number

  @IsNotEmpty()
  @MaxLength(55)
  image: string

  @IsNotEmpty()
  @Min(1)
  @Max(999999)
  price: number

  @IsInt()
  @Min(0)
  @Max(1)
  @IsNotEmpty()
  inStock: number

  @IsInt()
  @Min(0)
  @Max(1)
  @IsNotEmpty()
  isPublished: number
}

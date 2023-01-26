import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Vasya',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(2)
  firstName: string;

  @ApiProperty({
    example: 'Boychuk',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(2)
  surName: string;

  @ApiProperty({
    example: 18,
    required: false,
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(16)
  age: number;

  @ApiProperty({
    example: 'Lviv',
    required: false,
  })
  @IsString()
  @IsOptional()
  city: string;

  @ApiProperty({
    example: 'vasya@gmail.com',
    required: false,
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  confirm: boolean;
}

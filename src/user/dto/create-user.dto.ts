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

export class CreateUserDto {
  @IsString()
  @IsOptional()
  @Length(2)
  firstName: string;

  @IsString()
  @IsOptional()
  @Length(2)
  surName: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(16)
  age: number;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsBoolean()
  @IsOptional()
  confirm: boolean;
}

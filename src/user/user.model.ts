import { Column, DataType, Model, Table } from 'sequelize-typescript';
import {ApiProperty} from "@nestjs/swagger";

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @ApiProperty({
    example: 'Vasya',
    required: false,
  })
  @Column({ type: DataType.STRING, allowNull: true }) //allowNull:true-is  not required
  firstName: string;

  @ApiProperty({
    example: 'Boychuk',
    required: false,
  })
  @Column({ type: DataType.STRING, allowNull: false })
  surName: string;

  @ApiProperty({
    example: 18,
    required: false,
  })
  @Column({ type: DataType.INTEGER, allowNull: false })
  age: number;

  @ApiProperty({
    example: 'Lviv',
    required: false,
  })
  @Column({ type: DataType.STRING, allowNull: true })
  city: string;

  @ApiProperty({
    example: true,
    required: false,
  })
  @Column({ type: DataType.BOOLEAN, allowNull: true })
  isConfirm: boolean;

  @ApiProperty({
    example: 'vasya@gmail.com',
    required: false,
  })
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;
}

import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({ type: DataType.STRING, allowNull: true }) //allowNull:true-is  not required
  firstName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  surName: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  age: number;

  @Column({ type: DataType.STRING, allowNull: true })
  city: string;

  @Column({ type: DataType.BOOLEAN, allowNull: true })
  isConfirm: boolean;

  @Column({ type: DataType.STRING, allowNull: false })
  email: string;
}

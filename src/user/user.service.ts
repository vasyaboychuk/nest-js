import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}
  private users = [];

  async getAll() {
    return this.userRepository.findAll();
  }
  async createUser(user: CreateUserDto) {
    return this.userRepository.create(user);
  }
  async getById(id: string) {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
  async delete(id: string) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    return user.destroy();
  }
}

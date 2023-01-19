import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users = [];

  getAll() {
    return this.users;
  }
  createUser(user: CreateUserDto) {
    this.users.push({
      ...user,
      id: new Date().valueOf(),
    });
    return user;
  }
  getById(id: string) {
    return this.users.find((user) => user.id === +id);
  }

}

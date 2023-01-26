import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import {ApiBadRequestResponse, ApiQuery, ApiResponse, ApiTags} from '@nestjs/swagger';
import { User } from './user.model';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.getAll();
  }

  @ApiBadRequestResponse({status:400,type:'Bad query param'})
  @ApiResponse({
    status: 201,
    type: User,
  })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
  @ApiQuery({ name: 'id' })
  @Get('/:id')
  getOneById(@Param('id') id: string) {
    return this.userService.getById(id);
  }
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}

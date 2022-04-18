import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  // 创建实例
  constructor(private readonly usersService: UserService) {}
  @Post('find-user')
  findUser(@Body() body: any) {
    return this.usersService.findUser(body.userName);
  }
}

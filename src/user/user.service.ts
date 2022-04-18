import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findUser(userName: string): object {
    if (userName === 'cy')
      return {
        code: 200,
        data: {
          name: '月巴',
          sex: '男',
        },
      };
    return {};
  }
}

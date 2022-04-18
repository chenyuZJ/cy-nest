import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('helloWorld') http://localhost:3000/helloWorld
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

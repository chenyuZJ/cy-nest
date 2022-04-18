### Controller ：控制器，主要作用：提供 api 接口，负责处理路由，中转，验证等一些简洁业务

### Service：又称为 Provider ，是一系列服务，repo，工厂方法，helper 的总称。主要负责处理具体的业务，如数据库的增删改查，事务，并发等逻辑代码

### Module：负责将 Controller 和 Service 连接起来

### 创建 service 文件 nest g service user logical

### 创建 controller 文件 nest g controller user logical

### 创建 module 文件 nest g module user logical

#### 发现里面已经有我们创建的 Service 和 Controller，这是 nest-cli 用指令创建文件的时候，帮我们自动引入了相关文件。而 main.ts 又引入了 AppModule，并且使用了 NestFactory 创建了实例。所以，如果一般模块的话，是不需要创建 module 的，cli 帮我们操作了这一步。

因此，如果一般模块的话，是不需要创建 module 的，cli 帮我们操作了这一步。

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

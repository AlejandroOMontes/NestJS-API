import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'pguser',
      password: 'pgpassword',
      database: 'nestjs',
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [],
})
export class UserModule {}
import {
    Body,
    Controller,
    Get,
    Post,
    Delete,
    Put,
    Param,
  } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
  ){}

  @Post()
  Create(@Body() user:User): Observable<User> {
    return this.userService.create(user)
  }

  @Get(':id')
  Find(@Param() params): Observable<User>{
    return this.userService.find(params.id)
  }

  @Get()
  FindAll(): Observable<User[]>{
    return this.userService.findAll()
  }

  @Put(':id')
  Update(@Param() id: string, @Body() user:User): Observable<any>{
    return this.userService.update(Number(id), user)
  }

  @Delete(':id')
  delete(@Param() id: string): Observable<any>{
    return this.userService.delete(Number(id))
  }
}
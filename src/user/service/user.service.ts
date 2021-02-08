import { Injectable } from '@nestjs/common';
import { UserEntity } from '../models/user.entity';
import { User } from '../models/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}


    create(user: User): Observable<User> {
        return from(this.userRepository.save(user))
    }

    find(id: number): Observable<any> {
      return from(this.userRepository.findOne(id))
    }
    
    findAll(): Observable<any> {
      return from(this.userRepository.find())
    }

    delete(id:number): Observable<any> {
      return from(this.userRepository.softDelete(id))
    }

    update(id:number, user:User): Observable<any>{
      return from(this.userRepository.update(id, user))
    }
}

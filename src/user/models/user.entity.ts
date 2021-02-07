import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @BeforeInsert()
  hashPassword() {
    bcrypt.hash(this.password, 15);
  }
  @Column()
  password: string;

  @Column({ unique: true })
  userName: string;
}
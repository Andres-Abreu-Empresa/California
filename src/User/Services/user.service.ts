import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../Entity/user.entity";
import { Repository } from "typeorm";
import { UserModel } from "../Models/user.model";
import { CreateUserInput } from "../Models/user.input";

@Injectable()
export class UserService {
    constructor (
    @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {} 

    async findAll(): Promise<UserEntity[]> {
        return this.userRepository.find({ relations: ['courses', 'enrolledCourses', 'posts'] });
      }
    

      async findOne(id: string): Promise<UserEntity> {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
          throw new Error(`User with id ${id} not found`);
        }
        return user;
      }


   /* async getUser(id: string): Promise<UserModel> {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new Error('User not found')
        }
        return user
    }*/

    async create(userData: Partial<UserEntity>): Promise<UserEntity> {
        const user = this.userRepository.create(userData);
        return this.userRepository.save(user);
      }
        
    
    /*create(user: Partial<UserEntity>): Promise<UserEntity> {
        return this.userRepository.save({ ...user })
    }*/

   

       /* update(user: UserInput) {
            return this.userRepository.save(user)
         }*/

    async update(id: string, updateData: Partial<UserEntity>): Promise<UserEntity> {
        await this.userRepository.update(id, updateData);
        return this.findOne(id);
      }
    
      async remove(id: string): Promise<boolean> {
        const result = await this.userRepository.delete(id);
        return (result.affected ?? 0) > 0;
    }
         
}

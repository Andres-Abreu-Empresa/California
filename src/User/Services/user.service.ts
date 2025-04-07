import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../Entity/user.entity";
import { Repository } from "typeorm";
import { UserModel } from "../Models/user.model";
import { UserInput } from "../Models/user.input";

@Injectable()
export class UserService {
    constructor (
    @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {} 

    getUsers(): Promise<UserEntity[]> {
        return this.userRepository.find()
    }
    
    async getUser(id: string): Promise<UserModel> {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new Error('User not found')
        }
        return user
    }
    
    create(user: Partial<UserEntity>): Promise<UserEntity> {
        return this.userRepository.save({ ...user })
    }

   /* async updateUser(id: string, name?: string, email?: string): Promise<UserModel> {
        const user = await this.userRepository.findOneBy({ id });
    
        if (!user) {
          throw new NotFoundException("User not found");
        }
    
        if (name) user.userName = name;
        if (email) user.email = email;
    
        return this.userRepository.save(user);
      }*/

        update(user: UserInput) {
            return this.userRepository.save(user)
         }
         
}

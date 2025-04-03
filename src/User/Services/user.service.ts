import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../Entity/user.entity";
import { Repository } from "typeorm";
import { UserModel } from "../Models/user.model";

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
}

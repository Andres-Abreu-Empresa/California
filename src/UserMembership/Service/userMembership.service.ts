import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserMembershipEntity } from '../Entity/userMembership.entity';
import { CreateUserMembershipInput } from '../Models/userMembership.input';
import { UserEntity } from 'src/User/Entity/user.entity';
import { MembershipEntity } from 'src/MemberShip/Entity/membership.entity';

@Injectable()
export class UserMembershipService {
  constructor(
    @InjectRepository(UserMembershipEntity)
    private readonly userMembershipRepo: Repository<UserMembershipEntity>,

    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,

    @InjectRepository(MembershipEntity)
    private readonly membershipRepo: Repository<MembershipEntity>,
  ) {}

  async create(input: CreateUserMembershipInput): Promise<UserMembershipEntity> {
    const user = await this.userRepo.findOne({ where: { id: input.userId } });
    const membership = await this.membershipRepo.findOne({ where: { id: input.membershipId } });

    if (!user || !membership) {
      throw new NotFoundException('User or Membership not found');
    }

    const userMembership = this.userMembershipRepo.create({
      user,
      membership,
      startDate: input.startDate,
      endDate: input.endDate,
      isActive: true,
    });

    return this.userMembershipRepo.save(userMembership);
  }

  async findAll(): Promise<UserMembershipEntity[]> {
    return this.userMembershipRepo.find({
      relations: ['user', 'membership'],
    });
  }

  async findOne(id: string): Promise<UserMembershipEntity> {
    const record = await this.userMembershipRepo.findOne({
      where: { id },
      relations: ['user', 'membership'],
    });

    if (!record) {
      throw new NotFoundException(`UserMembership with ID ${id} not found`);
    }

    return record;
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.userMembershipRepo.delete(id);
    return (result.affected ?? 0) > 0;
  }
}

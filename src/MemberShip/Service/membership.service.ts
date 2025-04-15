import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MembershipEntity } from '../Entity/membership.entity';
import { CreateMembershipInput } from '../Models/create-membership.input';

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(MembershipEntity)
    private readonly membershipRepository: Repository<MembershipEntity>,
  ) {}

  async create(input: CreateMembershipInput): Promise<MembershipEntity> {
    const membership = this.membershipRepository.create(input);
    return this.membershipRepository.save(membership);
  }

  async findAll(): Promise<MembershipEntity[]> {
    return this.membershipRepository.find();
  }

  async findOne(id: string): Promise<MembershipEntity> {
    const membership = await this.membershipRepository.findOne({ where: { id } });
    if (!membership) {
      throw new NotFoundException(`Membership with ID ${id} not found`);
    }
    return membership;
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.membershipRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}

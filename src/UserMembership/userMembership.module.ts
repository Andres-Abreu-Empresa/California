import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMembershipEntity } from './Entity/userMembership.entity';
import { UserMembershipService } from './Service/userMembership.service';
import { UserMembershipResolver } from './Resolver/userMembership.resolver';
import { UserEntity } from 'src/User/Entity/user.entity';
import { MembershipEntity } from 'src/MemberShip/Entity/membership.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserMembershipEntity, UserEntity, MembershipEntity])],
  providers: [UserMembershipService, UserMembershipResolver],
  exports: [UserMembershipService],
})
export class UserMembershipModule {}
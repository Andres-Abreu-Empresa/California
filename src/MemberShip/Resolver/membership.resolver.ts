import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MembershipService } from '../Service/membership.service';
import { MembershipEntity } from '../Entity/membership.entity';
import { CreateMembershipInput } from '../Models/create-membership.input';

@Resolver(() => MembershipEntity)
export class MembershipResolver {
  constructor(private readonly membershipService: MembershipService) {}

  @Mutation(() => MembershipEntity)
  createMembership(@Args('input') input: CreateMembershipInput): Promise<MembershipEntity> {
    return this.membershipService.create(input);
  }

  @Query(() => [MembershipEntity])
  memberships(): Promise<MembershipEntity[]> {
    return this.membershipService.findAll();
  }

  @Query(() => MembershipEntity)
  membership(@Args('id') id: string): Promise<MembershipEntity> {
    return this.membershipService.findOne(id);
  }

  @Mutation(() => Boolean)
  removeMembership(@Args('id') id: string): Promise<boolean> {
    return this.membershipService.remove(id);
  }
}

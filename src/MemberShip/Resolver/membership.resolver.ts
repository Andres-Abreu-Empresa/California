import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MembershipService } from '../Service/membership.service';
import { CreateMembershipInput } from '../Models/create-membership.input';
import { MembershipModel } from '../Models/membership.model';

@Resolver(() => MembershipModel)
export class MembershipResolver {
  constructor(private readonly membershipService: MembershipService) {}

  @Mutation(() => MembershipModel)
  createMembership(@Args('input') input: CreateMembershipInput): Promise<MembershipModel> {
    return this.membershipService.create(input);
  }

  @Query(() => [MembershipModel])
  memberships(): Promise<MembershipModel[]> {
    return this.membershipService.findAll();
  }

  @Query(() => MembershipModel)
  membership(@Args('id') id: string): Promise<MembershipModel> {
    return this.membershipService.findOne(id);
  }

  @Mutation(() => Boolean)
  removeMembership(@Args('id') id: string): Promise<boolean> {
    return this.membershipService.remove(id);
  }
}

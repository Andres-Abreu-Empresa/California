import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';



import { UserMembershipService } from '../Service/userMembership.service';
import { UserMembershipModel } from '../Models/userMembership.model';
import { CreateUserMembershipInput } from '../Models/userMembership.input';

@Resolver(() => UserMembershipModel)
export class UserMembershipResolver {
  constructor(private readonly service: UserMembershipService) {}

  @Mutation(() => UserMembershipModel)
  createUserMembership(
    @Args('input') input: CreateUserMembershipInput
  ): Promise<UserMembershipModel> {
    return this.service.create(input);
  }

  @Query(() => [UserMembershipModel])
  userMemberships(): Promise<UserMembershipModel[]> {
    return this.service.findAll();
  }

  @Query(() => UserMembershipModel)
  userMembership(@Args('id') id: string): Promise<UserMembershipModel> {
    return this.service.findOne(id);
  }

  @Mutation(() => Boolean)
  removeUserMembership(@Args('id') id: string): Promise<boolean> {
    return this.service.remove(id);
  }
}

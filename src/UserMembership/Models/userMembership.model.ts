import { ObjectType, Field, ID } from '@nestjs/graphql';
import { MembershipModel } from 'src/MemberShip/Models/membership.model';


import { UserModel } from 'src/User/Models/user.model';

@ObjectType()
export class UserMembershipModel {
  @Field(() => ID)
  id: string;

  @Field(() => UserModel)
  user: UserModel;

  @Field(() => MembershipModel)
  membership: MembershipModel;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field()
  isActive: boolean;
}

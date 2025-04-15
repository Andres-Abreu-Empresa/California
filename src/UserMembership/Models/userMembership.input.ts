import { Field, InputType } from "@nestjs/graphql";

@InputType('createusermembershipinput')
export class CreateUserMembershipInput {
  @Field()
  userId: string;

  @Field()
  membershipId: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;
}

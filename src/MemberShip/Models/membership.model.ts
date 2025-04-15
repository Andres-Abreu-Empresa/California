import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('membershipmodel')
export class MembershipModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  maxCourses: number;

  @Field()
  durationInDays: number;
}
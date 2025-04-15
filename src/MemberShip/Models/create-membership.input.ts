import { Field, InputType } from "@nestjs/graphql";

@InputType('createmembershipinput')
export class CreateMembershipInput {
    @Field()
    name: string;
  
    @Field()
    price: number;
  
    @Field()
    maxCourses: number;
  
    @Field()
    durationInDays: number;
  }
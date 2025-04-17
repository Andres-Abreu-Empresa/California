import { Field, ID, InputType } from "@nestjs/graphql";

@InputType('userInput')
export class CreateUserInput {
    @Field(() => ID, { nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;
  
  @Field({ nullable: true })
  passwordHash: string;

  @Field()
  role: 'professor' | 'student';
}
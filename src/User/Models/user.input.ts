import { Field, ID, InputType } from "@nestjs/graphql";
import { PrimaryColumn } from "typeorm";

@InputType('userInput')
export class CreateUserInput {
    @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  role: 'professor' | 'student';

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
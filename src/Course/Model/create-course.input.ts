import { Field, InputType } from "@nestjs/graphql";

@InputType('createcourseinput')
export class CreateCourseInput {
    @Field()
    name: string;
  
    @Field({ nullable: true })
    description?: string;
  
    @Field()
    professorId: string;
  }
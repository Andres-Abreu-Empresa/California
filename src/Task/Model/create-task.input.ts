import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateTaskInput {
  @Field()
  courseId: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  dueDate: Date;
}


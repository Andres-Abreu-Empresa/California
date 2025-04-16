import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SubmitTaskInput {
  @Field()
  taskId: string;

  @Field()
  studentId: string;

  @Field({ nullable: true })
  content?: string;

  @Field()
  submittedAt: Date;
}



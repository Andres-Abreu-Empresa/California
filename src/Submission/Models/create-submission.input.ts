import { InputType, Field, ID, Float } from '@nestjs/graphql';

@InputType()
export class CreateSubmissionInput {
  @Field()
  content: string;

  @Field(() => ID)
  taskId: string;

  @Field(() => ID)
  studentId: string;

  @Field(() => Float, { nullable: true })
  grade?: number;
}


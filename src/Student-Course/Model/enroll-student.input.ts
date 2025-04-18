import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class EnrollStudentInput {
  @Field()
  studentId: string;

  @Field()
  courseId: string;
}

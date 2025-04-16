import { Field, ID, ObjectType } from "@nestjs/graphql";
import { CourseEntity } from "src/Course/Entity/course.entity";
import { UserEntity } from "src/User/Entity/user.entity";

@ObjectType()
export class StudentCourseModel {
  @Field(() => ID)
  id: string;

  @Field(() => UserEntity)
  student: UserEntity;

  @Field(() => CourseEntity)
  course: CourseEntity;
}

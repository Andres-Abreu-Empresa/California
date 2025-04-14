import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";

export enum UserRole {
    PROFESSOR = 'professor',
    STUDENT = 'student',
  }
  
  registerEnumType(UserRole, {
    name: 'UserRole',
  });
  
  @ObjectType('userModel')
  export class UserModel {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field()
  email: string

  @Field()
  role: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
    /*
  
    @Field(() => [Course], { nullable: true })
    courses?: Course[];
  
    @Field(() => [StudentCourse], { nullable: true })
    enrolledCourses?: StudentCourse[];
  
    @Field(() => [ForumPost], { nullable: true })
    posts?: ForumPost[];
    */
}
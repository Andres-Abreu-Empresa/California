import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { CourseEntity } from "src/Course/Entity/course.entity";
import { ForumPostEntity } from "src/Forum-Post/Entity/forum-post.entity";
import { StudentCourseEntity } from "src/Student-Course/Entity/student-course.entity";

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

  @Field({ nullable: true })
  name: string

  @Field({ nullable: true  })
  email: string

  @Field({ nullable: true  })
  role: string

  @Field({ nullable: true  })
  createdAt: Date

  @Field({ nullable: true  })
  updatedAt: Date
  
    @Field(() => [CourseEntity], { nullable: true })
    courses?: CourseEntity[];
  
    @Field(() => [StudentCourseEntity], { nullable: true })
    enrolledCourses?: StudentCourseEntity[];
  
    @Field(() => [ForumPostEntity], { nullable: true })
    posts?: ForumPostEntity[];
    
}
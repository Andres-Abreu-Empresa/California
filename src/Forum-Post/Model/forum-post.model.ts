import { Field, ID, ObjectType } from "@nestjs/graphql";
import { CourseEntity } from "src/Course/Entity/course.entity";
import { UserEntity } from "src/User/Entity/user.entity";

@ObjectType()
export class ForumPostModel {
  @Field(() => ID)
  id: string;

  @Field(() => CourseEntity)
  course: CourseEntity;

  @Field(() => UserEntity)
  user: UserEntity;

  @Field(() => ForumPostModel, { nullable: true })
  parent?: ForumPostModel;

  @Field(() => [ForumPostModel], { nullable: true })
  replies?: ForumPostModel[];

  @Field()
  content: string;

  @Field()
  createdAt: Date;
}

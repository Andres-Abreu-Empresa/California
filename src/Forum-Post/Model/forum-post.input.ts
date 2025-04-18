import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateForumPostInput {
  @Field()
  courseId: string;

  @Field()
  userId: string;

  @Field({ nullable: true })
  parentId?: string;

  @Field()
  content: string;
}

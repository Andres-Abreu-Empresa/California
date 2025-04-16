import { Field, ID, ObjectType } from "@nestjs/graphql";
import { TaskEntity } from "src/Task/Entity/task.entity";
import { UserEntity } from "src/User/Entity/user.entity";

@ObjectType()
export class TaskSubmissionModel {
  @Field(() => ID)
  id: string;

  @Field(() => TaskEntity)
  task: TaskEntity;

  @Field(() => UserEntity)
  student: UserEntity;

  @Field({ nullable: true })
  content?: string;

  @Field({ nullable: true })
  grade?: number;

  @Field({ nullable: true })
  feedback?: string;

  @Field()
  submittedAt: Date;
}

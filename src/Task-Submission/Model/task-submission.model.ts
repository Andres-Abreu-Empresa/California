import { Field, ID, ObjectType } from "@nestjs/graphql";
import { TaskEntity } from "src/Task/Entity/task.entity";
import { TaskModel } from "src/Task/Model/task.model";
import { UserEntity } from "src/User/Entity/user.entity";
import { ManyToOne } from "typeorm";

@ObjectType()
export class TaskSubmissionModel {
  @Field(() => ID)
  id: string;

  @ManyToOne(() => TaskModel, task => task.submissions)
  task: TaskModel;

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

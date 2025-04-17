import { Field, ID, ObjectType } from "@nestjs/graphql";
import { CourseEntity } from "src/Course/Entity/course.entity";
import { TaskSubmissionModel } from "src/Task-Submission/Model/task-submission.model";
import { OneToMany } from "typeorm";

@ObjectType()
export class TaskModel {
  @Field(() => ID)
  id: string;

  @Field(() => CourseEntity)
  course: CourseEntity;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  dueDate: Date;

  @Field()
  createdAt: Date;

  @OneToMany(() => TaskSubmissionModel, submission => submission.task)
  submissions: TaskSubmissionModel[];

}

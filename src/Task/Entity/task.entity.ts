import { CourseEntity } from "src/Course/Entity/course.entity";
import { TaskSubmissionModel } from "src/Task-Submission/Model/task-submission.model";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CourseEntity, course => course.tasks)
  course: CourseEntity;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  dueDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => TaskSubmissionModel, submission => submission.task)
  submissions: TaskSubmissionModel[];
}

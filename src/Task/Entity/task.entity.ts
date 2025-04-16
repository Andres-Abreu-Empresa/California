import { CourseEntity } from "src/Course/Entity/course.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Course, course => course.tasks)
  course: CourseEntity;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  dueDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => TaskSubmission, submission => submission.task)
  submissions: TaskSubmission[];
}

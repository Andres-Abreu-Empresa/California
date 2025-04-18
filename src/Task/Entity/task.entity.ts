// src/Task/Entity/task.entity.ts

import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CourseEntity } from 'src/Course/Entity/course.entity';
import { SubmissionEntity } from 'src/Submission/Entity/submission.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity('task')
@ObjectType()
export class TaskEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CourseEntity, (course) => course.tasks, { onDelete: 'CASCADE' })
  course: CourseEntity;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  dueDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => SubmissionEntity, (submission) => submission.task)
  submissions: SubmissionEntity[];
}

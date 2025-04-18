// src/Submission/Entity/submission.entity.ts

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { TaskEntity } from 'src/Task/Entity/task.entity';
import { UserEntity } from 'src/User/Entity/user.entity';

@Entity('submissions')
@ObjectType()
export class SubmissionEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'float', nullable: true })
  grade: number;

  @CreateDateColumn()
  submittedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.submissions, { onDelete: 'CASCADE' })
  student: UserEntity;

  @ManyToOne(() => TaskEntity, (task) => task.submissions, { onDelete: 'CASCADE' })
  task: TaskEntity;
}

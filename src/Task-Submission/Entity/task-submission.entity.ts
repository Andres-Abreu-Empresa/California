import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
  } from 'typeorm';
  
import { TaskEntity } from 'src/Task/Entity/task.entity';
import { UserEntity } from 'src/User/Entity/user.entity';
  
  @Entity()
  export class TaskSubmissionEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => TaskEntity, task => task.submissions)
    task: TaskEntity;
  
    @ManyToOne(() => UserEntity)
    student: UserEntity;
  
    @Column({ type: 'text', nullable: true })
    content: string;
  
    @Column({ nullable: true })
    grade: number;
  
    @Column({ nullable: true })
    feedback: string;
  
    @Column()
    submittedAt: Date;
  }
  
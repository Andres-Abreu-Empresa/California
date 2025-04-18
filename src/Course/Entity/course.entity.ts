import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ForumPostEntity } from "src/Forum-Post/Entity/forum-post.entity";
import { StudentCourseEntity } from "src/Student-Course/Entity/student-course.entity";
import { TaskEntity } from "src/Task/Entity/task.entity";
import { UserEntity } from "src/User/Entity/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('course')
@ObjectType()
export class CourseEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => UserEntity, user => user.courses)
  professor: UserEntity;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => StudentCourseEntity, sc => sc.course)
  studentCourses: StudentCourseEntity[];

  @OneToMany(() => TaskEntity, task => task.course)
  tasks: TaskEntity[];
  

  @OneToMany(() => ForumPostEntity, post => post.course)
  forumPosts: ForumPostEntity[];
  
}

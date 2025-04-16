import { UserEntity } from "src/User/Entity/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('course')
export class CourseEntity {
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

  @OneToMany(() => StudentCourse, sc => sc.course)
  studentCourses: StudentCourse[];

  @OneToMany(() => Task, task => task.course)
  tasks: Task[];

  @OneToMany(() => ForumPost, post => post.course)
  forumPosts: ForumPost[];
  */
}

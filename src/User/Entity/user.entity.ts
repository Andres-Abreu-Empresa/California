import { CourseEntity } from "src/Course/Entity/course.entity";
import { ForumPostEntity } from "src/Forum-Post/Entity/forum-post.entity";
import { StudentCourseEntity } from "src/Student-Course/Entity/student-course.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("user")

export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    email: string

    @Column({ nullable: false })
    passwordHash: string;

    @Column({ type: 'enum', enum: ['professor', 'student'] })
    role: 'professor' | 'student';

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

  
  @OneToMany(() => CourseEntity, course => course.professor)
  courses: CourseEntity[];

  @OneToMany(() => StudentCourseEntity, sc => sc.student)
  enrolledCourses: StudentCourseEntity[];
  
  @OneToMany(() => ForumPostEntity, post => post.user)
  posts: ForumPostEntity[];
  
}


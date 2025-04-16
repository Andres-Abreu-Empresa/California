import { CourseEntity } from "src/Course/Entity/course.entity";
import { StudentCourse } from "src/Student-Course/Entity/student-course.entity";
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

  @OneToMany(() => StudentCourse, sc => sc.student)
  enrolledCourses: StudentCourse[];
  /*
  @OneToMany(() => ForumPost, post => post.user)
  posts: ForumPost[];
  */ 
}


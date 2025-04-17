import { Field, ID, ObjectType } from "@nestjs/graphql";
import { CourseEntity } from "src/Course/Entity/course.entity";
import { ForumPostEntity } from "src/Forum-Post/Entity/forum-post.entity";
import { MembershipEntity } from "src/MemberShip/Entity/membership.entity";
import { StudentCourseEntity } from "src/Student-Course/Entity/student-course.entity";
import { SubmissionEntity } from "src/Submission/Entity/submission.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("user")
@ObjectType()
export class UserEntity {
  @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({ nullable: true })
    name: string

    @Column({ nullable: true })
    email: string

    @Column({ nullable: true })
    passwordHash: string;

    @Column({ type: 'enum', enum: ['professor', 'student'], nullable: true  })
    role: 'professor' | 'student';

    @CreateDateColumn({ nullable: true  })
    createdAt: Date;

    @UpdateDateColumn({ nullable: true  })
    updatedAt: Date;
  
    @OneToMany(() => CourseEntity, (course) => course.professor)
    courses: CourseEntity[];

    @OneToMany(() => StudentCourseEntity, (sc) => sc.student)
    enrolledCourses: StudentCourseEntity[];
    
    @OneToMany(() => ForumPostEntity, (post) => post.user)
    posts: ForumPostEntity[];

    @OneToMany(() => SubmissionEntity, (submission) => submission.student)
    submissions: SubmissionEntity[];

    @OneToMany(() => MembershipEntity, (membership) => membership.user)
    memberships: MembershipEntity[];
}


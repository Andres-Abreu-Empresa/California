import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from 'src/User/Entity/user.entity';
import { CourseEntity } from 'src/Course/Entity/course.entity';

@Entity()
export class StudentCourseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, user => user.enrolledCourses)
  student: UserEntity;

  @ManyToOne(() => CourseEntity, course => course.studentCourses)
  course: CourseEntity;
}

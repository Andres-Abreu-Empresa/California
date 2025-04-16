import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentCourseEntity } from './Entity/student-course.entity';
import { StudentCourseService } from './Service/student-course.service';
import { StudentCourseResolver } from './Resolver/student-course.resolver';
import { UserEntity } from 'src/User/Entity/user.entity';
import { CourseEntity } from 'src/Course/Entity/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentCourseEntity, UserEntity, CourseEntity])],
  providers: [StudentCourseService, StudentCourseResolver],
})
export class StudentCourseModule {}

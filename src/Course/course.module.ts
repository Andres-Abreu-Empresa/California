import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './Entity/course.entity';
import { CourseService } from './Service/course.service';
import { CourseResolver } from './Resolver/course.resolver';
import { UserEntity } from 'src/User/Entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity, UserEntity])],
  providers: [CourseService, CourseResolver],
  exports: [CourseService],
})
export class CourseModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './Entity/task.entity';
import { TaskService } from './Service/task.service';
import { TaskResolver } from './Resolver/task.resolver';
import { CourseEntity } from 'src/Course/Entity/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, CourseEntity])],
  providers: [TaskService, TaskResolver],
})
export class TaskModule {}

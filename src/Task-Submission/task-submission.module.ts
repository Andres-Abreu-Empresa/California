import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskSubmissionEntity } from './Entity/task-submission.entity';
import { TaskSubmissionService } from './Service/task-submission.service';
import { TaskSubmissionResolver } from './Resolver/task-submission.resolver';
import { TaskEntity } from 'src/Task/Entity/task.entity';
import { UserEntity } from 'src/User/Entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskSubmissionEntity, TaskEntity, UserEntity])],
  providers: [TaskSubmissionService, TaskSubmissionResolver],
})
export class TaskSubmissionModule {}

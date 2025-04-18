import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmissionEntity } from './Entity/submission.entity';
import { SubmissionService } from './Service/submission.service';
import { SubmissionResolver } from './Resolver/submission.resolver';
import { TaskEntity } from 'src/Task/Entity/task.entity';
import { UserEntity } from 'src/User/Entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubmissionEntity, TaskEntity, UserEntity])],
  providers: [SubmissionService, SubmissionResolver],
  exports: [SubmissionService],
})
export class SubmissionModule {}

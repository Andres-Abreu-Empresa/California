import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';




import { TaskSubmissionEntity } from '../Entity/task-submission.entity';
import { SubmitTaskInput } from '../Model/submit-task.input';
import { TaskEntity } from 'src/Task/Entity/task.entity';
import { UserEntity } from 'src/User/Entity/user.entity';

@Injectable()
export class TaskSubmissionService {
  constructor(
    @InjectRepository(TaskSubmissionEntity)
    private submissionRepo: Repository<TaskSubmissionEntity>,

    @InjectRepository(TaskEntity)
    private taskRepo: Repository<TaskEntity>,

    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  async submitTask(input: SubmitTaskInput): Promise<TaskSubmissionEntity> {
    const task = await this.taskRepo.findOne({ where: { id: input.taskId } });
    if (!task) throw new NotFoundException('Task not found');

    const student = await this.userRepo.findOne({ where: { id: input.studentId } });
    if (!student) throw new NotFoundException('Student not found');

    const submission = this.submissionRepo.create({
      task,
      student,
      content: input.content,
      submittedAt: input.submittedAt,
    });

    return this.submissionRepo.save(submission);
  }

  async findAll(): Promise<TaskSubmissionEntity[]> {
    return this.submissionRepo.find({ relations: ['task', 'student'] });
  }

  async findOne(id: string): Promise<TaskSubmissionEntity> {
    const submission = await this.submissionRepo.findOne({
      where: { id },
      relations: ['task', 'student'],
    });

    if (!submission) throw new NotFoundException('Submission not found');
    return submission;
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.submissionRepo.delete(id);
    return !!result.affected;
  }
}

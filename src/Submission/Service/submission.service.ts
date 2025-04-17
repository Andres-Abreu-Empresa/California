import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubmissionEntity } from '../Entity/submission.entity';
import { CreateSubmissionInput } from '../Models/create-submission.input';
import { UpdateSubmissionInput } from '../Models/update-submission.input';

@Injectable()
export class SubmissionService {
  constructor(
    @InjectRepository(SubmissionEntity)
    private submissionRepo: Repository<SubmissionEntity>,
  ) {}

    create(data: CreateSubmissionInput) {
    const submission = this.submissionRepo.create({
      ...data,
      task: { id: data.taskId },
      student: { id: data.studentId },
    });
    return this.submissionRepo.save(submission);
  }

  findAll() {
    return this.submissionRepo.find({ relations: ['task', 'student'] });
  }

  findOne(id: string) {
    return this.submissionRepo.findOne({
      where: { id },
      relations: ['task', 'student'],
    });
  }

  async update(data: UpdateSubmissionInput) {
    const existing = await this.submissionRepo.findOneBy({ id: data.id });
    if (!existing) throw new Error('Submission not found');
    Object.assign(existing, data);
    return this.submissionRepo.save(existing);
  }

  async removeSubmission(id: string): Promise<SubmissionEntity> {
    const submission = await this.submissionRepo.findOneBy({ id });
  
    if (!submission) {
      throw new NotFoundException('Submission not found');
    }
  
    return this.submissionRepo.remove(submission);
  }
  async remove(id: string): Promise<SubmissionEntity> {
    const submission = await this.submissionRepo.findOne({ where: { id } });
  
    if (!submission) {
      throw new NotFoundException(`Submission with id ${id} not found`);
    }
  
    await this.submissionRepo.remove(submission);
    return submission;
  }
  
  
}

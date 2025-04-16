import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from '../Entity/task.entity';
import { CreateTaskInput } from '../Model/create-task.input';
import { CourseEntity } from 'src/Course/Entity/course.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepo: Repository<TaskEntity>,
    @InjectRepository(CourseEntity)
    private courseRepo: Repository<CourseEntity>,
  ) {}

  async create(input: CreateTaskInput): Promise<TaskEntity> {
    const course = await this.courseRepo.findOne({ where: { id: input.courseId } });
    if (!course) throw new NotFoundException('Course not found');

    const task = this.taskRepo.create({
      title: input.title,
      description: input.description,
      dueDate: input.dueDate,
      course,
    });

    return this.taskRepo.save(task);
  }

  async findAll(): Promise<TaskEntity[]> {
    return this.taskRepo.find({ relations: ['course'] });
  }

  async findOne(id: string): Promise<TaskEntity> {
    const task = await this.taskRepo.findOne({ where: { id }, relations: ['course'] });
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.taskRepo.delete(id);
    return !!result.affected;
  }
}

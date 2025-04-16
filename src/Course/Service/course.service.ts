import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';




import { CourseEntity } from '../Entity/course.entity';
import { CreateCourseInput } from '../Model/create-course.input';
import { UserEntity } from 'src/User/Entity/user.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseEntity)
    private courseRepository: Repository<CourseEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<CourseEntity[]> {
    return this.courseRepository.find({ relations: ['professor'] });
  }

  async findOne(id: string): Promise<CourseEntity> {
    const course = await this.courseRepository.findOne({
      where: { id },
      relations: ['professor'],
    });
    if (!course) throw new NotFoundException(`Course with ID ${id} not found`);
    return course;
  }

  async create(input: CreateCourseInput): Promise<CourseEntity> {
    const professor = await this.userRepository.findOne({ where: { id: input.professorId } });
    if (!professor) {
      throw new NotFoundException(`Professor with ID ${input.professorId} not found`);
    }

    const course = this.courseRepository.create({
      name: input.name,
      description: input.description,
      professor,
    });

    return this.courseRepository.save(course);
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.courseRepository.delete(id);
    return !!result.affected;
  }
}

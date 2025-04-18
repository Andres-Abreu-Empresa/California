import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentCourseEntity } from '../Entity/student-course.entity';
import { EnrollStudentInput } from '../Model/enroll-student.input';
import { UserEntity } from 'src/User/Entity/user.entity';
import { CourseEntity } from 'src/Course/Entity/course.entity';

@Injectable()
export class StudentCourseService {
  constructor(
    @InjectRepository(StudentCourseEntity)
    private studentCourseRepo: Repository<StudentCourseEntity>,
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
    @InjectRepository(CourseEntity)
    private courseRepo: Repository<CourseEntity>,
  ) {}

  async enrollStudent(input: EnrollStudentInput): Promise<StudentCourseEntity> {
    const student = await this.userRepo.findOne({ where: { id: input.studentId } });
    if (!student) throw new NotFoundException('Student not found');

    const course = await this.courseRepo.findOne({ where: { id: input.courseId } });
    if (!course) throw new NotFoundException('Course not found');

    const enrollment = this.studentCourseRepo.create({ student, course });
    return this.studentCourseRepo.save(enrollment);
  }

  async findAll(): Promise<StudentCourseEntity[]> {
    return this.studentCourseRepo.find({ relations: ['student', 'course'] });
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.studentCourseRepo.delete(id);
    return !!result.affected;
  }
}

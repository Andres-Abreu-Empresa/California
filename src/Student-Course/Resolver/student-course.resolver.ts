import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';



import { StudentCourseService } from '../Service/student-course.service';
import { StudentCourseModel } from '../Model/student-course.model';
import { EnrollStudentInput } from '../Model/enroll-student.input';

@Resolver(() => StudentCourseModel)
export class StudentCourseResolver {
  constructor(private readonly studentCourseService: StudentCourseService) {}

  @Mutation(() => StudentCourseModel)
  async enrollStudent(@Args('input') input: EnrollStudentInput): Promise<StudentCourseModel> {
    return this.studentCourseService.enrollStudent(input);
  }

  @Query(() => [StudentCourseModel])
  async studentCourses(): Promise<StudentCourseModel[]> {
    return this.studentCourseService.findAll();
  }

  @Mutation(() => Boolean)
  async removeEnrollment(@Args('id') id: string): Promise<boolean> {
    return this.studentCourseService.remove(id);
  }
}

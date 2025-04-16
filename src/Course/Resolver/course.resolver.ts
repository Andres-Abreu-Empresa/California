import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';



import { CourseService } from '../Service/course.service';
import { CourseModel } from '../Model/course.model';
import { CreateCourseInput } from '../Model/create-course.input';

@Resolver(() => CourseModel)
export class CourseResolver {
  constructor(private readonly courseService: CourseService) {}

  @Query(() => [CourseModel])
  async courses(): Promise<CourseModel[]> {
    return this.courseService.findAll();
  }

  @Query(() => CourseModel)
  async course(@Args('id') id: string): Promise<CourseModel> {
    return this.courseService.findOne(id);
  }

  @Mutation(() => CourseModel)
  async createCourse(@Args('input') input: CreateCourseInput): Promise<CourseModel> {
    return this.courseService.create(input);
  }

  @Mutation(() => Boolean)
  async removeCourse(@Args('id') id: string): Promise<boolean> {
    return this.courseService.remove(id);
  }
}

import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';



import { TaskSubmissionModel } from '../Model/task-submission.model';
import { TaskSubmissionService } from '../Service/task-submission.service';
import { SubmitTaskInput } from '../Model/submit-task.input';

@Resolver(() => TaskSubmissionModel)
export class TaskSubmissionResolver {
  constructor(private readonly service: TaskSubmissionService) {}

  @Mutation(() => TaskSubmissionModel)
  async submitTask(
    @Args('input') input: SubmitTaskInput,
  ): Promise<TaskSubmissionModel> {
    return this.service.submitTask(input);
  }

  @Query(() => [TaskSubmissionModel])
  async taskSubmissions(): Promise<TaskSubmissionModel[]> {
    return this.service.findAll();
  }

  @Query(() => TaskSubmissionModel)
  async taskSubmission(@Args('id') id: string): Promise<TaskSubmissionModel> {
    return this.service.findOne(id);
  }

  @Mutation(() => Boolean)
  async removeTaskSubmission(@Args('id') id: string): Promise<boolean> {
    return this.service.remove(id);
  }
}

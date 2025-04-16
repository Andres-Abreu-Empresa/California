import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskService } from '../Service/task.service';
import { TaskModel } from '../Model/task.model';
import { CreateTaskInput } from '../Model/create-task.input';

@Resolver(() => TaskModel)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Mutation(() => TaskModel)
  async createTask(@Args('input') input: CreateTaskInput): Promise<TaskModel> {
    return this.taskService.create(input);
  }

  @Query(() => [TaskModel])
  async tasks(): Promise<TaskModel[]> {
    return this.taskService.findAll();
  }

  @Query(() => TaskModel)
  async task(@Args('id') id: string): Promise<TaskModel> {
    return this.taskService.findOne(id);
  }

  @Mutation(() => Boolean)
  async removeTask(@Args('id') id: string): Promise<boolean> {
    return this.taskService.remove(id);
  }
}

import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { SubmissionService } from '../Service/submission.service';
import { SubmissionModel } from '../Models/submission.model';
import { CreateSubmissionInput } from '../Models/create-submission.input';
import { UpdateSubmissionInput } from '../Models/update-submission.input';
import { NotFoundException } from '@nestjs/common';

@Resolver(() => SubmissionModel)
export class SubmissionResolver {
  constructor(private readonly submissionService: SubmissionService) {}

  @Mutation(() => SubmissionModel)
  createSubmission(
    @Args('input') input: CreateSubmissionInput,
  ): Promise<SubmissionModel> {
    return this.submissionService.create(input);
  }

  @Query(() => [SubmissionModel])
  submissions(): Promise<SubmissionModel[]> {
    return this.submissionService.findAll();
  }

  @Query(() => SubmissionModel)
  async submission(@Args('id', { type: () => ID }) id: string): Promise<SubmissionModel> {
    const submission = await this.submissionService.findOne(id);
  
    if (!submission) {
      throw new NotFoundException(`Submission with id ${id} not found`);
    }
  
    return submission;
  }
  
  @Mutation(() => SubmissionModel)
  updateSubmission(
    @Args('input') input: UpdateSubmissionInput,
  ): Promise<SubmissionModel> {
    return this.submissionService.update(input);
  }

  @Mutation(() => SubmissionModel)
  removeSubmission(@Args('id', { type: () => ID }) id: string): Promise<SubmissionModel> {
    return this.submissionService.remove(id);
  }
}

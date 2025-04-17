import { InputType, Field, ID, Float, PartialType } from '@nestjs/graphql';
import { CreateSubmissionInput } from './create-submission.input';

@InputType()
export class UpdateSubmissionInput extends PartialType(CreateSubmissionInput) {
  @Field(() => ID)
  id: string;
}

import { ObjectType } from '@nestjs/graphql';
import { SubmissionEntity } from '../Entity/submission.entity';

@ObjectType()
export class SubmissionModel extends SubmissionEntity {}

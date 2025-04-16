import { Field, ID, ObjectType } from "@nestjs/graphql";
import { UserEntity } from "src/User/Entity/user.entity";

@ObjectType()
export class CourseModel {
    @Field(() => ID)
    id: string;
  
    @Field()
    name: string;
  
    @Field({ nullable: true })
    description?: string;
  
    @Field(() => UserEntity)
    professor: UserEntity;
  
    @Field()
    createdAt: Date;
  }
  
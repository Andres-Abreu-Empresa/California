import { Field, ID, ObjectType } from "@nestjs/graphql";
import { UserEntity } from "src/User/Entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('membership')
@ObjectType()
export class MembershipEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  
    @Column('decimal')
    price: number;
  
    @Column()
    maxCourses: number;
  
    @Column()
    durationInDays: number;

    @Field(() => UserEntity)
    @ManyToOne(() => UserEntity, (user) => user.memberships, { onDelete: 'CASCADE' })
    user: UserEntity;
  }
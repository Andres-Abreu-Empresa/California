import { Field, ObjectType } from "@nestjs/graphql";
import { PrimaryGeneratedColumn } from "typeorm";

@ObjectType('personModel')
export class PersonModel{

    @Field()
    id: string

    @Field()
    firstName: string

    @Field()
    lastName: string

    @Field()
    dateOfBirth: Date

    @Field()
    occupation: string

    @Field({ nullable: true })
    user: string

    @Field()
    gender: string

    @Field({ nullable: true })
    identityDocument: number

    @Field({ nullable: true })
    ssn: number //Numero de seguro 

    @Field()
    phoneNumber: number

    @Field()
    emailPerson: string

    @Field({ nullable: true })
    address: string

}
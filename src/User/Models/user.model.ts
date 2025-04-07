import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType('userModel')

export class UserModel {
    @Field()
    id: string
    
    @Field()
    userName: string

    @Field()
    email: string

    @Field()
    password: string 

    @Field()
    role: string

    @Field({ nullable: true })
    timeZone: string

    @Field({ nullable: true })
    lastLogin: string

    @Field({ nullable: true })
    language: string 

    @Field({ nullable: true })
    permissions: string 

    @Field({ nullable: true })
    person: string
}
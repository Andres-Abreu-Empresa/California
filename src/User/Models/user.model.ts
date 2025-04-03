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

    @Field()
    timeZone: string

    @Field()
    lastLogin: string

    @Field()
    language: string 

    @Field()
    permissions: string 

    @Field()
    Person: string
}
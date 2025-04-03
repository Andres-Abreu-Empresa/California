import { Field, InputType } from "@nestjs/graphql";
import { PrimaryColumn } from "typeorm";

@InputType('userInput')
export class UserInput {
    @Field({ nullable: true })
    id: string

    @Field()
    userName: string
    
    @Field()
    email: string

    @Field()
    password: string 

    @Field()
    role: string
}

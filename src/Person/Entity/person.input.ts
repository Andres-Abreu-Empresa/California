import { Field, InputType } from "@nestjs/graphql";

@InputType('personInput')
export class PersonInput {
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
    addres: string
}
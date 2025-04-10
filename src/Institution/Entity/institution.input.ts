import { Field, InputType } from "@nestjs/graphql";

@InputType('institutionInput')
export class InstitutionInput {
    @Field({ nullable: true })
    id: string
    
    @Field()
    institutionName: string

    @Field()
    typeInstitution: string
    
    @Field()
    educationalLevel: string 

    @Field({ nullable: true })
    fullAddress: string 

    @Field()
    phoneNumber: string 

    @Field({ nullable: true })
    email: string

    @Field({ nullable: true })
    webPage: string

    @Field({ nullable: true })
    dateFounded: string
    
    @Field({ nullable: true })
    Accreditations: string  //Certificaciones obtenidas por la institucion 

    @Field({ nullable: true })
    programStudy: string

    @Field({ nullable: true })
    Director: string

    @Field({ nullable: true })
    socialMedia: string
}
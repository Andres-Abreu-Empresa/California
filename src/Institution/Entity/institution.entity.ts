import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

Entity("institution")

export class InstitutionEntity{

    @PrimaryGeneratedColumn('uuid')
    idInstitution: string

    @Column()
    institucionalName: string 

    @Column()
    typeImstitution: string

    @Column()
    educationalLevel: string 

    @Column()
    fullAddress: string 

    @Column()
    phoneNumber: string 

    @Column()
    email: string

    @Column()
    webPage: string

    @Column()
    dateFounded: string
    
    @Column()
    Accreditations: string

    @Column()
    programStudy: string

    @Column()
    Director: string

    @Column()
    socialMedia: string

}
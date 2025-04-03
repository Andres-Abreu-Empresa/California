import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("person")

export class PersonEntity {
    
    @PrimaryGeneratedColumn('uuid')
    idPerson: string 

    @Column()
    firstName: string 

    @Column()
    lastName: string 

    @Column()
    dateOfBirth: Date

    @Column()
    occupation: string 

    @Column()
    user: string 
    
    @Column()
    gender: string

    @Column()
    identityDocument: number

    @Column()
    ssn: number

    @Column()
    phoneNumber: number

    @Column()
    EmailPerson: string 

    @Column()
    Address: string 




}
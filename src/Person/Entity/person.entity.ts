import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("person")

export class PersonEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string 

    @Column()
    firstName: string 

    @Column()
    lastName: string 

    @Column()
    dateOfBirth: Date

    @Column()
    occupation: string 
    
    @Column()
    gender: string          //Genero

    @Column()
    identityDocument: number            //Cedula del usuario

    @Column()
    ssn: number         //Numero de seguro 

    @Column()
    phoneNumber: number

    @Column()
    emailPerson: string 

    @Column({nullable:true})
    address: string         //Direccion de residencia

}
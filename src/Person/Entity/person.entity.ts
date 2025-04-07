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
    user: string        //Campo para hacer la relacion de user a Person
    
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

    @Column()
    address: string         //Direccion de residencia

}
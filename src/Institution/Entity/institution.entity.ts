import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("institution")
export class InstitutionEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    institutionName: string 

    @Column()
    typeInstitution: string

    @Column()
    educationalLevel: string 

    @Column({ nullable: true })
    fullAddress: string 

    @Column()
    phoneNumber: string 

    @Column({ nullable: true })
    email: string

    @Column({ nullable: true })
    webPage: string

    @Column({ nullable: true })
    dateFounded: string
    
    @Column({ nullable: true })
    Accreditations: string  //Certificaciones obtenidas por la institucion 

    @Column({ nullable: true })
    programStudy: string

    @Column({ nullable: true })
    Director: string

    @Column({ nullable: true })
    socialMedia: string

}
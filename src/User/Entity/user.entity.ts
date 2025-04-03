import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")

export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column()
    userName: string

    @Column()
    email: string

    @Column()
    password: string 

    @Column()
    role: string

    @Column({ nullable: true })
    timeZone: string

    @Column({ nullable: true })
    lastLogin: string

    @Column({ nullable: true })
    language: string 

    @Column({ nullable: true })
    permissions: string 

    @Column({ nullable: true })
    person: string

    @Column({nullable: true })
    classR: string 
}


import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('membershipentity')
export class MembershipEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  
    @Column('decimal')
    price: number;
  
    @Column()
    maxCourses: number;
  
    @Column()
    durationInDays: number;
  }
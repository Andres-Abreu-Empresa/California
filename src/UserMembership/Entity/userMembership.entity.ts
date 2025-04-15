import { MembershipEntity } from "src/MemberShip/Entity/membership.entity";
import { UserEntity } from "src/User/Entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('usermembershipentity')
export class UserMembershipEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => UserEntity)
    user: UserEntity;
  
    @ManyToOne(() => MembershipEntity)
    membership: MembershipEntity;
  
    @Column()
    startDate: Date;
  
    @Column()
    endDate: Date;
  
    @Column({ default: true })
    isActive: boolean;
  }
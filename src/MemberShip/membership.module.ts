import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MembershipService } from "./Service/membership.service";
import { MembershipResolver } from "./Resolver/membership.resolver";
import { MembershipEntity } from "./Entity/membership.entity";

@Module({
    imports: [TypeOrmModule.forFeature([MembershipEntity])],
    providers: [MembershipService, MembershipResolver],
    exports: [MembershipService, MembershipResolver],
  })
  export class MembershipModule {}
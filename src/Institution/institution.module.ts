import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InstitutionEntity } from "./Entity/institution.entity";
import { InstitutionService } from "./Services/institution.service";
import { InstitutionResolver } from "./Resolvers/institution.resolver";

@Module({
    imports: [TypeOrmModule.forFeature([InstitutionEntity])],
    providers: [InstitutionService, InstitutionResolver],
    exports: [InstitutionService, InstitutionResolver],
})
export class InstitutionModule{}
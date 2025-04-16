import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonService } from "./Service/person.service";
import { PersonResolver } from "./Resolver/person.resolver";
import { PersonEntity } from "./Entity/person.entity";

@Module({
    imports: [TypeOrmModule.forFeature([PersonEntity])],
    providers: [PersonService, PersonResolver],
    exports: [PersonService, PersonResolver],
  })
  export class PersonModule {}

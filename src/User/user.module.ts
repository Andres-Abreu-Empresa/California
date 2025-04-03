import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./Entity/user.entity";
import { UserService } from "./Services/user.service";
import { UserResolver } from "./Resolvers/user.resolver";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UserService, UserResolver],
    exports: [UserService, UserResolver],
  })
  export class UserModule {}

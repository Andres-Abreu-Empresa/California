        import { Resolver, Query, Args, Int, Mutation} from "@nestjs/graphql";
        import { UserModel } from "../Models/user.model";
        import { UserService } from "../Services/user.service";
import { UserInput } from "../Models/user.input";
import { UserEntity } from "../Entity/user.entity";
        

        @Resolver(() => UserModel)
        export class UserResolver {
            constructor(private readonly userService: UserService) {}

            @Query(() => [UserModel]) 
            users(): Promise<UserModel[]> {
                return this.userService.getUsers()
            }

            @Query(() => UserModel, {nullable: true})
            async user(
                @Args('id', { type: () => Int }) id,
            ): Promise<UserModel> {
                return this.userService.getUser(id)
            }

            @Mutation(() => UserModel, { name: 'user' })
            async createUSer(@Args('user') user: UserInput): Promise<UserEntity> {
            return this.userService.create(user)
            }

        }


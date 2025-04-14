import { Resolver, Query, Args, Int, Mutation, ID} from "@nestjs/graphql";
import { UserModel } from "../Models/user.model";
import { UserService } from "../Services/user.service";
import { CreateUserInput } from "../Models/user.input";
import { UserEntity } from "../Entity/user.entity";
import { UpdateUserInput } from "../Models/update-user.input";

        

@Resolver(() => UserModel)
export class UserResolver {
constructor(private readonly userService: UserService) {}

@Query(() => [UserModel])
async users(): Promise<UserModel[]> {
  const users = await this.userService.findAll();
  return users.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }));
}

/*@Query(() => [UserModel]) 
  users(): Promise<UserModel[]> {
      return this.userService.getUsers()
  }*/

@Query(() => UserModel)
async user(@Args('id', { type: () => ID }) id: string): Promise<UserModel> {
return this.userService.findOne(id);
}
  
  /*@Query(() => UserModel, {nullable: true})
  async user(
      @Args('id', { type: () => Int }) id,
  ): Promise<UserModel> {
      return this.userService.getUser(id)
  }*/
  
  
  @Mutation(() => UserModel)
  async createUser(@Args('input') input: CreateUserInput): Promise<UserEntity> {
    return this.userService.create(input);
  }

  /*@Mutation(() => UserModel, { name: 'user' })
  async createUSer(@Args('user') user: UserInput): Promise<UserEntity> {
  return this.userService.create(user)
  }*/
  
  
  
   /*@Mutation(() => UserModel)
   updateUser(@Args('user') user: CreateUserInput): Promise<UserEntity> {
      return this.userService.update(user)
   }*/


   @Mutation(() => UserModel)
  async updateUser(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateUserInput,
  ): Promise<UserEntity> {
    return this.userService.update(id, input);
  }

}

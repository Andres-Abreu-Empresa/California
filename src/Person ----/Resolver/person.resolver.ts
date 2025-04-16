import { Resolver, Query, Int, Args, Mutation } from "@nestjs/graphql";
import { PersonModel } from "../Models/person.model";
import { PersonService } from "../Service/person.service";
import { PersonInput } from "../Entity/person.input";
import { PersonEntity } from "../Entity/person.entity";


@Resolver(() => PersonModel)
export class PersonResolver{
    constructor(private readonly personService: PersonService) {}

    @Query(() => [PersonModel]) 
    persons(): Promise<PersonModel[]> {
            return this.personService.getPersons();
    }

    @Query(() => PersonModel, {nullable: true})
    async person(
        @Args('id', { type: () => Int }) id,
    ): Promise<PersonModel> {
        return this.personService.getPerson(id)
    }

    @Mutation(() => PersonModel)
    async createPerson(@Args('person') person: PersonInput): Promise<PersonEntity> {
    return this.personService.create(person)
    }

    @Mutation(() => PersonModel)
    updatePerson(@Args('person') person: PersonInput): Promise<PersonEntity> {
       return this.personService.update(person)
    }
}
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { InstitutionModel } from "../Models/institution.model";
import { InstitutionService } from "../Services/institution.service";
import { InstitutionInput } from "../Entity/institution.input";
import { InstitutionEntity } from "../Entity/institution.entity";

@Resolver(() => InstitutionModel)
export class InstitutionResolver{
    constructor(private readonly institutionService: InstitutionService) {}

    @Query(() => [InstitutionModel]) 
    async institution(): Promise<InstitutionModel[]> {
        return this.institutionService.getInstitutions();
    }

    @Query(() => InstitutionModel, {nullable: true})
    async insttitution(
        @Args('id', { type: () => String }) id,
    ): Promise<InstitutionModel> {
        return this.institutionService.getInstitution(id)
    }

    @Mutation(() => InstitutionModel)
    async createInstitution(@Args('institution') institution: InstitutionInput): Promise<InstitutionEntity> {
    return this.institutionService.create(institution)
    }

    @Mutation(() => InstitutionModel)
    updateInstitution(@Args('institution') institution: InstitutionInput): Promise<InstitutionEntity> {
       return this.institutionService.update(institution)
    }


}
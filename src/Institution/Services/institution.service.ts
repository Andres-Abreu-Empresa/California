import { Injectable } from "@nestjs/common";
import { InstitutionEntity } from "../Entity/institution.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InstitutionModel } from "../Models/institution.model";
import { InstitutionInput } from "../Entity/institution.input";

@Injectable()
export class InstitutionService{
    constructor (
        @InjectRepository(InstitutionEntity)
            private readonly institutionRepository: Repository<InstitutionEntity>,            
    ) {}

    getInstitutions(): Promise<InstitutionEntity[]>{
        return this.institutionRepository.find()
    }

    async getInstitution(id: string): Promise<InstitutionModel> {
        const institution = await this.institutionRepository.findOne({ where: { id } });
            if (!institution) {
                throw new Error('User not found')
            }
        return institution
    }

    create(institution: Partial<InstitutionEntity>): Promise<InstitutionEntity> {
        return this.institutionRepository.save(institution)
    }

    update(institution: InstitutionInput) {
        return this.institutionRepository.save(institution)
    }


}
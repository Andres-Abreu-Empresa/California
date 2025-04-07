import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/User/Entity/user.entity";
import { Repository } from "typeorm";
import { PersonEntity } from "../Entity/person.entity";
import { PersonModel } from "../Models/person.model";
import { PersonInput } from "../Entity/person.input";

@Injectable()
export class PersonService{
    constructor (
        @InjectRepository(UserEntity)
            private readonly personRepository: Repository<PersonEntity>,            
    ) {}

    getPersons(): Promise<PersonEntity[]>{
        return this.personRepository.find()
    }

    async getPerson(id: string): Promise<PersonModel> {
        const person = await this.personRepository.findOne({ where: { id } });
            if (!person) {
                throw new Error('User not found')
            }
        return person
    }

    create(person: Partial<PersonEntity>): Promise<PersonEntity> {
        return this.personRepository.save({ ...person })
    }

    update(person: PersonInput) {
        return this.personRepository.save(person)
    }


}
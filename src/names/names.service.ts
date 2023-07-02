import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Name } from '../typeorm/Names.entity';
import { IName, IRank } from '../types/names.type';

@Injectable()
export class NamesService {
  constructor(
    @InjectRepository(Name) private nameRepository: Repository<Name>,
  ) {}

  getNames() {
    return this.nameRepository.find();
  }

  getNameByName(name: IName) {
    return this.nameRepository.findOneBy(name);
  }

  async createName(name: IName) {
    const allNames = await this.nameRepository.find();

    const newName = this.nameRepository.create({
      ...name,
      rank: allNames.length + 1,
    });
    return this.nameRepository.save(newName);
  }

  updateName(id: number, body: IRank) {
    return this.nameRepository.update({ id }, { ...body });
  }

  deleteName(id: number) {
    return this.nameRepository.delete({ id });
  }
}

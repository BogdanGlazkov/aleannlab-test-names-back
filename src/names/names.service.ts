import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Name } from '../typeorm/Names.entity';
import { IName } from '../utils/types';

@Injectable()
export class NamesService {
  constructor(
    @InjectRepository(Name) private nameRepository: Repository<Name>,
  ) {}

  getNames() {}

  createName(name: IName) {
    const newName = this.nameRepository.create({ ...name, rank: 1 });
    return this.nameRepository.save(newName);
  }
}

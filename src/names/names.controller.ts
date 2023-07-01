import { Controller, Get, Post, Body } from '@nestjs/common';
import { NamesService } from './names.service';
import { IName } from '../utils/types';

@Controller('names')
export class NamesController {
  constructor(private namesService: NamesService) {}

  @Get()
  getNames() {}

  @Post()
  createName(@Body() name: IName) {
    this.namesService.createName(name);
  }
}

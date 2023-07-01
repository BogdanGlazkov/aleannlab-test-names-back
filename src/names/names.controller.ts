import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { NamesService } from './names.service';
import { IName, IRank } from '../utils/types';

@Controller('names')
export class NamesController {
  constructor(private namesService: NamesService) {}

  @Get()
  getNames() {
    return this.namesService.getNames();
  }

  @Post()
  createName(@Body() name: IName) {
    return this.namesService.createName(name);
  }

  @Put(':id')
  async updateNameById(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: IRank,
  ) {
    await this.namesService.updateName(id, body);
  }

  @Delete(':id')
  async deleteNameById(@Param('id', ParseIntPipe) id: number) {
    await this.namesService.deleteName(id);
  }
}

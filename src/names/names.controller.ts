import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseFilters,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { NamesService } from './names.service';
import { IName, IRank } from '../types/names.type';
import { HttpExceptionFilter } from '../filters/HttpException.filter';

@Controller('names')
export class NamesController {
  constructor(private namesService: NamesService) {}

  @UseFilters(HttpExceptionFilter)
  @Get()
  getNames() {
    return this.namesService.getNames();
  }

  @UseFilters(HttpExceptionFilter)
  @Post()
  async createName(@Body() name: IName) {
    const isExist = await this.namesService.getNameByName(name);
    if (isExist)
      throw new HttpException('Name is already exist', HttpStatus.CONFLICT);
    return this.namesService.createName(name);
  }

  @UseFilters(HttpExceptionFilter)
  @Put(':id')
  async updateNameById(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: IRank,
  ) {
    await this.namesService.updateName(id, body);
  }

  @UseFilters(HttpExceptionFilter)
  @Delete(':id')
  async deleteNameById(@Param('id', ParseIntPipe) id: number) {
    const nameToDelete = await this.namesService.getNameById(id);

    await this.namesService.deleteName(id);
    const names = await this.namesService.getNames();
    names.forEach(async (item) => {
      if (item.rank >= nameToDelete.rank) {
        const body = { ...item, rank: item.rank - 1 };
        await this.namesService.updateName(item.id, body);
      }
    });
  }
}

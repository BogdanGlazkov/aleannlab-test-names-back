import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NamesController } from './names.controller';
import { NamesService } from './names.service';
import { Name } from '../typeorm/Names.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Name])],
  controllers: [NamesController],
  providers: [NamesService],
})
export class NamesModule {}

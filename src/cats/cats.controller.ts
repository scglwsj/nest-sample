import { Controller, Get, Post, Body, HttpCode, Param } from '@nestjs/common';
import { CatDto } from './cats.dto';
import { Cat } from './cats';
import { CatsService } from './cats.service';
import { IsString } from 'class-validator';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @HttpCode(204)
  async create(@Body() dto: CatDto): Promise<void> {
    await this.catsService.create(dto.entity);
  }

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findOne(id);
  }
}

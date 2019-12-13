import { Controller, Get, Post, Body, HttpCode, Param } from '@nestjs/common';
import { CatDto } from './cats.dto';
import { Cat } from './cats';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  create(@Body() dto: CatDto): void {
    const cat = dto.entity;
    // TODO: this action careate a cat.
  }

  @Get()
  findAll(): Cat[] {
    // TODO: This action returns all cats.
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id): Cat {
    // TODO: This action returns a ${id} cat.
    return null;
  }
}

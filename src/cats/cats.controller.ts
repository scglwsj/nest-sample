import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { CatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  create(@Body() dto: CatDto): void {
    const cat = dto.toEntity();
    return null;
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}

import { Cat } from './cats';
import { v4 as uuid } from 'uuid';
import { IsString } from 'class-validator';

export class CatDto {
  private readonly id: string;
  constructor() {
    this.id = uuid();
  }

  @IsString()
  name: string;

  get entity(): Cat {
    return new Cat(this.id, this.name);
  }
}

import { Cat } from './cats';
import { v4 as uuid } from 'uuid';
import { IsString } from 'class-validator';

export class CatDto {
  @IsString()
  name: string;

  toEntity(): Cat{
    const cat = new Cat();
    cat.id = uuid();
    cat.name = this.name;
    return cat;
   }
}

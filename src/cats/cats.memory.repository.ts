import { Injectable } from '@nestjs/common';
import { ICatsDa } from './cats.da.interface';
import { Cat } from './cats';

@Injectable()
export class CatsMemoryRepository implements ICatsDa {
  create(cat: Cat): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<void | Cat> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Cat[]> {
    throw new Error('Method not implemented.');
  }
}

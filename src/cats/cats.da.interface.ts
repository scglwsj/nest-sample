import { Cat } from './cats';

export interface ICatsDa {
  create(cat: Cat): Promise<void>;
  findOne(id: string): Promise<Cat | void>;
  findAll(): Promise<Cat[]>;
}

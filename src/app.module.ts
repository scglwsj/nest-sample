import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsMemoryRepository } from './cats/cats.memory.repository';
import { ICatsDa } from './cats/cats.da.interface';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [
    AppService,
    CatsService,
    { provide: 'catsDa', useClass: CatsMemoryRepository },
  ],
})
export class AppModule {}

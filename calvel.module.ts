import { Module } from '@nestjs/common';
import { CalvelService } from './calvel.service';
import { CalvelResolver } from './calvel.resolver';

@Module({
  providers: [CalvelResolver, CalvelService]
})
export class CalvelModule {}

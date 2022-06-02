import { Resolver } from '@nestjs/graphql';
import { CalvelService } from './calvel.service';

@Resolver()
export class CalvelResolver {
  constructor(private readonly calvelService: CalvelService) {}
}

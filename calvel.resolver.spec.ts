import { Test, TestingModule } from '@nestjs/testing';
import { CalvelResolver } from './calvel.resolver';
import { CalvelService } from './calvel.service';

describe('CalvelResolver', () => {
  let resolver: CalvelResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalvelResolver, CalvelService],
    }).compile();

    resolver = module.get<CalvelResolver>(CalvelResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

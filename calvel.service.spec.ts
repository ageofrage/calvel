import { Test, TestingModule } from '@nestjs/testing';
import { CalvelService } from './calvel.service';

describe('CalvelService', () => {
  let service: CalvelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalvelService],
    }).compile();

    service = module.get<CalvelService>(CalvelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

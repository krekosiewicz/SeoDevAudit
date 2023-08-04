import { Test, TestingModule } from '@nestjs/testing';
import { LighthouseConfigService } from 'src/logic/lighthouseConfig/lighthouseConfig.service';

describe('LighthouseConfigService', () => {
  let service: LighthouseConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LighthouseConfigService],
    }).compile();

    service = module.get<LighthouseConfigService>(
      LighthouseConfigService,
    ) as LighthouseConfigService;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

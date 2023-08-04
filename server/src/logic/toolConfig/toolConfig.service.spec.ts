import { Test, TestingModule } from '@nestjs/testing';
import { ToolConfigService } from 'src/logic/toolConfig/toolConfig.service';

describe('ConfigService', () => {
  let service: ToolConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToolConfigService],
    }).compile();

    service = module.get<ToolConfigService>(ToolConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { LighthouseConfigController } from 'src/logic/lighthouseConfig/lighthouseConfig.controller';

describe('ConfigController', () => {
  let controller: LighthouseConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LighthouseConfigController],
    }).compile();

    controller = module.get<LighthouseConfigController>(
      LighthouseConfigController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

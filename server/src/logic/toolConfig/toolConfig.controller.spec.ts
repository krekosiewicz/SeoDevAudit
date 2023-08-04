import { Test, TestingModule } from '@nestjs/testing';
import { ToolConfigController } from 'src/logic/toolConfig/toolConfig.controller';

describe('ConfigController', () => {
  let controller: ToolConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToolConfigController],
    }).compile();

    controller = module.get<ToolConfigController>(ToolConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

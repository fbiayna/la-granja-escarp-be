import { Test, TestingModule } from '@nestjs/testing';
import { InstagramApiController } from './instagram-api.controller';
import { InstagramApiService } from './instagram-api.service';

describe('InstagramApiController', () => {
  let controller: InstagramApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstagramApiController],
      providers: [InstagramApiService],
    }).compile();

    controller = module.get<InstagramApiController>(InstagramApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
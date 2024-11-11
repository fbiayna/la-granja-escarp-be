import { Controller, Get } from '@nestjs/common';
import { InstagramApiService } from './instagram-api.service';
import { ReadInstagramAPIDto } from './dto/read-instagram-api.dto';
import { plainToInstance } from 'class-transformer';

@Controller('instagram-api')
export class InstagramApiController {
  constructor(private readonly instagramApiService: InstagramApiService) {}

  @Get()
  async getInstagramPosts(): Promise<ReadInstagramAPIDto[]> {
    return plainToInstance(
      ReadInstagramAPIDto,
      await this.instagramApiService.getInstagramPosts(),
    );
  }
}

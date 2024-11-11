import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AppConfigService } from '../../config/app-config/app-config.service';
import { ReadExternalInstagramAPIDto } from './dto/read-external-instagram-api.dto';

@Injectable()
export class InstagramApiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly appConfigService: AppConfigService,
  ) {}

  async getInstagramPosts(): Promise<ReadExternalInstagramAPIDto[]> {
    try {
      if (!this.appConfigService.instagramAPIURL) {
        throw new NotFoundException('Instagram API URL is not configured.');
      }

      const { data }: { data: ReadExternalInstagramAPIDto[] } =
        await this.httpService.axiosRef.get(
          this.appConfigService.instagramAPIURL,
        );

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

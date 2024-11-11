import { Module } from '@nestjs/common';
import { InstagramApiService } from './instagram-api.service';
import { InstagramApiController } from './instagram-api.controller';
import { HttpModule } from '@nestjs/axios';
import { AppConfigModule } from '../../config/app-config/app-config.module'

@Module({
  imports: [AppConfigModule, HttpModule],
  controllers: [InstagramApiController],
  providers: [InstagramApiService],
})
export class InstagramApiModule {}

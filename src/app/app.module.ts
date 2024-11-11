import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from '../config/app-config/app-config.module';
import { HttpModule } from '@nestjs/axios';
import { InstagramApiModule } from '../api/instagram-api/instagram-api.module';

@Module({
  imports: [AppConfigModule, HttpModule, InstagramApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

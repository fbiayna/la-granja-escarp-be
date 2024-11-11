import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './app-config.service';
import configuration from './configuration';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        APP_NAME: Joi.string().default('La Granja Escarp Backend'),
        APP_URL: Joi.string().default('http://localhost'),
        APP_PORT: Joi.number().default(3000),
        APP_CORS_ORIGIN: Joi.string().default('*'),
        INSTAGRAM_API_URL: Joi.string().required().default('test'),
      }),
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppConfigService } from './config/app-config/app-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig: AppConfigService = app.get(AppConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: false,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.enableCors({ origin: appConfig.corsOrigin });

  const port = appConfig.port;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: ${appConfig.url}:${appConfig.port}`,
  );
}
bootstrap();

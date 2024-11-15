import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get<string>('app.name');
  }

  get url(): string {
    return this.configService.get<string>('app.url');
  }

  get port(): number {
    return +this.configService.get<number>('app.port');
  }

  get corsOrigin(): string {
    return this.configService.get<string>('app.corsOrigin');
  }

  get instagramAPIURL(): string {
    return this.configService.get<string>('app.instagramAPIURL');
  }
}

import { ModuleConfigFactory } from '@golevelup/nestjs-modules';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config.service';
import { DatabaseModuleOptions } from '../interfaces/database-options.interface';

@Injectable()
export class DatabaseModuleConfig
  implements ModuleConfigFactory<DatabaseModuleOptions> {
  constructor(private readonly configService: ConfigService) {}

  createModuleConfig(): DatabaseModuleOptions {
    return {
      connectionUrl: this.configService.databaseUrl,
    };
  }
}

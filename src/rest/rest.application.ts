import { LoggerInterface } from '../shared/libs/logger/index.js';
import { ConfigInterface, TRestSchema } from '../shared/libs/config/index.js';
import { Component } from '../shared/types/index.js';
import { inject, injectable } from 'inversify';

@injectable()
export class RestApplication {
  constructor(
    @inject(Component.Logger) private readonly logger: LoggerInterface,
    @inject(Component.Config) private readonly config: ConfigInterface<TRestSchema>
  ) {}

  init() {
    this.logger.info('Application initialization');
    this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);
  }
}

import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database.module';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { NotificationResolver } from './notification.resolver';
import { NotificationProvider } from './notification.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [
    NotificationService,
    NotificationResolver,
    ...NotificationProvider,
  ],
})
export class NotificationModule {}

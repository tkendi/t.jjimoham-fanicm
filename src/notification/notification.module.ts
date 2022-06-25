import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { NotificationResolver } from './notification.resolver';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService, NotificationResolver],
})
export class NotificationModule {}

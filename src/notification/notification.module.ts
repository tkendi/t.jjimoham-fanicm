import { Module } from '@nestjs/common';

import { DatabaseModule } from '@/src/database.module';
import { NotificationController } from '@/src/notification/notification.controller';
import { NotificationService } from '@/src/notification/notification.service';
import { NotificationResolver } from '@/src/notification/notification.resolver';
import { NotificationProvider } from '@/src/notification/notification.provider';

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

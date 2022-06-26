import { Controller, Post } from '@nestjs/common';

//service
import { NotificationService } from '@/src/notification/notification.service';

// schema
import { Notification } from '@/src/schemas/notification.schema';

// resolver
import { NotificationResolver } from '@/src/notification/notification.resolver';

@Controller('notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Post()
  registerNotification(): Notification {
    return;
  }
}

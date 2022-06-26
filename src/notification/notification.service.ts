import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import {
  CreateNotificationInput,
  Notification,
} from '@/src/schemas/notification.schema';

@Injectable()
export class NotificationService {
  constructor(
    @Inject('NOTIFICATION_MODEL')
    private notificationModel: Model<Notification>,
  ) {}

  async findAll(): Promise<Notification[]> {
    return this.notificationModel.find().exec();
  }

  async registerNotification(
    notification: CreateNotificationInput,
  ): Promise<Notification> {
    return this.notificationModel.create(notification);
  }
}

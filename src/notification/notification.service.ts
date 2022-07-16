import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import {
  CreateNotificationInput,
  GetNotificationInfo,
} from '@/src/schemas/notification.schema';

@Injectable()
export class NotificationService {
  constructor(
    @Inject('NOTIFICATION_MODEL')
    private notificationModel: Model<GetNotificationInfo>,
  ) {}

  async findAll(): Promise<GetNotificationInfo[]> {
    return this.notificationModel.find().exec();
  }

  async registerNotification(
    notification: CreateNotificationInput,
  ): Promise<GetNotificationInfo> {
    return this.notificationModel.create(notification);
  }
}

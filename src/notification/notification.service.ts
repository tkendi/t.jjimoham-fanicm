import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class NotificationService {
  constructor(
    @Inject('NOTIFICATION_MODEL')
    private notificationModel: Model<Notification>,
  ) {}

  async findAll(): Promise<Notification[]> {
    return this.notificationModel.find().exec();
  }
}

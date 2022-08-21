import { HttpException, HttpStatus } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import * as webPush from 'web-push';

import { GetNotificationInfo } from '@/src/schemas/notification.schema';

import { NotificationService } from '@/src/notification/notification.service';

@Resolver('Notificatoin')
export class NotificationResolver {
  constructor(private notificationService: NotificationService) {}

  @Query()
  async getAllNotification() {
    return this.notificationService.findAll();
  }

  @Mutation(() => GetNotificationInfo)
  async registerNotification(
    @Args('notification') notification: webPush.PushSubscription,
  ) {
    if (notification) {
      return await this.notificationService.registerNotification(notification);
    } else {
      throw new HttpException('info is empty', HttpStatus.BAD_REQUEST);
    }
  }
}

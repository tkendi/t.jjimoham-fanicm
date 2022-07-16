import { Args, Mutation, Query, Resolver, Scalar } from '@nestjs/graphql';

import * as webPush from 'web-push';

import { GetNotificationInfo } from '@/src/schemas/notification.schema';

import { NotificationService } from '@/src/notification/notification.service';
import { HttpException, HttpStatus } from '@nestjs/common';

@Resolver('Notificatoin')
export class NotificationResolver {
  constructor(private notificationService: NotificationService) {}

  @Query()
  async getAllNotification() {
    return [
      {
        id: '1',
        name: '이규혁',
        number: '+82 10-1234-5678',
        email: 'lee@kyuhyuk.kr',
      },
      { id: '2', name: '변정원', number: '+82 10-8765-4321' },
    ];
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

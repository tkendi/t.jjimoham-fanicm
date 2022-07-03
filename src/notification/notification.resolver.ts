import { Args, Mutation, Query, Resolver, Scalar } from '@nestjs/graphql';

import * as webPush from 'web-push';

import { Notification } from '@/src/schemas/notification.schema';

import { NotificationService } from '@/src/notification/notification.service';

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

  @Mutation(() => Notification)
  async registerNotification(
    @Args('notification') notification: webPush.PushSubscription,
  ) {
    console.log(notification);
    return await this.notificationService.registerNotification(notification);
  }
}

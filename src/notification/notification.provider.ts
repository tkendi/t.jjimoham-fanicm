import { Connection } from 'mongoose';
import { NotificationSchema } from '@/src/schemas/notification.schema';

// PERSON_MODEL과 DATABASE_CONNECTION은 constants.ts 파일을 따로 만들어 분리하여 보관하는 것을권장합니다

export const NotificationProvider = [
  {
    provide: 'NOTIFICATION_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Notification', NotificationSchema, 'Notification'),
    inject: ['DATABASE_CONNECTION'],
  },
];

import { Field, ObjectType } from '@nestjs/graphql';

import { Document, Schema } from 'mongoose';

export const NotificationSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  endpoint: String,
  expirationTime: String,
  auth: String,
  p256dh: String,
});

@ObjectType()
export class GetNotificationInfo extends Document {
  @Field()
  _id: string;

  @Field()
  endpoint: string;

  @Field()
  expirationTime: string;

  @Field()
  auth: string;

  @Field()
  p256dh: string;
}

@ObjectType()
export class CreateNotificationInput extends Document {
  @Field()
  endpoint: string;

  @Field()
  expirationTime: string;

  @Field()
  auth: string;

  @Field()
  p256dh: string;
}

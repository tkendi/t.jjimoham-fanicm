
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateNotificationInput {
    auth?: Nullable<string>;
    p256dh?: Nullable<string>;
    endpoint?: Nullable<string>;
    expirationTime?: Nullable<string>;
}

export class Notification {
    id: string;
    endpoint?: Nullable<string>;
    expirationTime?: Nullable<string>;
    auth?: Nullable<string>;
    p256dh?: Nullable<string>;
}

export abstract class IQuery {
    abstract getAllNotification(): Nullable<Nullable<Notification>[]> | Promise<Nullable<Nullable<Notification>[]>>;
}

export abstract class IMutation {
    abstract registerNotification(notification?: Nullable<CreateNotificationInput>): Nullable<Notification> | Promise<Nullable<Notification>>;
}

type Nullable<T> = T | null;

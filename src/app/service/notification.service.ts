import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  public notification = {
    show: false,
    message: '',
    type: 'success'
  };

  showNotification(message: string, type = 'success') {
    this.notification.message = message;
    this.notification.type = type;
    this.notification.show = true;

    setTimeout(() => {
      this.notification.show = false;
    }, 3000);
  }

  getNotification() {
    return this.notification;
  }
}


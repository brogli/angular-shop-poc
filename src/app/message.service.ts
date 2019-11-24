import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string, duration: number = 2000) {
    this.messages.push(message);
    setTimeout(() => {
      this.clear()
    }, duration);
  }

  clear() {
    this.messages = [];
  }
}

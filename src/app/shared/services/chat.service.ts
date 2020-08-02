import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) {

  }

  // tslint:disable-next-line: typedef
  sendChat(message) {
    this.socket.emit('chat', message);
  }

  newUser(name: string) {
    this.socket.emit('new user', name);
  }

  // tslint:disable-next-line: typedef
  receiveChat() {
    return this.socket.fromEvent('chat');
  }

  // tslint:disable-next-line: typedef
  getUsers() {
    return this.socket.fromEvent('users');
  }
  getListUsers() {
    return this.socket.fromEvent('List Users');
  }
}

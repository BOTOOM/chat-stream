import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../shared/services/chat.service';


@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.sass']
})
export class ViewRoomComponent implements OnInit {

  public users: number = 0;
  public message: string = '';
  public messages: string[] = [];

  video = '-ci7EwXaIJg';

  constructor(
    private chatService: ChatService,
  ) { }

  ngOnInit(): void {
    this.chatService.receiveChat().subscribe((message: string) => {
      this.messages.push(message);
    });

    this.chatService.getUsers().subscribe((users: number) => {
      this.users = users;
    });
  }

  addChat(){
    this.messages.push(this.message);
    this.chatService.sendChat(this.message);
    this.message = '';
  }

}

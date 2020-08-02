import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../shared/services/chat.service';


@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.sass']
})
export class ViewRoomComponent implements OnInit {

  listUser: any[];

  video = '-ci7EwXaIJg';

  constructor(
    private chatService: ChatService,
  ) {
    this.listUser = [];
  }

  ngOnInit(): void {

    this.chatService.getListUsers().subscribe((Listusers: any) => {
      this.listUser = Listusers;
    });
  }
}


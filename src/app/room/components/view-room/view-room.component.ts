import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../shared/services/chat.service';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.sass']
})
export class ViewRoomComponent implements OnInit {

  users = 0;
  message: Mensaje;
  messages: Mensaje[] = [];
  UserData: any;
  listUser: any[];


  video = '-ci7EwXaIJg';

  constructor(
    private chatService: ChatService,
    private authService: AuthService,
  ) {
    this.listUser = [];
    this.message = {
      Mensaje : '',
      UserName: ''
    };
  }

  ngOnInit(): void {
    this.authService.getUser$().subscribe( data => {
      this.UserData = data;
      this.chatService.newUser(this.UserData.name);

    }, (error) => { console.log('error:', error); } );

    this.chatService.receiveOldMessages().subscribe( oldMessges => {
      const old = oldMessges as any[];
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < old.length; i++) {
        this.messages.push(oldMessges[i] as Mensaje );
      }
    } );

    this.chatService.receiveChat().subscribe((message) => {
      this.messages.push( message as Mensaje );
    });
    this.chatService.getListUsers().subscribe((Listusers: any) => {
      this.listUser = Listusers;
    });
  }

  addChat(){
    const objMenssage: Mensaje = {
      Mensaje: this.message.Mensaje,
      UserName: this.UserData.name
    };
    this.messages.push(objMenssage);
    this.chatService.sendChat(objMenssage);
    this.message.Mensaje = '';
  }
}

interface Mensaje {
  UserName: string;
  Mensaje: string;
  }

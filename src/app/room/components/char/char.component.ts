import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../shared/services/chat.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.sass']
})
export class CharComponent implements OnInit {

  UserData: any;
  messagesNB: any[];
  mensajesViejos = false;


  constructor(
    private chatService: ChatService,
    private authService: AuthService,
  ) {
    this.messagesNB = [];

   }

  ngOnInit(): void {
    this.authService.getUser$().subscribe( data => {
      this.UserData = data;
      this.chatService.newUser(this.UserData.name);

    }, (error) => { console.log('error:', error); } );

    this.chatService.receiveOldMessages().subscribe( oldMessges => {
      const old = oldMessges as Mensaje[];
      if (!this.mensajesViejos) {
      // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < old.length; i++) {
          this.messagesNB.push({
            text: old[i].Mensaje,
            date: old[i].creado_en,
            reply: false,
            user: {
              name: old[i].UserName,
              avatar: old[i].pictureUser,
            },
          });
        }
        this.mensajesViejos = true;
      }
    } );

    this.chatService.receiveChat().subscribe((message) => {
      const mensaje = message as Mensaje;
      this.messagesNB.push({
        text: mensaje.Mensaje,
        date: mensaje.creado_en,
        reply: false,
        user: {
          name: mensaje.UserName,
          avatar: mensaje.pictureUser,
        },
      });
    });
  }

  sendMessage(event: any) {
    const objMenssage: Mensaje = {
      Mensaje: event.message,
      UserName: this.UserData.name,
      creado_en: new Date(),
      pictureUser: this.UserData.picture,
    };

    this.messagesNB.push({
      text: objMenssage.Mensaje,
      date: objMenssage.creado_en,
      reply: false,
      user: {
        name: objMenssage.UserName,
        avatar: objMenssage.pictureUser,
      },
    });
    this.chatService.sendChat(objMenssage);

  }
}

interface Mensaje {
  UserName: string;
  Mensaje: string;
  creado_en: Date;
  pictureUser: string;
}

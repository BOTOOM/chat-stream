import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

import { NbThemeModule, NbLayoutModule, NbChatModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { RoomRoutingModule } from './room-routing.module';
import { ViewRoomComponent } from './components/view-room/view-room.component';
import { SharedModule } from '../shared/shared.module';
import { CharComponent } from './components/char/char.component';


// const config: SocketIoConfig = { url: 'http://localhost:3000', options: {}};

@NgModule({
  declarations: [ViewRoomComponent, CharComponent],
  imports: [
    // BrowserModule,
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    SharedModule,
    RoomRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbChatModule,
    // SocketIoModule.forRoot(config)
  ]
})
export class RoomModule { }

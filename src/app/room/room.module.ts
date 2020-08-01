import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { ViewRoomComponent } from './components/view-room/view-room.component';


@NgModule({
  declarations: [ViewRoomComponent],
  imports: [
    CommonModule,
    RoomRoutingModule
  ]
})
export class RoomModule { }

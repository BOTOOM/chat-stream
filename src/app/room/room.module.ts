import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

import { RoomRoutingModule } from './room-routing.module';
import { ViewRoomComponent } from './components/view-room/view-room.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ViewRoomComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    SharedModule,
    RoomRoutingModule
  ]
})
export class RoomModule { }

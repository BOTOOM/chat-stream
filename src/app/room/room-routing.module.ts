import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewRoomComponent } from './components/view-room/view-room.component';

const routes: Routes = [
  {
    path: '',
    component: ViewRoomComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule {}

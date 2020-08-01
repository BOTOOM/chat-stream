import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'room',
    loadChildren: () => import('./room/room.module').then(m => m.RoomModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

const config: ExtraOptions = {
  useHash: true,
};


@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { HomeComponent } from './components/home/home.component';


const config: SocketIoConfig = { url: 'wss://w4whj5yjpj.execute-api.us-east-2.amazonaws.com/@connections', options: {}};

@NgModule({
  declarations: [NavbarComponent, FooterComponent, DomseguroPipe, HomeComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SharedRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    DomseguroPipe
  ]
})
export class SharedModule { }

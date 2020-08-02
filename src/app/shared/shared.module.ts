import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, DomseguroPipe],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    DomseguroPipe
  ]
})
export class SharedModule { }

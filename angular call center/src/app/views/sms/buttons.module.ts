import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



// Dropdowns Component
// Buttons Routing
import { ButtonsRoutingModule } from './buttons-routing.module';
import { RecievedComponent } from './recieved.component'
import { SentComponent } from './sent.component'

// Angular

@NgModule({
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    FormsModule
  ],
  declarations: [
    RecievedComponent,
    SentComponent
  ]
})
export class ButtonsModule { }

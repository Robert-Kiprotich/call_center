import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailsRoutingModule } from './mails-routing.module';
import { SentComponent } from './sent.component';
import { InboxComponent  } from './inbox.component';
import {  SpamComponent } from './spam.component';

@NgModule({
  declarations: [
    SentComponent,
    InboxComponent,
    SpamComponent
  ],
  imports: [


    CommonModule,
    MailsRoutingModule
  ]
})
export class MailsModule { }

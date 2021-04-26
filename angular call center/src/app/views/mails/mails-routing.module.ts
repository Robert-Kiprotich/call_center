import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentComponent } from './sent.component';
import { InboxComponent  } from './inbox.component';
import {  SpamComponent } from './spam.component';
const routes: Routes = [


  {
    path: '',
    data: {
      title: 'Mails'
    },
    children: [
      {
        path: '',
        redirectTo: 'mails'
      },
      {
        path: 'inbox',
        component: InboxComponent,
        data: {
          title: 'Recieved'
        }
      },
      {
        path: 'sent',
        component: SentComponent,
        data: {
          title: 'sent'
        }
      },
      {
        path: 'spam',
        component: SpamComponent,
        data: {
          title: 'sent'
        }
      },
      
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailsRoutingModule { }

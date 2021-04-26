import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { RecievedComponent } from '../calls/recieved.component';
import { SentComponent } from './sent.component'


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'sms'
    },
    children: [
      {
        path: '',
        redirectTo: 'sms'
      },
      {
        path: 'recieved',
        component: RecievedComponent,
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
     
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {}

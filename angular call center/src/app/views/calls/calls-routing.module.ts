import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox.component'
import { NavbarsComponent } from './navbars/navbars.component';
import { CallsComponent } from './calls.component'
import { MissedCallsComponent } from './missedcalls.component'
import { DialedComponent } from './dialled.component'
import { RecievedComponent } from './recieved.component'
import { RejectedComponent } from './rejected.components'
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Calls'
    },
    children: [

      {
        path: 'calls',
        component: CallsComponent,
        data: {
          title: 'calls'
        }
      },

      {
        path: 'missedcalls',
        component: MissedCallsComponent,
        data: {
          title: 'Missedcalls'
        }
      },
      {
        path: 'dialledcalls',
        component: DialedComponent,
        data: {
          title: 'Dialleddcalls'
        }
      },
      {
        path: 'inbox',
        component: InboxComponent,
        data: {
          title: 'inbox'
        }
      },

      {
        path: 'rejectedcalls',
        component: RejectedComponent,
        data: {
          title: 'Rejectedcalls'
        }
      },
      {
        path: 'recievedcalls',
        component: RecievedComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'navbars',
        component: NavbarsComponent,
        data: {
          title: 'Navbars'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallsRoutingModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'angular-progress-bar';

@NgModule({
  imports: [
    FormsModule,
    ProgressBarModule,
    DashboardRoutingModule,
    ChartsModule,
    HttpClientModule,
    CommonModule
   
  ],
  providers: [
   
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule {
  
 
}

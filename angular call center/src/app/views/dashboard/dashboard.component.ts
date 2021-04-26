import { Component, OnInit,Pipe} from '@angular/core';
import { Observable } from 'rxjs';
import { CallsService } from '../../calls.service';





@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  callsData = []
  

constructor(
  private calls: CallsService,
 
  ) {
    this.calls.getData().subscribe(data => {

      this.callsData = <any>data
     
    })
  }

  public doughnutChartLabels: string[] = ['Read', 'Reaplied', 'Spam'];
 // public doughnutChartData:number[] = [this.callsData[0].read, this.callsData[0].replied, this.callsData[0].spam];
  public doughnutChartType = 'doughnut';

  
 
 public chartClicked(e: any): void {
  console.log(e);
}

public chartHovered(e: any): void {
  console.log(e);
}
  ngOnInit() {
    console.log(this.callsData)
   

  }
}
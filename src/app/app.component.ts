import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
    },
    legend: {
      display: false
    }
  };

  public barChartOptions_MTD: any;
  public barChartOptions_lastMonth: any;
  public barChartOptions_YTD: any;


  public barChartLabels: string[];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  

  public barChartData_MTD: any[] = [
    { data: [], label: 'Your Rank' },
    { data: [], label: 'Remaining' }
  ];
  public barChartData_lastMonth: any[] = [
    { data: [], label: 'Your Rank' },
    { data: [], label: 'Remaining' }
  ];
  public barChartData_YTD: any[] = [
    { data: [], label: 'Your Rank' },
    { data: [], label: 'Remaining' }
  ];



  constructor(private _emp: DataService) {
    this.barChartOptions_MTD = Object.assign({}, this.barChartOptions, {
      title: {
        display: true,
        text: 'Month to Date',
      }
    });
    this.barChartOptions_lastMonth = Object.assign({}, this.barChartOptions, {
      title: {
        display: true,
        text: 'Last Month',
      }
    });
    this.barChartOptions_YTD = Object.assign({}, this.barChartOptions, {
      title: {
        display: true,
        text: 'Year to Date',
      }
    });
  }
  ngOnInit() {
    this._emp.getSales_MTD().subscribe(data => {
      console.log(data);
      //this.barChartLabels = Object.keys(data);
      this.barChartLabels = data.map(x => x.label);
      this.barChartLabels.forEach(label => {
        this.barChartData_MTD[0].data.push(data.find(x => x.label == label)['yourRank']);
        this.barChartData_MTD[1].data.push(data.find(x => x.label == label)['total']);
      });
    });

    this._emp.getSales_lastMonth().subscribe(data => {
      console.log(data);
      //this.barChartLabels = Object.keys(data);
      this.barChartLabels = data.map(x => x.label);
      this.barChartLabels.forEach(label => {
        this.barChartData_lastMonth[0].data.push(data.find(x => x.label == label)['yourRank']);
        this.barChartData_lastMonth[1].data.push(data.find(x => x.label == label)['total']);
      });
    });

    this._emp.getSales_YTD().subscribe(data => {
      console.log(data);
      //this.barChartLabels = Object.keys(data);
      this.barChartLabels = data.map(x => x.label);
      this.barChartLabels.forEach(label => {
        this.barChartData_YTD[0].data.push(data.find(x => x.label == label)['yourRank']);
        this.barChartData_YTD[1].data.push(data.find(x => x.label == label)['total']);
      });
    });
  }
}

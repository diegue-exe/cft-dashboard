import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-chartjs-doughnut',
  templateUrl: './chartjs-doughnut.component.html',
  styleUrls: ['./chartjs-doughnut.component.css']
})
export class ChartjsDoughnutComponent implements OnInit {

  constructor() { }

  doughnutChartLabels: Label[] = ['Win', 'Loss'];
  doughnutChartData: MultiDataSet = [
    [50,50]
  ];
  doughnutChartType: ChartType = 'doughnut';


  ngOnInit(): void {
  }

}

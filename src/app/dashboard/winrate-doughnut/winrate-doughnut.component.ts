import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { take } from 'rxjs/operators';
import { DataService } from 'src/app/core/data.service';
import { TradingAccount } from 'src/app/models/tradingaccount';
import { User } from 'src/app/models/user';
import { isLineBreak } from 'typescript';

@Component({
  selector: 'app-winrate-doughnut',
  templateUrl: './winrate-doughnut.component.html',
  styleUrls: ['./winrate-doughnut.component.css']
})
export class WinrateDoughnutComponent implements OnInit {

  constructor(private dataService: DataService) { }

  winrate_data: any[] = [];
  current: number;
  isLoaded: boolean = false
  public chart: any;

  ngOnInit(): void {
    this.dataService
    .getTradingAccounts()
    .pipe(take(1))
    .subscribe(data => {
      sessionStorage.getItem('tradingAccount') != null ? this.current = parseInt(sessionStorage.getItem('tradingAccount') || "0")  : sessionStorage.setItem('tradingAccount', "0");
      this.winrate_data = [
        data[this.current].win_rate,
        100 - data[this.current].win_rate
      ];
      this.createChart(this.winrate_data);
      this.isLoaded = true;
      console.log(this.isLoaded);
    });
  }


  createChart(data: any[]){

    this.chart = new Chart("winrate-doughnut", {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        labels: ["Win", "Loss"],
	       datasets: [
          {
            label: "Win",
            data: data,
            backgroundColor: [
              'rgb(186,255,201)',
              'rgb(255,179,186)'
            ]
          },
        ]
      },
      options: {
        aspectRatio:2,
        legend: {
          display: false
        }
      }

    });
  }

}

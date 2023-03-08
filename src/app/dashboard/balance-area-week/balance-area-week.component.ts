import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { take } from 'rxjs/operators';
import { DataService } from 'src/app/core/data.service';
import { TradingAccount } from 'src/app/models/tradingaccount';

@Component({
  selector: 'app-balance-area-week',
  templateUrl: './balance-area-week.component.html',
  styleUrls: ['./balance-area-week.component.css']
})
export class BalanceAreaWeekComponent implements OnInit {

  constructor(private dataService: DataService) { }
  @Input() currentUser: TradingAccount;
  numericData: number[] = [];
  stringData: string[] = [];

  ngOnInit(): void {
      this.dataService
      .getBalances(this.currentUser.mt_user_id, '1week')
      .pipe(take(1))
      .subscribe(data => {
        data.map(data =>this.numericData.push(data.balance)),
        data.map(data => this.stringData.push(data.created_at))
      });
  }

  lineChartData: ChartDataSets[] = [
    { data: this.numericData, label: 'User balance' },
  ];

  lineChartLabels: Label[] = this.stringData;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#f3cb45',
      backgroundColor: '#' + addAlpha('F3CB45', 0.55),
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';
}

function addAlpha(color: string, opacity: number): string {
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

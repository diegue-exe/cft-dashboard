import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { take } from 'rxjs/operators';
import { DataService } from 'src/app/core/data.service';
import { Balance } from 'src/app/models/balance';
import { TradingAccount } from 'src/app/models/tradingaccount';

@Component({
  selector: 'app-balance-area',
  templateUrl: './balance-area.component.html',
  styleUrls: ['./balance-area.component.css']
})
export class BalanceAreaComponent implements OnInit {

  constructor(private dataService: DataService) { }
  @Input() current: TradingAccount;

  ngOnInit(): void {
  }

}

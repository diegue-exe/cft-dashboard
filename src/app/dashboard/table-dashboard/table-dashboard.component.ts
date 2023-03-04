import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Trade } from 'src/app/models/trade';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './table-dashboard.component.html',
  styleUrls: ['./table-dashboard.component.css']
})
export class TableDashboardComponent implements OnInit {
  @Input('trades') trades: Trade[]
  page = 1;
  pageSize = 10;
  mt_user_id: number;

  constructor(private dataService: DataService) {
  }


  ngOnInit(): void {
    this.mt_user_id = parseInt(sessionStorage.getItem('mt_user_id') || "");
    this.dataService.getTrades(this.mt_user_id);
  }

}

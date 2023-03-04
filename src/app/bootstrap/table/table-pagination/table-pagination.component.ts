import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Trade } from 'src/app/models/trade';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent implements OnInit {

  page = 1;
  pageSize = 10;
  trades!: Trade[];
  mt_user_id: number;

  constructor(private dataService: DataService) {
    this.refreshTrades();
  }

  refreshTrades() {
    // this.trades
    //   .map((country, i) => ({id: i + 1, ...country}))
    //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
    this.mt_user_id = parseInt(sessionStorage.getItem('mt_user_id') || "");
    this.dataService.getTrades(this.mt_user_id);
  }

}

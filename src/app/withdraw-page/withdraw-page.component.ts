import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { DataService } from '../core/data.service';
import { TradingAccount } from '../models/tradingaccount';

@Component({
  selector: 'app-withdraw-page',
  templateUrl: './withdraw-page.component.html',
  styleUrls: ['./withdraw-page.component.css']
})
export class WithdrawPageComponent implements OnInit {

  tradingAccounts: TradingAccount[] = []
  currentAccount: TradingAccount
  balance: number;
  current: number;
  initialFunds: number;
  remark: string;

  constructor(private dataService: DataService) {
    this.dataService
    .getTradingAccounts()
    .pipe(take(1))
    .subscribe( data => {
      this.tradingAccounts = data,
      sessionStorage.getItem('tradingAccount') != null ? this.current = parseInt(sessionStorage.getItem('tradingAccount') || "0")  : sessionStorage.setItem('tradingAccount', "0"),
      this.currentAccount = this.tradingAccounts[this.current],
      this.balance = this.currentAccount.balance,
      this.remark = this.currentAccount.remarks,
      this.getInitialFunds()
    });
   }

   getInitialFunds(){
    switch(this.currentAccount.remarks){
      case "10kp3n":
        this.initialFunds = 10000;
        break;
        case "25kp3n":
        this.initialFunds = 25000;
        break;
      case "50kp3n":
        this.initialFunds = 50000;
        break;
      case "100kp3n":
        this.initialFunds = 100000;
        break;
      case "200kp3n":
        this.initialFunds = 200000;
        break;
      default:
        this.initialFunds = 0;
    };
   }
  withdraw(){
    console.log("Withdraw");
  }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { TradingAccount } from 'src/app/models/tradingaccount';

@Component({
  selector: 'app-dropdown-account',
  templateUrl: './dropdown-account.component.html',
  styleUrls: ['./dropdown-account.component.css']
})
export class DropdownAccountComponent implements OnInit {
  @Input() accounts: TradingAccount[];
  position: number;

  constructor() { }

  ngOnInit(): void {
  }

  changeCurrentAccount(id: number){
    for(var account of this.accounts){
      if (account.mt_user_id == id){
        this.position = this.accounts.indexOf(account)
        sessionStorage.setItem('tradingAccount', ""+ this.position);
        location.reload()
      }
    }

  }

}

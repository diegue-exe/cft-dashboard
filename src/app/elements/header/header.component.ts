import { DataSource } from '@angular/cdk/collections';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/core/data.service';
import { TradingAccount } from 'src/app/models/tradingaccount';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

	toggleChat: boolean = true;
	toggleSingle: boolean = true;

  user: User;
  userAccounts: TradingAccount [];


	constructor(private dataService: DataService) { }

	ngOnInit() {
    this.dataService.getUserData().subscribe(data => (this.user = data));
    this.dataService.getTradingAccounts().subscribe(data => {
      this.userAccounts = data;
    });
	}

  logout(){
    sessionStorage.clear();
    location.reload();
    console.log("Log out");
  }

	togglechatbar() {
		this.toggleChat = !this.toggleChat;
	}
	singleChatWindow() {
		this.toggleSingle = !this.toggleSingle;
	}

}

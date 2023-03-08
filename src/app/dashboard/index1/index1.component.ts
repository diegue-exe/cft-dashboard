import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { take } from 'rxjs/operators';
import { DataService } from 'src/app/core/data.service';
import { Trade } from 'src/app/models/trade';
import { TradingAccount } from 'src/app/models/tradingaccount';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-index1',
  templateUrl: './index1.component.html',
  styleUrls: ['./index1.component.css']
})
export class Index1Component implements OnInit {

  usuario : User;
  cuentas:any = [];
  current: number;
  carouselData: any[] = [];
  trades: Trade[];

  constructor( private http: HttpClient, private dataService: DataService, private router: Router ) {
  }
  ngOnInit() {
    this.dataService
    .getTradingAccounts()
    .pipe(take(1))
    .subscribe(data => {
      this.cuentas = data,
      sessionStorage.getItem('tradingAccount') != null ? this.current = parseInt(sessionStorage.getItem('tradingAccount') || "0")  : sessionStorage.setItem('tradingAccount', "0"),
      this.carouselData = [
        { title: "Current balance", subtitle: "Updated every minute" ,data: '$' + this.cuentas[this.current].balance },
        { title: "Equity", subtitle:"Updated every minute", data: '$' + this.cuentas[this.current].equity },
        { title: "Days traded", subtitle: "Updated every day at 12 AM (UTC)", data: this.cuentas[this.current].days_traded },
        { title: "Daily Drawdown", subtitle: "Updated every day at 12 AM (UTC)", data: '$' + this.cuentas[this.current].daily_drawdown },
        { title: "Max Drawdown", subtitle: "Static", data: '$' + this.cuentas[this.current].max_drawdown },
      ],
      this.dataService
      .getTrades(this.cuentas[this.current].mt_user_id)
      .pipe(take(1))
      .subscribe(data => this.trades = data),
      this.dataService
    });
  }

  // TODO pedir los datos de la cuenta de trading, una vez recibidos, profit, balance, equity y days traded se añaden a data de quickTransfer
  // TODO añadir una gráfica que muestre winRate con una gráfica de circulo verde/rojo


  checkDirection() {
    var htmlClassName = document.getElementsByTagName('html')[0].getAttribute('class');
    if(htmlClassName == 'rtl') {
        return true;
    } else {
        return false;

    }
  }

  customOptions: OwlOptions = {
    loop:true,
    autoplay:true,
    margin:20,
    nav:false,
    dots: false,
    rtl: this.checkDirection(),
    navText: ['', ''],
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        760:{
            items:3
        },
        991:{
            items:4
        },

        1200:{
            items:4
        },
        1601:{
            items:5
        }
    }
  }

}

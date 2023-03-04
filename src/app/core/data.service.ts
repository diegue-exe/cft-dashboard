import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trade } from '../models/trade';
import { catchError, tap, map } from "rxjs/operators";
import { TradingAccount } from '../models/tradingaccount';
import { User } from '../models/user';
import { Balance } from '../models/balance';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api-dev.cryptofundtrader.com/api/v1'

  constructor(private http: HttpClient) { }

  getUserData(): Observable<User> {
    const url = `${this.apiUrl}/user`;
    const token = sessionStorage.getItem('token');
    const httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer '+ token,
      'accept' : 'application/json',
      'Content-Type':'application/json'
    });

    return this.http.get<User>(url, {
      headers: httpHeaders
    });
  }

  // editUserData(userEdited: User): Observable<User>{
  //   const url = `${this.apiUrl}/user`
  //   const token = sessionStorage.getItem('token');
  //   const httpHeaders = new HttpHeaders({
  //     'Authorization' : 'Bearer ' + token
  //   });
  // TODO acabar la consulta
  // }

  getTradingAccounts(): Observable<TradingAccount[]> {
      const url = `${this.apiUrl}/trading_accounts`;
      const token = sessionStorage.getItem('token');
      const httpHeaders = new HttpHeaders({
        'Authorization' : 'Bearer ' + token,
        'accept' : 'application/json',
        'Content-Type':'application/json'
      });

      return this.http.get<TradingAccount[]>(url, {
        headers: httpHeaders
      });
  }

  getTrades(mt_user_id: number): Observable<Trade[]>{
    const url = `${this.apiUrl}/trades/${mt_user_id}`;
    const token = sessionStorage.getItem('token');
    const httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + token,
      'accept' : 'application/json',
      'Content-Type':'application/json'
    });

    return this.http.get<Trade[]>(url, {
      headers: httpHeaders
    });
  }

  getBalances(mt_user_id:number, period: string){
    // TODO, cuando le des al boton de daily, weekly, monthly, tienes que añadirle esto a la función
    /*
    goProducts() {
      this.router.navigate(['/products'], { queryParams: { period: this.period} });
      // En este caso, tienes que hacer que 1week sea una variable, que contenga un string '1week' como dice la api o similar
    }
    */
    const url = `${this.apiUrl}/trading_accounts/${mt_user_id}/balances`
    const token = sessionStorage.getItem('token');
    const httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + token,
      'accept' : 'application/json',
      'Content-Type':'application/json'
    })

    return this.http.get<Balance[]>(url, {
      headers: httpHeaders
    });
  }
}

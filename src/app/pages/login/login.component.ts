import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { options } from 'preact';
import { Subscription } from 'rxjs';
import { Login } from 'src/app/models/login';
import { Response } from 'src/app/models/response';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
      this.formLogin = formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })
  }

  login() {
    const val = this.formLogin.value;
    if (val.username && val.password) {
      this.authService.login(val.username, val.password)
        .subscribe(data=>{
          console.log("User logged in");
          sessionStorage.setItem('tradingAccount', "0");
          this.router.navigate(['dashboard']);
        },
            err => {console.log("Error en el login", err);
        });
    }
  }

  // login(){
  //  const val = this.formLogin.value;
  //   const usuarioLogin: Login = {
  //     username: val.username,
  //     password: val.password
  //   }

  //   const headers = new HttpHeaders({
  //     'accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   });

  //   this.subRef$ = this.http.post<Response>('https://api-dev.cryptofundtrader.com/api/v1/login', usuarioLogin, {headers: headers, observe: "response"})
  //   .subscribe(res => {

  //     const token = res.body?.access_token;
  //     console.log('token', token);
  //     sessionStorage.setItem('token', token || "");
  //     this.router.navigate(['']);
  //   },
  //     err => {console.log("Error en el login", err);
  //   });
  // }

  // ngOnDestroy(): void {
  //   if (this.subRef$){
  //     this.subRef$.unsubscribe();
  //   }
  // }
}




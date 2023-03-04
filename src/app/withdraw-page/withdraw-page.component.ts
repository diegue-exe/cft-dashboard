import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw-page',
  templateUrl: './withdraw-page.component.html',
  styleUrls: ['./withdraw-page.component.css']
})
export class WithdrawPageComponent implements OnInit {

  constructor() { }

  withdraw(){
    console.log("Withdraw")
  }

  ngOnInit(): void {
  }

}

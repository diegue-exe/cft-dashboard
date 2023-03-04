import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-withdraw-page',
  templateUrl: './withdraw-page.component.html',
  styleUrls: ['./withdraw-page.component.css']
})
export class WithdrawPageComponent implements OnInit {

  constructor(private dataService: DataService) { }

  withdraw(){
    console.log("Withdraw");
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
today:number;
autor:string="Pili Alegre";
ies:string="IES Punta del Verde";

  constructor() { }

  ngOnInit() {
    this.today = Date.now();

  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capapp',
  templateUrl: './capapp.component.html',
  styleUrls: ['./capapp.component.css']
})
export class CapappComponent implements OnInit {

  public num1: number;
  public num2: number;
  public result: number;
  
  cal_add(){
    this.result= this.num1+this.num2;
  }
  cal_sub(){
    this.result= this.num1-this.num2;
  }
  cal_mul(){
    this.result= this.num1*this.num2;
  }
  cal_div(){
    this.result= this.num1/this.num2;
  }
  constructor() { }

  ngOnInit() {
  }

}

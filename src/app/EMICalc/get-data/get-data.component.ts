import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Monthly } from 'src/app/Monthly';
import { Yearly } from 'src/app/Yearly';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  constructor() { }
  amt: number = 0;
  int: number = 0;
  time: number = 0;
  intpm: number = 0;
  intpy: number = 0;
  durim: number = 0;
  com: number = 0;
  com1: number = 0;
  com2: number = 0;
  emi: number = 0;
  totalEMI: number = 0;
  balance: number = 0;
  
  inmonth: Monthly[] = [];
  inyear: Yearly[] = [];

  ngOnInit(): void {
  }
  emiForm = new FormGroup({
    amount: new FormControl('',[Validators.required,Validators.pattern("[0-9]*")]),
    interest: new FormControl('',[Validators.required,Validators.pattern("[0-9]*")]),
    duration: new FormControl('',[Validators.required,Validators.pattern("[0-9]*")])
  })
  get amount(){
    return this.emiForm.get('amount');
  }
  get interest(){
    return this.emiForm.get('interest');
  }
  get duration(){
    return this.emiForm.get('duration');
  }
  getData(){
    
    let obj = this.emiForm.value;
    console.log(obj);
    this.amt = obj.amount;
    this.int = obj.interest;
    this.time = obj.duration;

    this.intpm = obj.interest/1200;
    this.intpy = obj.interest/100;
    
    this.durim = obj.duration*12;
    
    this.com = Math.pow(1+this.intpm,this.durim);
    
    this.com1 = obj.amount*this.intpm*this.com;
    
    this.com2 = this.com-1;
    
    this.emi = this.com1/this.com2;
    
    this.totalEMI = this.emi*this.durim;
    
    this.balance = this.totalEMI;

    for(let j=0;j<this.durim;j++){
      this.balance -= this.emi;
      let mo = {
        emi1 : this.emi,
        balance1 : this.balance
      }
      this.inmonth.push(mo);
    }
    
    let one_year_emi = this.emi*12;
    let tot_y_bal = this.totalEMI;
    
    for(let k=0;k<obj.duration;k++){
      tot_y_bal -= one_year_emi;
      let yo = {
        emi2: one_year_emi,
        balance2: tot_y_bal
      }
      this.inyear.push(yo);
    }
  }
}
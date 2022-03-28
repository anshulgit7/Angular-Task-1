import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css']
})

export class BankFormComponent implements OnInit {

  title: string = "Enter details to open your account";
  hname: string = "";
  hamt: number;
  obj: any = 0;
  constructor() { }

  ngOnInit(): void {
  }

  bankForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    amount: new FormControl('',[Validators.required,Validators.pattern("[0-9]*")])
  })

  get name(){
    return this.bankForm.get('name');
  }
  get amount(){
    return this.bankForm.get('amount');
  }
  bankSubmit(){
    this.obj = this.bankForm.value;
    let a = this.obj.amount;
    if(a >= 2500){
      this.hname = this.obj.name;
      this.hamt = this.obj.amount;
      this.title = "Welcome "+this.hname+"! Your account is opened.";
      console.log(this.obj);
    }
    else{
      alert("Please Enter Atleast Rs. 2500");
    }
  }
  checkBalance(){
    if(this.title == "Enter details to open your account"){
      alert("You have not created your account yet");
    }
    else{
      alert("Your amount is: "+this.hamt);
    }
  }
  addBalance(){
    if(this.title == "Enter details to open your account"){
      alert("You have not created your account yet");
    }
    else{
      this.hamt = this.hamt+1000;
      alert("Updated Balance is: " +this.hamt);
    }
  }
}

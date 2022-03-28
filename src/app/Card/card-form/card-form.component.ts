import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  constructor() { }

  cardForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    amount: new FormControl('',Validators.required)
  })
  ngOnInit(): void {
  }
  get name(){
    return this.cardForm.get('name');
  }
  get amount(){
    return this.cardForm.get('amount');
  }
  cardSubmit(){
    let obj = this.cardForm.value;
    let a = obj.amount;
    if(a < 20000){
      alert('You are not eligible for any card.');
    }
    else if(a >= 20000 && a < 40000){
      alert("You are eligible for silver card.");
    }
    else if(a >= 40000 && a < 60000){
      alert("You are eligible for gold card");
    }
    else{
      alert("You are eligible for platinum card");
    }
  }
}

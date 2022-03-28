import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  detailsForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    city: new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z]+")]),
    phone: new FormControl('',[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
    pin: new FormControl('',[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(6), Validators.maxLength(6)])
  })
  get name(){
    return this.detailsForm.get('name');
  }
  get email(){
    return this.detailsForm.get('email');
  }
  get city(){
    return this.detailsForm.get('city');
  }
  get phone(){
    return this.detailsForm.get('phone');
  }
  get pin(){
    return this.detailsForm.get('pin');
  }
  submit(){
    let obj1 = this.detailsForm.value;
    console.log(obj1);
  }
}

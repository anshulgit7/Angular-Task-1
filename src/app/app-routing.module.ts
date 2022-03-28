import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankFormComponent } from './Bank/bank-form/bank-form.component';
import { CardFormComponent } from './Card/card-form/card-form.component';
import { FormComponent } from './Details/form/form.component';
import { GetDataComponent } from './EMICalc/get-data/get-data.component';

const routes: Routes = [
  {
    component: GetDataComponent,
    path: ''
  },
  {
    component: FormComponent,
    path: 'form'
  },
  {
    component: BankFormComponent,
    path: 'bank'
  },
  {
    component: CardFormComponent,
    path: 'card'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetDataComponent } from './EMICalc/get-data/get-data.component';
import { MonthlyComponent } from './EMICalc/monthly/monthly.component';
import { YearlyComponent } from './EMICalc/yearly/yearly.component';
import { FormComponent } from './Details/form/form.component';
import { FormsModule } from '@angular/forms';
import { BankFormComponent } from './Bank/bank-form/bank-form.component';
import { CardFormComponent } from './Card/card-form/card-form.component';
@NgModule({
  declarations: [
    AppComponent,
    GetDataComponent,
    MonthlyComponent,
    YearlyComponent,
    FormComponent,
    BankFormComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

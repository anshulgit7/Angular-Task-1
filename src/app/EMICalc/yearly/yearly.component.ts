import { Component, OnInit, Input } from '@angular/core';
import { Yearly } from 'src/app/Yearly';

@Component({
  selector: 'app-yearly',
  templateUrl: './yearly.component.html',
  styleUrls: ['./yearly.component.css']
})
export class YearlyComponent implements OnInit {

  @Input() years: Yearly[];
  constructor() { }

  ngOnInit(): void {
  }

}

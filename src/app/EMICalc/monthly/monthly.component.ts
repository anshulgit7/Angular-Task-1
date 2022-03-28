import { Component, OnInit,Input } from '@angular/core';
import { Monthly } from 'src/app/Monthly';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {

  @Input() months:Monthly[];
  
  constructor() { }

  ngOnInit(): void {
  }

}

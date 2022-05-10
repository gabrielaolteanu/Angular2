import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {

  constructor(public showCounter: CounterService ) { }
increase(value: number){
  return this.showCounter.increment(value)
} 
decrease(value: number){
  return this.showCounter.decrement(value)
} 

  ngOnInit(): void {

  }

}

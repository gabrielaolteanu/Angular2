import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {

  constructor(public clicksCount: CounterService) {
  }

  incrementClick() {
    this.clicksCount.increment();
  }
  decrementClick() {
    this.clicksCount.decrement();
  }

  ngOnInit(): void {
  }

}

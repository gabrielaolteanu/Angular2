import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {
@Output() increase: EventEmitter<number>= new EventEmitter()
@Output() decrease: EventEmitter<number>= new EventEmitter()
  constructor(public clicksCount: CounterService) {
  }

  amount= new FormControl('')

  incrementClick(amount: number) {
 this.increase.emit(amount)
  }
  decrementClick(amount: number) {
   this.decrease.emit(amount)
  }

  ngOnInit(): void {
  }

}

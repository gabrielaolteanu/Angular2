import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
@Input() openButton: boolean= false
@Output() change=new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

}

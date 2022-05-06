import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
@Input() openButton: boolean = false
@Output() change=new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }

}

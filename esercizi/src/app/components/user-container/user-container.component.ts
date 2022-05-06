import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
openButton: boolean = false;

@Output() change=new EventEmitter<void>()

  constructor() { }
show():void {
  this.openButton=!this.openButton
}
  ngOnInit(): void {
  }

}

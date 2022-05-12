import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'esercizi';

  constructor(private userService: UsersService){} 

  onGet():void {
this.userService.getUsers().subscribe(
  (response) => console.log(response),
  () => console.log('Done')
)
  }
  ngOnInit(): void {
    this.onGet()
  }
}

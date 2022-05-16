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

  Props: { name: string; endpoint: string }[] = [];


  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.Props = Object.entries(data).map((result) => {
        return {
          name: result[0],
          endpoint: result[1].Path,
        };
      });
    })

 
  }
}

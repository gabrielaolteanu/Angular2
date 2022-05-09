import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
 
    count = 0;
    constructor() { }
  
    value(){
      console.log(this.count)
    }

    increment() {
    console.log(this.count++)  
    }
    decrement() {
      if(this.count > 0){
      console.log(this.count--)   
      }else {
        console.log("Error, number can't be negative")
      }
    }
}

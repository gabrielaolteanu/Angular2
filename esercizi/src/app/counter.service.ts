import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
 
   private counter = 0;
    constructor() { }
  
   public value(){
     if(this.counter <0){
      return console.log("Error, number can't be negative")
     }else {
       return this.counter
    }
   }

  increment(value: number) {
    this.counter += value
    }


   
 decrement(value: number) {
      if(this.counter > 0){
      return this.counter -= value   
      }else {
      return  console.log("Error, number can't be negative")
      }
    }

    
  }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
 
private behaviorSubject: BehaviorSubject<number>= new BehaviorSubject<number>(0);
public counter= this.behaviorSubject.asObservable()

getValore(){
  return this.behaviorSubject.getValue()
}

   
    constructor() { }
  
   public value(){
    //  if(this.counter <0){
    //   return console.log("Error, number can't be negative")
    //  }else {
    //    return this.counter
    // }
   }

  increment(value: number) {
    // this.counter += value
    }


   
 decrement(value: number) {
      // if(this.counter > 0){
      // return this.counter -= value   
      // }else {
      // return  console.log("Error, number can't be negative")
      // }
    }

    
  }

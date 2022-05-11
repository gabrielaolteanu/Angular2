import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
 
// private behaviorSubject: BehaviorSubject<number>= new BehaviorSubject<number>(0);
 private counter= new BehaviorSubject<number>(0)

// // getValore(){
// //   return this.behaviorSubject.getValue()
// // }

   
    constructor() { }
  
value(){
  return this.counter.asObservable()
}


  // public value(){
    //  if(this.counter <0){
    //   return console.log("Error, number can't be negative")
    //  }else {
    //    return this.counter
    // }
   //}

  increment(value: number) {
   let startValue= 1
    if(!value){
 this.counter.next(startValue + this.counter.value)
    }else {
      this.counter.next(value + this.counter.value) 
    }
   }


   
 decrement(value: number) {
    let startValue= 1
       if(this.counter.value <= 0){
           console.log("Error, number can't be negative")
       
       }else if(value){
 this.counter.next(this.counter.value - value)
       }
       else {
 this.counter.next(this.counter.value - startValue)
      }
    }
  }

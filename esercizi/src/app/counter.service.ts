import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
 
    count = 0;
    constructor() { }
  
    increment() {
      this.count++;
    }
  
  
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { BeerList } from './Beer';
import { IBeer } from './beers';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

private beersService$:IBeer[] = BeerList

 constructor() { } 
private subject= new BehaviorSubject<IBeer[]>(this.beersService$)
public beers$= this.subject.asObservable()
 
  takeAll(): Observable<IBeer[]> {
return this.beers$
  }
 takeId(id: number): Observable<IBeer> {
  const idBeer= this.beersService$.filter(item => item.id === id)
  return from(idBeer)
 }
  
 
}

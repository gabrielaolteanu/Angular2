import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BeerService } from '../beer.service';
import { IBeer } from '../beers';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

constructor(private beerService: BeerService){}

  birre$= this.beerService.takeAll()
beers!: IBeer[]
beerSelect: IBeer[] = []
name: string = '';
type: string = '';
getId(id: number){
  const beer =this.beerService.takeId(id)
  console.log(beer) 
  }
 
validation= new FormGroup({
beer: new FormControl('', [Validators.required]),
type: new FormControl('', [Validators.required])
})

Type(): void {
  const beerId = this.beers.find(beer => beer.name === this.name)?.id;

  this.beerService.takeId(beerId!).subscribe((data) => {
    this.type = data.type
  })
}

getBeer(): void {
  const beerId = this.beers.find(beer => beer.name === this.name)?.id;

  this.beerService.takeId(beerId!).subscribe((data) => {
    if (this.beerSelect.includes(data)) {
      return this.beerSelect
    }
    this.beerSelect.push(data);
    return this.beerSelect
  })
}

 
  

  ngOnInit(): void {
  

  }

}

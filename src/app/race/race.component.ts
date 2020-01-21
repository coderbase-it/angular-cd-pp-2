import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-race', 
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaceComponent implements OnInit {
  ponies = [{ id: 1, color: 'green' }, { id: 2, color: 'blue' }];
  colors = ['green', 'orange', 'blue'];

  constructor() { }

  ngOnInit() {
  }

  check() {
    console.log('race component view checked');
  }

  changeColor() { 
    // ici on change la propriété d'un object du tableau ponies la référence mémoire reste la meme 
    //this.ponies[0].color = this.randomColor(0, //this.colors.length - 1);

// solution 
    const pony = this.ponies[0];
  // create a new pony with the old attributes and the new color
  this.ponies[0] = { ...pony, color: this.randomColor(0, this.colors.length - 1) };
  } 

  randomColor(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return this.colors[Math.floor(Math.random() * (max - min + 1)) + min];

}
}
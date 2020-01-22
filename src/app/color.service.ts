import { Injectable } from '@angular/core';
import { interval} from 'rxjs';
import { map} from 'rxjs/operators';
@Injectable()
export class ColorService {
  colors = ['green', 'orange', 'blue'];

 
  randomColor() {
   
   const max = Math.floor(this.colors.length - 1);
    return this.colors[Math.floor(Math.random() * (max  + 1)) ];

}
get(){
  return interval(1000).pipe(
    map( _ => this.randomColor())
  )
}
}
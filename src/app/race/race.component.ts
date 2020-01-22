import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { ColorService} from '../color.service';

@Component({
  selector: 'app-race', 
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaceComponent implements OnInit {
  ponies = [{ id: 1, color: 'green' }, { id: 2, color: 'blue' }];

  constructor(private colorService: ColorService) { }

  ngOnInit() {
  }

  check() {
    console.log('race component view checked');
  }


}
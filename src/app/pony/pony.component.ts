import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Subscription, Observable} from 'rxjs';
import {ColorService} from '../color.service';
@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
 
})
export class PonyComponent implements OnInit {

color:Observable<string>;

  constructor(private colorService: ColorService) {
  }

 
  ngOnInit() {
       this.color  = this.colorService.get()
  }
  check() {
    console.log('pony component view checked');
  }



}
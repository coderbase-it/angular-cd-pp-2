import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Subscription} from 'rxjs';
import {ColorService} from '../color.service';
@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PonyComponent implements OnInit {
 @Input() ponyModel;
color:string;
  subscription: Subscription;

  constructor(private colorService: ColorService) {
  }


  ngOnInit() {
     this.subscription = this.colorService.get()
      .subscribe(color => this.color = color);
  }
  check() {
    console.log('pony component view checked');
  }

    getPonyImageUrl() {
    
    return `https://cdn.jsdelivr.net/gh/coderbase-it/angular-cd-pp@master/src/assets/images/pony-${this.ponyModel.color}-running.gif`;
  }


}
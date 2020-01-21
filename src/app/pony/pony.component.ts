import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PonyComponent implements OnInit {
 @Input() ponyModel;

  

  constructor() { }

  ngOnInit() {
  }
  check() {
    console.log('pony component view checked');
  }

    getPonyImageUrl() {
    
    return `https://cdn.jsdelivr.net/gh/coderbase-it/angular-cd-pp@master/src/assets/images/pony-${this.ponyModel.color}-running.gif`;
  }


}
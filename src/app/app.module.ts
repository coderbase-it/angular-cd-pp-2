import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';

import { PonyComponent } from './pony/pony.component';
import { RaceComponent } from './race/race.component';
import { PonyImageComponent } from './pony-image/pony-image.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ], 
  declarations: [ AppComponent, PonyComponent, RaceComponent, PonyImageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 
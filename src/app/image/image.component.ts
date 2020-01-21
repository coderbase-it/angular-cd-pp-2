import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() image: string;
  constructor(
    private http: HttpClient){
    

  }

  ngOnInit() {
        this.http.get('https://picsum.photos/id/0/info').subscribe(
      (data: any) => 
      this.image = data.download_url
    )
  }
check() {
      console.log('image component view checked');
  }
}
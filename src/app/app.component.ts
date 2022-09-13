import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  imgParent: string = '';
  showImg: boolean = true;

  onLoaded(img: string){

    console.log("log padre", img);

  }

  imgToogle(){

    this.showImg = !this.showImg;

  }

}

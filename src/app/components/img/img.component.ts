import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  imgDefault: string;

  @Input() img: string = 'valor init';
  @Output() loaded = new EventEmitter<string>();
  counter = 0;
  counterFn: number | undefined;



  constructor() {

    this.imgDefault = "../../../assets/images/default.png";
    console.log(`Constructor imgValue => ${this.img}`);

  }

  ngOnChanges(): void {

    console.log(`onChange imgValue => ${this.img}`);


  }

  ngOnInit(): void {

    //before render
    // async - fecth -- once time

    console.log(`onChange imgValue => ${this.img}`);
    this.counterFn = window.setInterval(() => {

      this.counter += 1;
      console.log(this.counter)

    }, 1000);

  }

  ngAfterViewInit(): void {

    console.log(`ngAfterViewInit imgValue => ${this.img}`);

  }

  ngOnDestroy(): void {

    console.log(`ngOnDestroy imgValue => ${this.img}`);
    window.clearInterval(this.counterFn);

  }

  imgError(){

    this.img = this.imgDefault;

  }

  imgLoad(){

    console.log("log hijo")
    this.loaded.emit(this.img);

  }

}

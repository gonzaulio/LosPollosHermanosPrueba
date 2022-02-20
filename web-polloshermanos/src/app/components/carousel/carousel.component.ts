import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  public imagenes:any[]=[
    {img: 'assets/files/header-01.jpg', nombre: 'files1'},
    {img: 'assets/files/header-05.jpg', nombre: 'files2'},
    {img: 'assets/files/header-07.jpg', nombre: 'files3'},
  ]

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
  }

  ngOnInit(): void {
  }

}

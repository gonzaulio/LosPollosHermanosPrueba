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
    {img: 'assets/prueba/header-01.jpg', nombre: 'prueba1'},
    {img: 'assets/prueba/header-05.jpg', nombre: 'prueba2'},
    {img: 'assets/prueba/header-07.jpg', nombre: 'prueba3'},
  ]

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
  }

  ngOnInit(): void {
  }

}

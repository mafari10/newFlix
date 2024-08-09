import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { img_Base_url } from '../../constants/imageUrl'
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    // animation definitions go here
    trigger("slideFade", [
      state("void", style({ opacity: 0 })),
      transition("void<=>*", [animate("1s")
      ])
    ])
  ],

})
export class SliderComponent implements OnInit {
  // importing movie slider from home component this makes slider dynamic
  @Input() slide: Movie[] = [];
  constructor() { }

  // Round the number to 1dp
  roundNumber(num: number): number {
    return Math.floor(num);
  }

  // imagebase url
  imgUrl = img_Base_url;
  // Counter for slider
  slideIndex = 0;
  ngOnInit() {
    this.changeSlide();
  }

  changeSlide() {
    setInterval(() => {
      this.slideIndex += 1
      if (this.slideIndex > 16) {
        this.slideIndex = 0
      }
    }, 5000);
  }

}

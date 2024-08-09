import { Component, Input } from '@angular/core';
import { Movie } from '../../model/movie';
import { CommonModule } from '@angular/common';
import { img_Base_url } from '../../constants/imageUrl';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-show-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss'
})
export class ShowItemComponent {
  @Input() showItem: Movie | null = null; // this is list of movies from the parents banner component
  imgUrl = img_Base_url; // image variable url
  roundNumber(num: number): number {
    return Math.floor(num);
  }
}

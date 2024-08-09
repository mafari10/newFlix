import { Component, Input } from '@angular/core';
import { ShowItemComponent } from '../show-item/show-item.component';
import { CommonModule } from '@angular/common';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ShowItemComponent, CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input() shows: Movie[] = []; // this fetches the list of movies from the parent Home component
  @Input() title: string = ''; //this is for the dynamic title of the banner components
}

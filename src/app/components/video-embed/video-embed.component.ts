import { Component, inject, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed',
  standalone: true,
  imports: [],
  templateUrl: './video-embed.component.html',
  styleUrl: './video-embed.component.scss'
})
export class VideoEmbedComponent implements OnInit {

  @Input() video: string | null = null;

  videoUrl: SafeResourceUrl = '';

  private sanitizer = inject(DomSanitizer);
  ngOnInit(): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.video}`)
  }
}

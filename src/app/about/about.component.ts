import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  carouselImages = [
    { source: 'images/Profile-green.webp' },
    { source: 'images/Profile-circular.webp' },
    { source: 'images/Profile-skin.webp' },
  ];
  
  currentIndex = 1;

  ngOnInit(): void {
    this.startCarousel();
    setTimeout(() => {
      window.scroll({ top: -1, left: 0, behavior: "smooth" });
    }, 10);
    
  }

  startCarousel(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
    }, 3000);
  }
  
}


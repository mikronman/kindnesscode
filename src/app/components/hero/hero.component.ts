import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() backgroundImage: string = ''; // Initialize with a default value
  @Input() isParallaxEnabled = true;

  @HostListener('window:scroll')
  onScroll() {
    if (this.isParallaxEnabled) {
      const yOffset = window.pageYOffset;
      const backgroundElement = document.querySelector('.hero-background') as HTMLElement;
      if (backgroundElement) {
        backgroundElement.style.transform = `translate3d(0, ${yOffset * 0.4}px, 0)`;
      }
    }
  }
}
